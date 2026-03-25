import React, { useState, useEffect } from 'react';
import '../css/styles.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Apply dark theme based on state
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [isDarkMode]);

  useEffect(() => {
    // Add shadow to header on scroll (if header exists)
    const handleScroll = () => {
      const header = document.querySelector('.header');
      if (header) {
        if (window.scrollY > 10) {
          header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        } else {
          header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);




  return (
    <>
      <header className="header">
        <div className="header-content">
          <a href="tel:+13132900040" className="header-contact" style={{ textDecoration: 'none', color: 'inherit' }}>
            <i className='bx bx-phone-call'></i>
            <span>+1 313 290-0040</span>
          </a>
          <nav className="header-nav">
            <a href="#services-section">Services</a>
            <a href="#reviews-section">Reviews</a>
            <a href="#contact-section">Contact</a>
          </nav>
        </div>
      </header>

      <main className="booking-container" style={{ position: 'relative' }}>
        {/* Dark Mode Toggle */}
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="theme-toggle-btn"
          aria-label="Toggle Dark Mode"
        >
          <i className={isDarkMode ? 'bx bx-sun' : 'bx bx-moon'} style={{ fontSize: '1.25rem' }}></i>
        </button>

        {/* Two-Column Layout */}
        <div className="page-layout">

          {/* ── LEFT: Main scrollable content ── */}
          <div className="main-content">

            {/* Provider Header Stacked */}
            <div className="provider-header-stacked">
              <div className="avatar-container-stacked">
                <img src={`${import.meta.env.BASE_URL}assets/profile.png`} alt="Ali Yunus - Dearborn Immigration Services" className="avatar-photo" />
              </div>
              <div className="provider-title-row">
                <h1>Dearborn Immigration Service</h1>
                <div className="reviews-inline">
                  <span className="rating-score">4.9</span>
                  <div className="stars">
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star'></i>
                    <i className='bx bxs-star-half'></i>
                  </div>
                  <span className="review-count">(27 Google Reviews)</span>
                </div>
                <div className="address-inline" id="address-section">
                  <i className='bx bx-map'></i>
                  <span>835 Mason St Suite A-332<br />Dearborn, MI 48124</span>
                </div>
              </div>
            </div>

            {/* Services List */}
            <section className="services-stacked" id="services-section">
              <h2>Services</h2>

              <div className="service-category">
                <div className="service-item consultation-item" onClick={() => window.open('https://calendly.com/dearbornimmigration99/consultation', '_blank')} style={{ cursor: 'pointer' }}>
                  <div className="service-info">
                    <div className="service-text">
                      <h4>Consultation</h4>
                      <div className="service-meta">
                        <span>15 mins</span>
                        <span className="dot-separator">·</span>
                        <span className="details-link">Case discussion</span>
                        <span className="dot-separator">·</span>
                        <span className="price">$50</span>
                      </div>
                    </div>
                  </div>
                  <i className='bx bx-chevron-right'></i>
                </div>

                <div className="service-item" onClick={() => window.open('https://api.whatsapp.com/send?phone=13132900040', '_blank')} style={{ cursor: 'pointer' }}>
                  <div className="service-info">
                    <div className="service-text">
                      <h4>Translation</h4>
                      <div className="service-meta">
                        <span className="details-link" style={{ textDecoration: 'none' }}>Document translation</span>
                      </div>
                    </div>
                  </div>
                  <i className='bx bx-chevron-right'></i>
                </div>

                <div className="service-item" onClick={() => window.open('https://api.whatsapp.com/send?phone=13132900040', '_blank')} style={{ cursor: 'pointer' }}>
                  <div className="service-info">
                    <div className="service-text">
                      <h4>Documents Review</h4>
                      <div className="service-meta">
                        <span className="details-link" style={{ textDecoration: 'none' }}>Application review</span>
                      </div>
                    </div>
                  </div>
                  <i className='bx bx-chevron-right'></i>
                </div>
              </div>
            </section>

            {/* Testimonials */}
            <section className="reviews-section-container" id="reviews-section">
              <h2>Testimonials</h2>
              <div className="commonninja_component pid-82613e74-4d30-4c4c-bd16-d574673d87b7"></div>
            </section>

            {/* Footer Grid */}
            <div className="footer-grid">
              <div className="footer-section contact-us-section" id="contact-section">
                <h3>Contact us</h3>
                <div className="contact-links">
                  <a href="tel:+13132900040"><i className='bx bx-phone'></i> +1 313 290-0040</a>
                  <a href="mailto:info@Dearbornimmigration.com"><i className='bx bx-envelope'></i> info@Dearbornimmigration.com</a>
                </div>
                <div className="social-links">
                  <a href="https://www.instagram.com/dearbornimmigration?igsh=NmgxM3piNHNjeWlo" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon social-instagram">
                    <i className='bx bxl-instagram'></i>
                  </a>
                  <a href="https://www.tiktok.com/@dearbornimmigration?_r=1&_t=ZS-94m2XKuaxjF" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="social-icon social-tiktok">
                    <i className='bx bxl-tiktok'></i>
                  </a>
                  <a href="https://www.facebook.com/share/184o73vjdX/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon social-facebook">
                    <i className='bx bxl-facebook'></i>
                  </a>
                  <a href="https://youtube.com/@dearbornimmigration?si=QFVF08sJccAVELkp" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-icon social-youtube">
                    <i className='bx bxl-youtube'></i>
                  </a>
                </div>
              </div>

              <div className="footer-section map-section">
                <h3>Location</h3>
                <div className="map-embed-stacked">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2950.4132479633644!2d-83.2486667!3d42.3075554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b35349f49b539%3A0xc5c04d0aa18af089!2sDearborn%20Immigration%20Services!5e0!3m2!1sen!2sus!4v1709668000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Dearborn Immigration Services Location"
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="booking-footer">
              <p>Powered by Dearborn Immigration Service</p>
            </div>
          </div>

          {/* ── RIGHT: Sticky Sidebar Card ── */}
          <aside className="provider-sidebar">
            <div className="sidebar-card">
              <div className="sidebar-photo-wrap">
                <img src={`${import.meta.env.BASE_URL}assets/profile.png`} alt="Ali" className="sidebar-photo" />
              </div>
              <div className="sidebar-name">Ali </div>
              <div className="sidebar-title">Immigration Consultant</div>

              <div className="sidebar-rating">
                <div className="sidebar-stars">
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star'></i>
                  <i className='bx bxs-star-half'></i>
                </div>
                <span className="sidebar-rating-score">4.9</span>
                <span className="sidebar-review-count">27 reviews</span>
              </div>

              <div className="sidebar-divider"></div>

              <div className="sidebar-hours">
                <div className="sidebar-hours-title"><i className='bx bx-time'></i> Working Hours</div>
                <div className="sidebar-hours-grid">
                  <span>Mon – Sat</span><span>9:00 AM – 5:00 PM</span>
                  <span>Sunday</span><span className="closed">Closed</span>
                </div>
              </div>

              <div className="sidebar-divider"></div>

              <a href="https://calendly.com/dearbornimmigration99/consultation" target="_blank" rel="noopener noreferrer" className="sidebar-book-btn">
                <i className='bx bx-calendar-check'></i>
                Book a Consultation
              </a>
            </div>
          </aside>

        </div>{/* end .page-layout */}

        {/* Floating Book Button */}
        <a href="https://calendly.com/dearbornimmigration99/consultation" target="_blank" rel="noopener noreferrer" className="floating-book-btn">
          <i className='bx bx-calendar-check'></i>
          Book a call
        </a>
      </main>
    </>
  );
}

export default App;
