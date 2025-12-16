import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function AdminDashboard() {
  const [submissions, setSubmissions] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [selectedSubmission, setSelectedSubmission] = useState(null)
  const [stats, setStats] = useState({ total: 0, pending: 0, inProgress: 0, completed: 0 })
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('adminToken')
    if (!token) {
      navigate('/admin')
      return
    }
    fetchSubmissions()
  }, [navigate])

  const fetchSubmissions = async () => {
    try {
      const token = localStorage.getItem('adminToken')
      const response = await axios.get('http://localhost:5000/api/admin/submissions', {
        headers: { Authorization: `Bearer ${token}` }
      })
      setSubmissions(response.data)
      
      // Calculate stats
      const total = response.data.length
      const pending = response.data.filter(s => s.status === 'pending').length
      const inProgress = response.data.filter(s => s.status === 'in-progress').length
      const completed = response.data.filter(s => s.status === 'completed').length
      setStats({ total, pending, inProgress, completed })
    } catch (err) {
      if (err.response?.status === 401) {
        localStorage.removeItem('adminToken')
        navigate('/admin')
      }
    } finally {
      setIsLoading(false)
    }
  }

  const updateStatus = async (id, status) => {
    try {
      const token = localStorage.getItem('adminToken')
      await axios.patch(`http://localhost:5000/api/admin/submissions/${id}`, { status }, {
        headers: { Authorization: `Bearer ${token}` }
      })
      fetchSubmissions()
      setSelectedSubmission(null)
    } catch (err) {
      console.error('Error updating status:', err)
    }
  }

  const deleteSubmission = async (id) => {
    if (!window.confirm('Are you sure you want to delete this submission?')) return
    
    try {
      const token = localStorage.getItem('adminToken')
      await axios.delete(`http://localhost:5000/api/admin/submissions/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      fetchSubmissions()
      setSelectedSubmission(null)
    } catch (err) {
      console.error('Error deleting submission:', err)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('adminToken')
    localStorage.removeItem('adminUsername')
    navigate('/admin')
  }

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const getStatusClass = (status) => {
    switch (status) {
      case 'pending': return 'status-pending'
      case 'in-progress': return 'status-in-progress'
      case 'completed': return 'status-completed'
      default: return 'status-pending'
    }
  }

  return (
    <div className="admin-dashboard">
      <header className="admin-header">
        <div className="container">
          <h1>Admin Dashboard</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span style={{ color: '#64748B' }}>
              Welcome, {localStorage.getItem('adminUsername') || 'Admin'}
            </span>
            <button onClick={handleLogout} className="btn btn-secondary" style={{ padding: '8px 16px' }}>
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="admin-content">
        <div className="container">
          {/* Stats Cards */}
          <div className="admin-stats">
            <div className="stat-card">
              <h3>{stats.total}</h3>
              <p>Total Submissions</p>
            </div>
            <div className="stat-card">
              <h3>{stats.pending}</h3>
              <p>Pending</p>
            </div>
            <div className="stat-card">
              <h3>{stats.inProgress}</h3>
              <p>In Progress</p>
            </div>
            <div className="stat-card">
              <h3>{stats.completed}</h3>
              <p>Completed</p>
            </div>
          </div>

          {/* Submissions Table */}
          <div className="submissions-table">
            <div className="table-header">
              <h2>Recent Submissions</h2>
              <button onClick={fetchSubmissions} className="btn btn-secondary" style={{ padding: '8px 16px' }}>
                Refresh
              </button>
            </div>

            {isLoading ? (
              <div className="loading">
                <span className="spinner"></span>
                Loading submissions...
              </div>
            ) : submissions.length === 0 ? (
              <div style={{ padding: '60px 24px', textAlign: 'center', color: '#64748B' }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ margin: '0 auto 16px', opacity: 0.5 }}>
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <p>No submissions yet</p>
              </div>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Service</th>
                    <th>Status</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((submission) => (
                    <tr key={submission._id}>
                      <td style={{ fontWeight: 500, color: '#1E293B' }}>{submission.fullName}</td>
                      <td>{submission.email}</td>
                      <td>{submission.phone}</td>
                      <td>{submission.serviceType}</td>
                      <td>
                        <span className={`status-badge ${getStatusClass(submission.status)}`}>
                          {submission.status}
                        </span>
                      </td>
                      <td>{formatDate(submission.createdAt)}</td>
                      <td>
                        <button 
                          className="action-btn action-btn-view"
                          onClick={() => setSelectedSubmission(submission)}
                        >
                          View
                        </button>
                        <button 
                          className="action-btn action-btn-delete"
                          onClick={() => deleteSubmission(submission._id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      {/* Submission Detail Modal */}
      {selectedSubmission && (
        <div className="modal-overlay" onClick={() => setSelectedSubmission(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h3>Submission Details</h3>
            
            <div className="modal-field">
              <label>Full Name</label>
              <p>{selectedSubmission.fullName}</p>
            </div>
            
            <div className="modal-field">
              <label>Email</label>
              <p>{selectedSubmission.email}</p>
            </div>
            
            <div className="modal-field">
              <label>Phone/WhatsApp</label>
              <p>{selectedSubmission.phone}</p>
            </div>
            
            <div className="modal-field">
              <label>Service Type</label>
              <p>{selectedSubmission.serviceType}</p>
            </div>
            
            {selectedSubmission.subject && (
              <div className="modal-field">
                <label>Subject</label>
                <p>{selectedSubmission.subject}</p>
              </div>
            )}
            
            {selectedSubmission.deadline && (
              <div className="modal-field">
                <label>Deadline</label>
                <p>{formatDate(selectedSubmission.deadline)}</p>
              </div>
            )}
            
            {selectedSubmission.details && (
              <div className="modal-field">
                <label>Details</label>
                <p style={{ whiteSpace: 'pre-wrap' }}>{selectedSubmission.details}</p>
              </div>
            )}
            
            {selectedSubmission.fileName && (
              <div className="modal-field">
                <label>Attached File</label>
                <p>
                  <a 
                    href={`http://localhost:5000/api/admin/download/${selectedSubmission._id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: '#0B4D2C', fontWeight: 500 }}
                  >
                    {selectedSubmission.fileName}
                  </a>
                </p>
              </div>
            )}
            
            <div className="modal-field">
              <label>Current Status</label>
              <span className={`status-badge ${getStatusClass(selectedSubmission.status)}`}>
                {selectedSubmission.status}
              </span>
            </div>
            
            <div className="modal-field">
              <label>Update Status</label>
              <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
                <button 
                  className="action-btn"
                  style={{ background: '#FEF3C7', color: '#92400E' }}
                  onClick={() => updateStatus(selectedSubmission._id, 'pending')}
                >
                  Pending
                </button>
                <button 
                  className="action-btn"
                  style={{ background: '#DBEAFE', color: '#1E40AF' }}
                  onClick={() => updateStatus(selectedSubmission._id, 'in-progress')}
                >
                  In Progress
                </button>
                <button 
                  className="action-btn"
                  style={{ background: '#DCFCE7', color: '#0B4D2C' }}
                  onClick={() => updateStatus(selectedSubmission._id, 'completed')}
                >
                  Completed
                </button>
              </div>
            </div>

            <div className="modal-actions">
              <a 
                href={`mailto:${selectedSubmission.email}`}
                className="btn btn-primary"
                style={{ padding: '10px 20px' }}
              >
                Send Email
              </a>
              <a 
                href={`https://wa.me/${selectedSubmission.phone.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ padding: '10px 20px' }}
              >
                WhatsApp
              </a>
              <button 
                onClick={() => setSelectedSubmission(null)}
                className="btn btn-secondary"
                style={{ padding: '10px 20px' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default AdminDashboard