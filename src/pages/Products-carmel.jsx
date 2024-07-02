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
        <Location name="Carmel Corrosion Systems" />
        <h1 className="content-title">Carmel Corrosion Systems</h1>
        <section className="content-product-1">
          <img
            src="./carmel.png"
            alt="Carmel Corrosion"
            className="csnri-logo"
          />
          <p className="content-products-text">
            CCS wrap is a corrosion protection system designed for risers,
            subsea pipelines, jetty piles, and similar structures in various
            marine conditions, with the CCS HD Wrap tailored for regular
            offshore installations and the Double Ply variant offering extra
            durability for deep-sea structures or areas with high debris or ice
            floats. The wrap system includes a memory-enhanced polyamide
            reinforcing scrim embedded in UV-stable polyurethane with a
            laminated polyester felt liner, pre-treated with corrosion
            inhibitors or biocides in hydrophobic and thixotropic gels. The wrap
            features a sophisticated flange for quick assembly and minimal
            surface preparation before installation. When assembled, the
            polyurethane scrim combination provides hoop tension, ensuring close
            association between the corrosion inhibiting gel and the substrate.
          </p>
        </section>
        <section className="forge_bonding-pic-wrapper carmel-product">
          <img src="./carmel_product-1.jpg" alt="forge bonding product 1" />
          <img src="./carmel_product-2.jpg" alt="forge bonding product 2" />
          <img src="./carmel_product-3.jpg" alt="forge bonding product 2" />
        </section>
        <section className="product-seemore-wrapper">
          <a
            className="product-seemore"
            target="_blank"
            href="https://carmel-corrosion.com/"
          >
            See More
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
