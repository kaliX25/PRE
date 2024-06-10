import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Location from '../component/location';
export default function Products_allmet() {
  return (
    <>
      <Header />
      <main className="content-wrapper">
        <section className="decoration"></section>
        <Location name="Allmet Safety Tools" />
        <h1 className="content-title">Allmet Safety Tools</h1>
        <section className="content-product-1">
          <img src="safetytools.jpg" alt="magnaseal" className="csnri-logo" />
          <p className="content-products-text">
            Allmet Safety Tools has been safely used worldwide for over two
            decades, offering substantial health, safety & environmental
            benefits. Safety Tools Allmet specializes in unique cold work
            surface preparation grinding and cutting tools. Safety Tools Allmet
            specializes in unique cold work surface preparation grinding and
            cutting tools. Our equipment follows ATEX guidelines and is
            certified safe to use in Ex gas zones 1 and 2 (dust zones 21 and 22)
            without a hot work permit.
          </p>
        </section>
        <section className="product-allmet-detail">
          <section className="product-allmet-cost-benefit">
            <h2 className="product-allmet-detail-title">Cost Benefit</h2>
            <ul className="allmet-detail">
              <li>1. No need for Hot Work Permit – Due to Ex-certification.</li>
              <li>
                2. Use less time on risk evaluations – Due to Cold Work
                certification.
              </li>
              <li>
                3. Avoids postponements – As you can use the tool safely, you do
                not have to postpone jobs.
              </li>
              <li>
                4. No need for Habitats – You will not ignite gas or damage
                equipment around you.
              </li>
              <li>5. No need for fireguards – No ignition of Natural gas.</li>
              <li>6. Avoid production stops/delays.</li>
            </ul>
          </section>
          <section className="product-allmet-safety-benefit">
            <h2 className="product-allmet-detail-title">Safety Benefit</h2>
            <ul className="allmet-detail">
              <li>1. No Hearing injuries – Noise &lt;85 dB.</li>
              <li>2. No “White fingers”  – Vibration Level &lt;2,5 ms²</li>
              <li>
                3. No Toxic damage  – no release of isocyanides when grinding
                through the polyurethane
              </li>
              <li>4. No Fire Injuries</li>
              <li>5. No Explosion accidents – Temperature &lt;70°</li>
            </ul>
          </section>
        </section>
        <section className="product-seemore-wrapper">
          <a
            className="product-seemore"
            target="_blank"
            href="https://safetytools.no/en/"
          >
            See More
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
