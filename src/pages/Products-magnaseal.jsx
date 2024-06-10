import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Location from '../component/location';
export default function Products_magnaseal() {
  return (
    <>
      <Header />
      <main className="content-wrapper">
        <section className="decoration"></section>
        <Location name="Magnaseal" />
        <h1 className="content-title">MAGNASEAL</h1>
        <section className="content-product-1">
          <img src="./magnaseal.jpg" alt="magnaseal" className="csnri-logo" />
          <p className="content-products-text">
            MAGNASEAL is the safest, most effective, and efficient way to stop
            or prevent leaks of hazardous materials. Produced in Canada with the
            highest quality urethane and magnets. Manufacturing is done in
            sterile environment to exact specifications ensuring precision and
            exceptional product performance.
          </p>
        </section>
        <section className="content-product-1 grey">
          <img src="./magnaseal-product.jpg" className="csnri-sub-pic" />
          <section className="content-product-1-sub">
            <h2 className="content-products-1-title">MAGNASEAL Leak Patch</h2>
            <p className="content-products-text">
              Magnaseal Leak Patch is a high strength, magnetic, flexible
              urethane patch. It can hold back at least 30 pounds of pressure.
              All sizes come with 4 built in “D” rings and 2 6 inch continuous
              loop webbing straps which can be used for application. Each
              MAGNASEAL Leak Patch comes with a carrying case. All Leak patches
              are 5/8 inch thickness. The corner D Ring adds 1/4 inch to the
              thickness. The 18 inch Leak Patch with valve comes fitted with a
              threaded 2 inch pass through valve which will allow for off
              loading. This passthrough valve adds 1 1/2 inches to the thickness
              of this patch. Carrying Case – Each MAGNASEAL Leak Patch comes
              with a carrying case. The carrying case has an industrial zipper
              and insulated sides to buffer the strength of the MAGNASEAL while
              it is not in use. The carrying case makes it easy to keep
              MAGNASEAL protected from UV light and out of the way
            </p>
          </section>
        </section>
        <section className="product-seemore-wrapper">
          <a
            className="product-seemore"
            target="_blank"
            href="https://www.neothane.com/"
          >
            See More
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
