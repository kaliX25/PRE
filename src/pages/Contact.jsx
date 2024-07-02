import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Location from '../component/location';
export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });
  const handleNameChange = (e) => {
    setFormData({
      ...formData,
      name: e.target.value,
    });
  };
  const handleEmailChange = (e) => {
    setFormData({
      ...formData,
      email: e.target.value,
    });
  };
  const handleMessageChange = (e) => {
    setFormData({
      ...formData,
      message: e.target.value,
    });
  };
  return (
    <>
      <Header />
      <main className="content-wrapper">
        <section className="decoration"></section>
        <Location name="Contact" />
        <section className="content-main">
          <h1 className="about-main-title">Contact</h1>
        </section>
        <section className="content-detail">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="content-detail-sub"
          >
            <input
              type="hidden"
              name="access_key"
              value="25d8ebd1-1e17-416f-b5f8-26e10bf1222d"
            />
            <input
              type="text"
              name="Full Name"
              placeholder="Full Name"
              className="content-detail-name"
              value={formData.name}
              onChange={handleNameChange}
              required
            />
            <input
              type="email"
              name="Email"
              placeholder="Email"
              className="content-detail-email"
              value={formData.email}
              onChange={handleEmailChange}
              required
            />
            <textarea
              className="content-detail-textarea"
              name="Message"
              placeholder="Type Your Message ...."
              value={formData.message}
              onChange={handleMessageChange}
              required
            ></textarea>
            <button type="submit" className="submit">
              Submit
            </button>
          </form>
          <section className="content-detail-sub line">
            <img src="./contact-pic.png" className="contact-pic" />
            <h1>Get In Touch With Us!</h1>
            <section>
              <img src="./email.png" className="linkedin" />
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@petroriauenergi.com"
                className="footer-message-anchor"
                target="_blank"
              >
                info@petroriauenergi.com
              </a>
            </section>
            <a className="footer-contact-telephone" href="tel:+76136147">
              <img src="./telephone.png" className="telephone" />
              0761 36147
            </a>
            <a
              className="footer-contact-whatsapp"
              href="https://wa.me/+8127600736"
              target="_blank"
            >
              <img src="./whatsapp.png" className="whatsapp" />
              +62 812 760 0736
            </a>
            <section className="footer-sosmed-content">
              <a href="">
                <img src="./instagram.png" className="instagram" />
              </a>
              <a
                href="https://www.linkedin.com/in/pt-petro-riau-energi-5b16022b8/"
                target="_blank"
              >
                <img src="./linkedin.png" className="linkedin" />
              </a>
            </section>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
