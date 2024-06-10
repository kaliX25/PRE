import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Location from '../component/location';
export default function Products_forge_bonding() {
  return (
    <>
      <Header />
      <main className="content-wrapper">
        <section className="decoration"></section>
        <Location name="Forge Bondings" />
        <h1 className="content-title">Forge Bondings</h1>
        <section className="content-product-1">
          <img
            src="./forge_bonding.jpeg"
            alt="forgebonding"
            className="csnri-logo"
          />
          <p className="content-products-text">
            Forge Bonding The”welding with air” technology known as Forge
            Bonding is the best way to make repair and strengthen your tanks,
            valves, pipelines and other equipment with “no need for hot work”
            preventing the necessity of shutting down and keeping your entire
            team much safer. This method of repair is comply with international
            tank standart API 653 and can be implement with out hot work permit.
          </p>
        </section>
        <section className="forge_bonding-pic-wrapper">
          <img
            src="./forge_bonding-product.jpg"
            alt="forge bonding product 1"
            className="forge_bonding-pic"
          />
          <img
            src="./forge_bonding-product-2.jpg"
            alt="forge bonding product 2"
            className="forge_bonding-pic"
          />
        </section>
        <section className="product-seemore-wrapper">
          <a
            className="product-seemore"
            target="_blank"
            href="https://forgetechinc.com/"
          >
            See More
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
