import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import serviceImage1 from '../images/medium-shot-girl-holding-pen.jpg'
import serviceImage2 from '../images/medium-shot-woman-working-as-economist.jpg'
import serviceImage3 from '../images/african-woman-working-home-wearing-operator-headset-celebrating-achievement-with-happy-smile-winner-expression-with-raised-hand.jpg'

function Services() {
  const subjects = [
    'Mathematics', 'Statistics', 'Accounting', 'Finance', 'Economics', 'Business',
    'Computer Science', 'Programming', 'Chemistry', 'Biology', 'Physics', 'Nursing',
    'Psychology', 'Sociology', 'History', 'English', 'Literature', 'Engineering'
  ]

  const platforms = [
    'Canvas', 'Blackboard', 'Moodle', 'Pearson', 'McGraw-Hill', 
    'Cengage', 'WileyPLUS', 'MyMathLab', 'Edgenuity', 'Edmentum'
  ]

  return (
    <>
      <Navbar />
      
      <section className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive academic assistance tailored to your needs</p>
        </div>
      </section>

      <section className="services-detailed">
        <div className="container">
          <div className="services-horizontal-grid">
            {/* Online Class Assistance */}
            <div className="service-detail">
              <div className="service-detail-content">
                <h2>Online Class Assistance</h2>
                <p>
                  Expert help for all types of online courses. From pop quizzes to final exams, 
                  we provide comprehensive assistance to ensure you achieve the grades you need. 
                  Our team has extensive experience with all major learning platforms.
                </p>
                <ul className="service-features-list">
                  <li>
                    <span className="list-check">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    Complete course management
                  </li>
                  <li>
                    <span className="list-check">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    Quiz and exam assistance
                  </li>
                  <li>
                    <span className="list-check">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    Discussion board participation
                  </li>
                  <li>
                    <span className="list-check">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    All major platforms supported
                  </li>
                </ul>
                <Link to="/get-help" className="btn btn-primary">Get Started</Link>
              </div>
              <div className="service-detail-image">
                <img src={serviceImage1} alt="Online class assistance" />
                <div className="pricing-badge">
                  <span>Starting from</span>
                  <strong>$30 per class</strong>
                </div>
              </div>
            </div>

            {/* Assignment Help */}
            <div className="service-detail">
              <div className="service-detail-content">
                <h2>Assignment & Homework Help</h2>
                <p>
                  Don't let assignments pile up. We handle essays, problem sets, lab reports, 
                  research papers, and any other coursework you need completed. Our experts 
                  deliver quality work on time, every time.
                </p>
                <ul className="service-features-list">
                  <li>
                    <span className="list-check">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    Essays and research papers
                  </li>
                  <li>
                    <span className="list-check">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    Math and science problem sets
                  </li>
                  <li>
                    <span className="list-check">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    Programming assignments
                  </li>
                  <li>
                    <span className="list-check">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    Lab reports and case studies
                  </li>
                </ul>
                <Link to="/get-help" className="btn btn-primary">Get Started</Link>
              </div>
              <div className="service-detail-image">
                <img src={serviceImage2} alt="Assignment help" />
                <div className="pricing-badge">
                  <span>Starting from</span>
                  <strong>$20 per assignment</strong>
                </div>
              </div>
            </div>

            {/* Proctored Exam Support */}
            <div className="service-detail">
              <div className="service-detail-content">
                <h2>Proctored Exam Support</h2>
                <p>
                  Our most advanced service handles even the most strictly monitored exams. 
                  We have successfully helped thousands of students with proctored exams 
                  using cutting-edge techniques and real-time support.
                </p>
                <ul className="service-features-list">
                  <li>
                    <span className="list-check">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    ProctorU (Live and Record+)
                  </li>
                  <li>
                    <span className="list-check">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    Honorlock and Respondus
                  </li>
                  <li>
                    <span className="list-check">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    Proctorio and Examity
                  </li>
                  <li>
                    <span className="list-check">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </span>
                    PSI and Pearson VUE
                  </li>
                </ul>
                <Link to="/get-help" className="btn btn-primary">Get Started</Link>
              </div>
              <div className="service-detail-image">
                <img src={serviceImage3} alt="Proctored exam support" />
                <div className="pricing-badge">
                  <span>Starting from</span>
                  <strong>$150 per exam</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subjects Section */}
      <section className="subjects-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Subjects We Cover</span>
            <h2>Expert Assistance Across All Disciplines</h2>
            <p className="section-subtitle">
              Our team includes specialists in every major academic field
            </p>
          </div>
          <div className="subjects-grid">
            {subjects.map((subject, index) => (
              <div key={index} className="subject-item">{subject}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section style={{ padding: '80px 0', background: 'white' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Platforms</span>
            <h2>Learning Platforms We Support</h2>
            <p className="section-subtitle">
              We have experience with all major online learning management systems
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginTop: '40px' }}>
            {platforms.map((platform, index) => (
              <div 
                key={index} 
                style={{ 
                  background: '#F8FAFC', 
                  padding: '16px 32px', 
                  borderRadius: '50px',
                  fontWeight: 500,
                  color: '#1E293B',
                  border: '1px solid #E2E8F0'
                }}
              >
                {platform}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">FAQ</span>
            <h2>Frequently Asked Questions</h2>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>How does the service work?</h3>
              <p>Simply submit your request through our form or contact us via WhatsApp. We'll review your requirements, provide a quote, and get started once you confirm.</p>
            </div>
            <div className="faq-item">
              <h3>What grades do you guarantee?</h3>
              <p>We guarantee a minimum grade based on your requirements. Most of our clients receive A or B grades. We offer refunds if we don't meet the agreed grade.</p>
            </div>
            <div className="faq-item">
              <h3>Is my information safe?</h3>
              <p>Absolutely. We use encrypted communications and never share your personal information. Your privacy is our top priority.</p>
            </div>
            <div className="faq-item">
              <h3>How do I pay?</h3>
              <p>We accept various payment methods including PayPal, credit cards, and cryptocurrency. Payment details are provided after you confirm your order.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Get Help?</h2>
            <p>Submit your request now and get immediate assistance from our expert team.</p>
            <div className="cta-buttons">
              <Link to="/get-help" className="btn btn-white btn-large">Submit Request</Link>
              <a 
                href="https://wa.me/13292106984?text=Hello%2C%20I%20need%20help%20with%20my%20online%20classes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-white btn-large"
              >
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

export default Services