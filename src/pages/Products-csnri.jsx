import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Location from '../component/location';
export default function Products_csnri() {
  return (
    <>
      <Header />
      <main className="content-wrapper">
        <section className="decoration"></section>
        <Location name="CSNRI" />
        <h1 className="content-title">CSNRI Composites</h1>
        <section className="content-product-1">
          <img src="csnri.png" alt="csnri" className="csnri-logo" />
          <p className="content-products-text">
            CSNRI is the world’s leading manufacturer of highly innovative,
            engineered products for the repair and rehabilitation of critical
            infrastructure. CSNRI’s composite solutions address pipeline
            anomalies from metal loss and small deformations to large
            deformations, crack/crack-like features, as well as damage to
            process piping working. We support CSNRI products with best-in-class
            design, engineering, testing, and training services to ensure proper
            installation and optimal performance. CSNRI industry-leading
            products are easy to install, cost-effective to deploy, and durable
            for decades.
          </p>
        </section>
        <section className="content-product-2">
          <section className="content-product-2-sub1-wrapper">
            <section className="content-product-2-sub1">
              <img
                src="csnri_sub-1.jpg"
                alt="Transmission Pipeline Products"
                className="csnri-sub-pic"
              />
              <section className="csnri-yellow-box">
                <a
                  href="https://www.cs-nri.com/wp-content/uploads/2021/05/CSNRI_Transmission-Pipeline-Products_20May2022.pdf"
                  target="_blank"
                  className="csnri-link"
                >
                  Transmission Pipeline
                </a>
              </section>
            </section>
            <section className="content-product-2-sub1">
              <img
                src="csnri_sub-2.jpg"
                alt="Process Piping Products"
                className="csnri-sub-pic"
              />
              <section className="csnri-yellow-box">
                <a
                  href="https://www.cs-nri.com/wp-content/uploads/2023/04/CSNRI_Process-Piping-Matrix_June2023.pdf"
                  target="_blank"
                  className="csnri-link"
                >
                  Process Piping
                </a>
              </section>
            </section>
          </section>
          <section className="content-product-2-sub2-wrapper">
            <h1>Source:</h1>
            <a
              href="https://www.cs-nri.com/brands/csnri/products-services/csnri-products/"
              target="blank_"
              className="csnri-source"
            >
              https://www.cs-nri.com/brands/csnri/products-services/csnri-products/
            </a>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
