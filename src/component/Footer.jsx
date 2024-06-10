import React from 'react';
export default function Footer() {
  return (
    <footer>
      <section className="footer-logo-wrapper">
        <img src="logo (2).png" className="logo-footer" />
        <h1 className="footer-logo-text">PT. PETRO RIAU ENERGI</h1>
      </section>
      <section className="footer-content-wrapper">
        <section className="footer-address">
          <h1 className="footer-content-subtitle">Address:</h1>
          <a
            className="footer-message-anchor"
            href="https://www.google.com/maps/place/PT+Petro+Riau+Energi/@-6.2301382,106.6567978,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69fb004588ccd1:0xfbb8b708936c8dc7!8m2!3d-6.2301382!4d106.6593727!16s%2Fg%2F11y4sw0twk?entry=ttu"
            target="_blank"
          >
            Ruko spectra Jln bulevard jalur sutera Blok 23B no.07 Serpong utara
            Alam sutera - Tangerang - Banten Indonesia
          </a>
        </section>
        <section className="footer-contact">
          <h1 className="footer-content-subtitle">Contact:</h1>
          <a className="footer-contact-telephone" href="tel:+76136147">
            <img src="telephone.png" className="telephone" />
            0761 36147
          </a>
          <a
            className="footer-contact-whatsapp"
            href="https://wa.me/+8127600736"
            target="_blank"
          >
            <img src="whatsapp.png" className="whatsapp" />
            +62 812 760 0736
          </a>
        </section>
        <section className="footer-message">
          <h1 className="footer-content-subtitle">Message:</h1>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@petroriauenergi.com"
            className="footer-message-anchor"
            target="_blank"
          >
            info@petroriauenergi.com
          </a>
          <br />
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=soemanto@petroriauenergi.com"
            className="footer-message-anchor"
            target="_blank"
          >
            soemanto@petroriauenergi.com
          </a>
        </section>
        <section className="footer-sosmed">
          <h1 className="footer-content-subtitle">Follow:</h1>
          <section className="footer-sosmed-content">
            <a
              href="https://www.instagram.com/petro_riau_energi"
              target="_blank"
            >
              <img src="instagram.png" className="instagram" />
            </a>
            <a
              href="https://www.linkedin.com/in/pt-petro-riau-energi-5b16022b8/"
              target="_blank"
            >
              <img src="linkedin.png" className="linkedin" />
            </a>
          </section>
        </section>
      </section>
      <section className="footer-foot-wrapper">
        <p>@2024 PT. Petro Riau Energi, All Right Reserved.</p>
      </section>
    </footer>
  );
}
