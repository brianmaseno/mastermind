import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import aboutImage from '../images/horizontal-shot-mixed-race-women-have-conversation-learning-process.jpg'

function About() {
  return (
    <>
      <Navbar />
      
      <section className="page-header">
        <div className="container">
          <h1>About Mustermind Learning</h1>
          <p>Your trusted partner in academic success since 2020</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-intro">
            <div className="about-text">
              <span className="section-label">Who We Are</span>
              <h2>Dedicated to Your Academic Success</h2>
              <p>
                Mustermind Learning is a leading provider of academic assistance services, 
                specializing in online class help, exam support, and assignment completion. 
                We understand the challenges modern students face with demanding coursework, 
                multiple responsibilities, and tight deadlines.
              </p>
              <p>
                Our team consists of experienced professionals and subject matter experts 
                who are dedicated to helping students achieve their academic goals through 
                comprehensive support services.
              </p>
              <p>
                With over 5 years of experience and thousands of satisfied students, 
                we have built a reputation for reliability, quality, and results.
              </p>
            </div>
            <div className="about-image">
              <img src={aboutImage} alt="Students learning" />
            </div>
          </div>

          <div className="how-it-works">
            <h2>How We Work</h2>
            <div className="steps-grid">
              <div className="step">
                <div className="step-number">1</div>
                <h3>Contact Us</h3>
                <p>Reach out via our form, email, or WhatsApp with your requirements</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h3>Get a Quote</h3>
                <p>Receive a custom quote based on your specific needs and deadline</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h3>Share Details</h3>
                <p>Provide the necessary information and assignment details</p>
              </div>
              <div className="step">
                <div className="step-number">4</div>
                <h3>We Deliver</h3>
                <p>Our experts complete your work with guaranteed quality results</p>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px', marginBottom: '80px' }}>
            <div style={{ background: '#F8FAFC', padding: '40px', borderRadius: '16px', textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', background: '#DCFCE7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: '#0B4D2C' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"></path>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#0F172A', marginBottom: '8px' }}>Expert Team</h3>
              <p style={{ color: '#64748B', lineHeight: 1.7 }}>
                Our team includes graduates from top universities with expertise across all major subjects.
              </p>
            </div>
            <div style={{ background: '#F8FAFC', padding: '40px', borderRadius: '16px', textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', background: '#DCFCE7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: '#0B4D2C' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#0F172A', marginBottom: '8px' }}>Proven Results</h3>
              <p style={{ color: '#64748B', lineHeight: 1.7 }}>
                Thousands of satisfied students with consistently high grades and successful completions.
              </p>
            </div>
            <div style={{ background: '#F8FAFC', padding: '40px', borderRadius: '16px', textAlign: 'center' }}>
              <div style={{ width: '64px', height: '64px', background: '#DCFCE7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: '#0B4D2C' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 style={{ fontSize: '1.25rem', color: '#0F172A', marginBottom: '8px' }}>100% Secure</h3>
              <p style={{ color: '#64748B', lineHeight: 1.7 }}>
                Your privacy and security are our top priorities. All services are confidential.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Achieve Your Academic Goals?</h2>
            <p>Join thousands of students who have trusted us with their academic success.</p>
            <div className="cta-buttons">
              <Link to="/get-help" className="btn btn-white btn-large">Get Started Now</Link>
              <Link to="/services" className="btn btn-outline-white btn-large">View Our Services</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <a 
        href="https://wa.me/13292106984?text=Hello%2C%20I%20need%20help%20with%20my%20online%20classes" 
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

export default About