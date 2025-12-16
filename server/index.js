import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true
}));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://brianmayoga_db_user:TwS2nJaHf7XJn7gI@mastermind.wnifdqj.mongodb.net/?appName=mastermind';
const JWT_SECRET = process.env.JWT_SECRET || 'mustermind_secret_key_2024';

mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Schemas
const submissionSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  serviceType: { type: String, required: true },
  subject: { type: String },
  deadline: { type: String },
  details: { type: String },
  fileName: { type: String },
  filePath: { type: String },
  status: { type: String, default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});

const adminSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Submission = mongoose.model('Submission', submissionSchema);
const Admin = mongoose.model('Admin', adminSchema);

// Multer Configuration for File Uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, 'uploads'));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

const upload = multer({ 
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['.pdf', '.doc', '.docx', '.txt', '.jpg', '.jpeg', '.png', '.zip'];
    const ext = path.extname(file.originalname).toLowerCase();
    if (allowedTypes.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'));
    }
  }
});

// Create uploads directory
import fs from 'fs';
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Auth Middleware
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.admin = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

// Routes

// Submit assignment request
app.post('/api/submissions', upload.single('file'), async (req, res) => {
  try {
    const { fullName, email, phone, serviceType, subject, deadline, details } = req.body;
    
    const submission = new Submission({
      fullName,
      email,
      phone,
      serviceType,
      subject,
      deadline,
      details,
      fileName: req.file?.originalname,
      filePath: req.file?.path
    });

    await submission.save();
    res.status(201).json({ message: 'Submission received successfully', id: submission._id });
  } catch (error) {
    console.error('Submission error:', error);
    res.status(500).json({ message: 'Error submitting request' });
  }
});

// Admin Login
app.post('/api/admin/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    let admin = await Admin.findOne({ username });
    
    // Create default admin if none exists
    if (!admin && username === 'admin') {
      const hashedPassword = await bcrypt.hash('admin123', 10);
      admin = new Admin({ username: 'admin', password: hashedPassword });
      await admin.save();
    }
    
    if (!admin) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: admin._id, username: admin.username }, JWT_SECRET, { expiresIn: '24h' });
    res.json({ token, username: admin.username });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all submissions (protected)
app.get('/api/admin/submissions', authMiddleware, async (req, res) => {
  try {
    const submissions = await Submission.find().sort({ createdAt: -1 });
    res.json(submissions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching submissions' });
  }
});

// Update submission status (protected)
app.patch('/api/admin/submissions/:id', authMiddleware, async (req, res) => {
  try {
    const { status } = req.body;
    const submission = await Submission.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    res.json(submission);
  } catch (error) {
    res.status(500).json({ message: 'Error updating submission' });
  }
});

// Delete submission (protected)
app.delete('/api/admin/submissions/:id', authMiddleware, async (req, res) => {
  try {
    await Submission.findByIdAndDelete(req.params.id);
    res.json({ message: 'Submission deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting submission' });
  }
});

// Download file (protected)
app.get('/api/admin/download/:id', authMiddleware, async (req, res) => {
  try {
    const submission = await Submission.findById(req.params.id);
    if (!submission || !submission.filePath) {
      return res.status(404).json({ message: 'File not found' });
    }
    res.download(submission.filePath, submission.fileName);
  } catch (error) {
    res.status(500).json({ message: 'Error downloading file' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
