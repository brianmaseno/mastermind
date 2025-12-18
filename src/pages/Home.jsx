import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import heroImage from '../images/portrait-young-african-woman-with-laptop-white.jpg'
import whyChooseImage from '../images/medium-shot-woman-working-home.jpg'

function Home() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              Academic Excellence Partner
            </div>
            <h1>
              Expert Academic<br />
              <span className="highlight">Assistance</span> for<br />
              Your Success
            </h1>
            <p className="hero-subtitle">
              We provide comprehensive support for online classes, assignments, and exams. 
              Our expert team ensures you achieve your academic goals with confidence.
            </p>
            <div className="hero-features">
              <div className="hero-feature">
                <span className="feature-check">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                24/7 Expert Support Available
              </div>
              <div className="hero-feature">
                <span className="feature-check">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                All Subjects and Platforms Covered
              </div>
              <div className="hero-feature">
                <span className="feature-check">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </span>
                Guaranteed Results and Satisfaction
              </div>
            </div>
            <div className="hero-cta">
              <Link to="/get-help" className="btn btn-primary">Get Started Today</Link>
              <Link to="/services" className="btn btn-secondary">View Services</Link>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              <img src={heroImage} alt="Student success" className="hero-image" />
              <div className="hero-decoration"></div>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">2000+</div>
                <div className="stat-label">Students Helped</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Success Rate</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Subjects</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="services-preview">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What We Offer</span>
            <h2>Comprehensive Academic Services</h2>
            <p className="section-subtitle">
              From online classes to proctored exams, we provide end-to-end academic support 
              tailored to your specific needs.
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                  <path d="M12 14v7"></path>
                </svg>
              </div>
              <h3>Online Class Assistance</h3>
              <p>Expert help for all types of online courses. We work with Canvas, Blackboard, Moodle, and all major learning platforms.</p>
              <Link to="/services" className="service-link">
                Learn More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3>Assignment & Homework Help</h3>
              <p>Professional completion of essays, problem sets, lab reports, research papers, and any other academic assignments.</p>
              <Link to="/services" className="service-link">
                Learn More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3>Proctored Exam Support</h3>
              <p>Advanced assistance for proctored exams including ProctorU, Honorlock, Respondus, and other monitoring systems.</p>
              <Link to="/services" className="service-link">
                Learn More
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose">
        <div className="container">
          <div className="why-choose-grid">
            <div className="why-choose-image">
              <img src={whyChooseImage} alt="Professional support" className="why-choose-img" />
              <div className="experience-badge">
                <div className="experience-number">5+</div>
                <div className="experience-text">Years Experience</div>
              </div>
            </div>
            <div className="why-choose-content">
              <span className="section-label">Why Choose Us</span>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.5rem', fontWeight: 700, color: '#0F172A', marginBottom: '16px' }}>
                Trusted by Thousands of Students Worldwide
              </h2>
              <p style={{ color: '#64748B', lineHeight: 1.7, marginBottom: '24px' }}>
                We understand the challenges of modern education. Our dedicated team of experts 
                is committed to helping you succeed in your academic journey.
              </p>
              <div className="benefits-list">
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div className="benefit-content">
                    <h4>High Success Rate</h4>
                    <p>95%+ satisfaction rate with guaranteed grades on all services</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div className="benefit-content">
                    <h4>Fast Turnaround</h4>
                    <p>Quick response times with immediate assistance available</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  </div>
                  <div className="benefit-content">
                    <h4>100% Confidential</h4>
                    <p>Your privacy is our priority with secure and private service</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <div className="benefit-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div className="benefit-content">
                    <h4>Affordable Pricing</h4>
                    <p>Competitive rates with flexible payment options available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="contact">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Started?</h2>
            <p>Contact us now for immediate assistance with your classes and exams. Our expert team is available 24/7.</p>
            <div className="contact-methods">
              <div className="contact-method">
                <h3>Email</h3>
                <p>mustermind.learning.tutors@gmail.com</p>
              </div>
              <div className="contact-method">
                <h3>WhatsApp</h3>
                <p>+13292106984</p>
              </div>
              <div className="contact-method">
                <h3>Availability</h3>
                <p>24/7 Support</p>
              </div>
            </div>
            <div className="cta-buttons">
              <Link to="/get-help" className="btn btn-white btn-large">Submit Your Request</Link>
              <a href="https://wa.me/13292106984?text=Hello%2C%20I%20need%20help%20with%20my%20online%20classes" target="_blank" rel="noopener noreferrer" className="btn btn-outline-white btn-large">
                Chat on WhatsApp
              </a>
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

export default Home
