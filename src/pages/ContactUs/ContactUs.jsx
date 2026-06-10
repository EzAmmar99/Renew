import { useEffect } from "react";
import "./ContactUs.css";
import contactHeroImg from "../../assets/contact-hero.png";
import watermarkImg from "../../assets/yellow-watermark.png";
import phoneIcon from "../../assets/phone.png";
import mailIcon from "../../assets/mail.png";
import locationIcon from "../../assets/location.png";

const ContactUs = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".contact-reveal");

    if (!revealElements.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries, intersectionObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          intersectionObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="contact-page">
      <section className="contact-hero-section contact-reveal is-visible contact-reveal-zoom">
        <div className="contact-hero-media">
          <img
            src={contactHeroImg}
            alt="Business contact and communication"
            className="contact-hero-image"
          />

          <div className="contact-hero-overlay" />

          <div className="contact-hero-content">
            <h1 className="contact-hero-title">Contact Us !</h1>
            <p className="contact-hero-text">
              "We Are Always Ready To Answer
              <br />
              Your Inquiries."
            </p>
          </div>
        </div>
      </section>

      <section className="contact-message-section">
        <img
          src={watermarkImg}
          alt=""
          aria-hidden="true"
          className="cement-bg-watermark bg-top-right"
        />
        <img
          src={watermarkImg}
          alt=""
          aria-hidden="true"
          className="cement-bg-watermark bg-bottom-left"
        />

        <div className="contact-message-container contact-reveal contact-reveal-up">
          <div className="contact-message-header">
            <h2 className="contact-message-title">Send Us A Message</h2>
            <p className="contact-message-subtitle">
              Working Hours (8am To 4pm) Monday To Friday
            </p>
          </div>

          <form className="contact-message-form">
            <div className="form-row">
              <input
                type="text"
                placeholder="Full Name"
                className="form-input"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="form-input"
              />
            </div>

            <div className="form-row">
              <input
                type="tel"
                placeholder="Phone Number"
                className="form-input"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="form-input"
              />
            </div>

            <div className="form-full">
              <input
                type="text"
                placeholder="Locations"
                className="form-input"
              />
            </div>

            <div className="form-full">
              <textarea placeholder="Message" className="form-textarea" />
            </div>

            <div className="form-submit-container">
              <button type="submit" className="form-submit-btn">
                <span>Send Message</span>
                <div className="btn-icon">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="white"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </form>

          <div className="contact-hq-footer">
            <h3 className="contact-hq-title">Renew Group Headquarters</h3>
            <p className="contact-hq-subtitle">
              Working Hours (8am To 4pm) Monday To Friday
            </p>
          </div>
        </div>
      </section>

      <section className="contact-map-section">
        <div className="contact-map-container contact-reveal contact-reveal-up">
          <iframe
            src="https://www.google.com/maps?q=29.95566338488772, 31.271127909482118&z=17&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location Map"
            className="contact-map-iframe"
          />
        </div>

        <div className="contact-details-container contact-reveal contact-reveal-up">
          <div className="contact-details-row">
            <div className="contact-detail-item">
              <div className="detail-icon">
                <img
                  src={phoneIcon}
                  alt="Phone"
                  className="contact-info-icon"
                />
              </div>
              <span className="detail-text">+01111154499</span>
            </div>

            <div className="contact-detail-item">
              <div className="detail-icon">
                <img src={mailIcon} alt="Email" className="contact-info-icon" />
              </div>
              <span className="detail-text">Info@Renew.Com</span>
            </div>

            <div className="contact-detail-item">
              <div className="detail-icon">
                <img
                  src={locationIcon}
                  alt="Location"
                  className="contact-info-icon"
                />
              </div>
              <span className="detail-text">Egypt</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;
