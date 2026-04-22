import "./ContactUs.css";
import contactHeroImg from "../../assets/contact-hero.jpg";

const ContactUs = () => {
  return (
    <main className="contact-page">
      <section className="contact-hero-section">
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
    </main>
  );
};

export default ContactUs;
