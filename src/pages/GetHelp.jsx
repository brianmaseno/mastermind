import React, { useState, useRef } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function GetHelp() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: '',
    subject: '',
    deadline: '',
    details: ''
  })
  const [file, setFile] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const fileInputRef = useRef(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    try {
      const data = new FormData()
      data.append('fullName', formData.fullName)
      data.append('email', formData.email)
      data.append('phone', formData.phone)
      data.append('serviceType', formData.serviceType)
      data.append('subject', formData.subject)
      data.append('deadline', formData.deadline)
      data.append('details', formData.details)
      if (file) {
        data.append('file', file)
      }

      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'
      await axios.post(`${API_URL}/api/submissions`, data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })

      setSubmitted(true)
    } catch (err) {
      setError('Failed to submit your request. Please try again or contact us via WhatsApp.')
      console.error(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <>
        <Navbar />
        <section className="page-header">
          <div className="container">
            <h1>Request Submitted</h1>
            <p>Thank you for reaching out to us</p>
          </div>
        </section>
        <section className="form-section">
          <div className="container">
            <div className="form-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
              <div className="form-success">
                <div className="success-icon">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3>Request Received!</h3>
                <p>We have received your request and will contact you shortly via email or phone. You can also reach us directly on WhatsApp for faster response.</p>
                <div style={{ marginTop: '24px' }}>
                  <a 
                    href="https://wa.me/254796761628?text=Hello%2C%20I%20just%20submitted%20a%20request%20on%20your%20website" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navbar />
      
      <section className="page-header">
        <div className="container">
          <h1>Get Help Now</h1>
          <p>Submit your request and our team will get back to you promptly</p>
        </div>
      </section>

      <section className="form-section">
        <div className="container">
          <div className="form-grid">
            <div className="form-info">
              <h2>Let Us Help You Succeed</h2>
              <p>Fill out the form with your assignment details and we'll provide you with a custom solution. Our team of experts is ready to assist you.</p>
              
              <div className="info-features">
                <div className="info-feature">
                  <div className="info-feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4>Quick Response</h4>
                    <p>We typically respond within 1-2 hours</p>
                  </div>
                </div>
                <div className="info-feature">
                  <div className="info-feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4>Secure & Confidential</h4>
                    <p>Your information is protected and private</p>
                  </div>
                </div>
                <div className="info-feature">
                  <div className="info-feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4>24/7 Support</h4>
                    <p>Available anytime you need assistance</p>
                  </div>
                </div>
                <div className="info-feature">
                  <div className="info-feature-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4>Direct Contact</h4>
                    <p>WhatsApp: +254796761628</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-card">
              <h3>Submit Your Request</h3>
              <p>Provide your details and assignment information below</p>

              {error && <div className="error-message">{error}</div>}

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name *</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone/WhatsApp *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 8900"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="serviceType">Service Type *</label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="online-class">Online Class Assistance</option>
                      <option value="assignment">Assignment/Homework Help</option>
                      <option value="proctored-exam">Proctored Exam Support</option>
                      <option value="essay">Essay Writing</option>
                      <option value="research-paper">Research Paper</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="subject">Subject/Course</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g., Mathematics, Biology"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="deadline">Deadline</label>
                    <input
                      type="datetime-local"
                      id="deadline"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="details">Assignment Details</label>
                  <textarea
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    placeholder="Describe your assignment, include any specific requirements, instructions, or questions you have..."
                    rows={5}
                  ></textarea>
                </div>

                <div className="form-group">
                  <label>Upload Assignment File (Optional)</label>
                  <div 
                    className="file-upload"
                    onClick={() => fileInputRef.current.click()}
                  >
                    <div className="file-upload-icon">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                      </svg>
                    </div>
                    <p>Click to upload or drag and drop</p>
                    <span>PDF, DOC, DOCX, TXT, JPG, PNG (Max 10MB)</span>
                    {file && (
                      <div className="file-name">{file.name}</div>
                    )}
                  </div>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.zip"
                    style={{ display: 'none' }}
                  />
                </div>

                <div className="form-submit">
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="spinner"></span>
                        Submitting...
                      </>
                    ) : (
                      'Submit Request'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <a 
        href="https://wa.me/254796761628?text=Hello%2C%20I%20need%20help%20with%20my%20online%20classes" 
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" className="whatsapp-icon">
          <path fill="currentColor" d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-5.252 1.408 1.409-5.235-0.32-0.524c-1.299-2.148-1.977-4.627-1.977-7.221 0-7.51 6.11-13.62 13.62-13.62s13.62 6.11 13.62 13.62-6.11 13.62-13.62 13.62zM21.305 19.26c-0.346-0.174-2.049-1.007-2.366-1.123-0.316-0.117-0.547-0.174-0.776 0.174s-0.892 1.123-1.094 1.347c-0.201 0.224-0.402 0.251-0.748 0.076-0.346-0.174-1.461-0.539-2.785-1.722-1.031-0.922-1.727-2.061-1.929-2.407-0.201-0.346-0.022-0.533 0.152-0.707 0.156-0.155 0.346-0.402 0.518-0.603 0.174-0.201 0.231-0.346 0.346-0.571 0.117-0.224 0.058-0.427-0.028-0.603s-0.776-1.87-1.063-2.565c-0.28-0.672-0.56-0.58-0.776-0.591-0.2-0.008-0.428-0.010-0.656-0.010s-0.603 0.085-0.92 0.427c-0.316 0.346-1.206 1.179-1.206 2.873s1.235 3.333 1.406 3.561c0.174 0.224 2.425 3.732 5.872 5.234 0.821 0.354 1.462 0.566 1.962 0.724 0.825 0.262 1.577 0.225 2.168 0.137 0.662-0.099 2.049-0.835 2.335-1.642 0.288-0.807 0.288-1.501 0.201-1.642-0.086-0.14-0.316-0.224-0.662-0.398z"/>
        </svg>
      </a>
    </>
  )
}

export default GetHelp