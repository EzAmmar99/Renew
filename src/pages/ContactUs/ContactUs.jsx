import { useEffect, useState } from "react";
import "./ContactUs.css";
import contactHeroImg from "../../assets/contact-hero.png";
import watermarkImg from "../../assets/yellow-watermark.png";
import phoneIcon from "../../assets/phone.png";
import mailIcon from "../../assets/mail.png";
import locationIcon from "../../assets/location.png";
import { submitContactForm } from "../../utils/contactFormSubmit";

const ContactUs = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [locations, setLocations] = useState("");
  const [message, setMessage] = useState("");
  const [formStatus, setFormStatus] = useState("idle"); // idle | loading | success | error
  const [formError, setFormError] = useState("");

  const clearFormFeedback = () => {
    if (formStatus === "success") setFormStatus("idle");
    if (formStatus === "error") {
      setFormStatus("idle");
      setFormError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setFormStatus("error");
      setFormError("Please enter your name, email, and message.");
      return;
    }

    setFormStatus("loading");

    const result = await submitContactForm({
      fullName: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      company: company.trim(),
      locations: locations.trim(),
      message: message.trim(),
    });

    if (result.ok) {
      setFormStatus("success");
      setFullName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setLocations("");
      setMessage("");
      return;
    }

    setFormStatus("error");
    setFormError(result.message);
  };

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

          <form className="contact-message-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <input
                type="text"
                name="fullName"
                autoComplete="name"
                placeholder="Full Name"
                className="form-input"
                value={fullName}
                onChange={(ev) => {
                  clearFormFeedback();
                  setFullName(ev.target.value);
                }}
                disabled={formStatus === "loading"}
              />
              <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Email Address"
                className="form-input"
                value={email}
                onChange={(ev) => {
                  clearFormFeedback();
                  setEmail(ev.target.value);
                }}
                disabled={formStatus === "loading"}
              />
            </div>

            <div className="form-row">
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder="Phone Number"
                className="form-input"
                value={phone}
                onChange={(ev) => {
                  clearFormFeedback();
                  setPhone(ev.target.value);
                }}
                disabled={formStatus === "loading"}
              />
              <input
                type="text"
                name="company"
                autoComplete="organization"
                placeholder="Company Name"
                className="form-input"
                value={company}
                onChange={(ev) => {
                  clearFormFeedback();
                  setCompany(ev.target.value);
                }}
                disabled={formStatus === "loading"}
              />
            </div>

            <div className="form-full">
              <input
                type="text"
                name="locations"
                placeholder="Locations"
                className="form-input"
                value={locations}
                onChange={(ev) => {
                  clearFormFeedback();
                  setLocations(ev.target.value);
                }}
                disabled={formStatus === "loading"}
              />
            </div>

            <div className="form-full">
              <textarea
                name="message"
                placeholder="Message"
                className="form-textarea"
                value={message}
                onChange={(ev) => {
                  clearFormFeedback();
                  setMessage(ev.target.value);
                }}
                disabled={formStatus === "loading"}
              />
            </div>

            {formStatus === "success" ? (
              <p className="contact-form-status contact-form-status--success" role="status">
                Your message was sent. We will get back to you soon.
              </p>
            ) : null}
            {formStatus === "error" && formError ? (
              <p className="contact-form-status contact-form-status--error" role="alert">
                {formError}
              </p>
            ) : null}

            <div className="form-submit-container">
              <button
                type="submit"
                className="form-submit-btn"
                disabled={formStatus === "loading"}
              >
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
