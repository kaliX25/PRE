import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Location from '../component/location';
export default function Products_resimac() {
  return (
    <>
      <Header />
      <main className="content-wrapper">
        <section className="decoration"></section>
        <Location name="Resimac" />
        <h1 className="content-title">Resimac</h1>
        <section className="content-product-1">
          <img src="./resimac.png" alt="forgebonding" className="csnri-logo" />
          <p className="content-products-text">
            Resimac is a UK based manufacturer of solvent free epoxy,
            polyurethane & silicone composites and industrial coatings. We
            provide fast and effective local solutions for a wide range of
            industrial applications.
          </p>
        </section>
        <section className="resimac-content-wrapper">
          <h1 className="resimac-content-title">
            Corrosion Protection Coatings
          </h1>
          <section className="resimac-content-detail">
            <section className="resimac-content-about-wrapper">
              <section className="resimac-content-about-title">
                <h2>About</h2>
              </section>
              <section className="resimac-content-about-detail">
                <p>
                  Resimac corrosion protection products are based on acrylic,
                  epoxy and polyurethane resin systems. Depending on the type of
                  surface preparation allowed on site, our coating systems are
                  capable of giving 25 years + protection from UV degradation or
                  weathering. Whether it is manual surface preparation, ultra
                  high pressure water blasting or abrasive blast cleaning our
                  diverse range of coatings offer practical long term solutions
                  to the external corrosion of metallic and concrete surfaces.
                </p>
              </section>
            </section>
            <section className="resimac-content-application-wrapper">
              <section className="resimac-content-application-title">
                <h2>Application</h2>
              </section>
              <section className="resimac-content-application-detail">
                <ul>
                  <li>1. Structural steel</li>
                  <li>2. External storage tank surfaces</li>
                  <li>3. External pipe line surfaces</li>
                  <li>4. Sills, lintels and soffits</li>
                  <li>5. Structural concrete</li>
                  <li>6. Railings and barriers</li>
                  <li>7. Pipe bridges</li>
                  <li>8. Rail & road bridges</li>
                </ul>
              </section>
            </section>
          </section>
        </section>
        <section className="product-seemore-wrapper">
          <a
            className="product-seemore"
            target="_blank"
            href="https://www.resimacamericas.com/oil-gas"
          >
            See More
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
