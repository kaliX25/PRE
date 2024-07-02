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
        <Location name="PileMedic" />
        <h1 className="content-title">PileMedic</h1>
        <section className="content-product-1">
          <img src="./pilemedic.jpg" alt="Pilemedic" className="csnri-logo" />
          <p className="content-products-text">
            Developed by Prof. Mo Ehsani, PileMedic® is a patented unique
            engineered solution for repair and strengthening of columns and
            piles or piling on land and below water. Following three decades of
            research and development and several more recent investigations and
            testing by government agencies such as the U.S. Army Corps of
            Engineers, National Science Foundation, California DOT (Caltrans),
            Texas DOT, etc. PileMedic® has been adopted by many organizations
            including the US Military for its versatility, ease of installation,
            and unique structural strengthening features.
          </p>
        </section>
        <section className="content-product-1 grey">
          <section className="content-product-1-sub">
            <h2 className="content-products-1-title">
              Sheet Pile Repair (SPiRe®)
            </h2>
            <p className="content-products-text">
              Sheet Pile Repair (SPiRe®) is a very strong and rigid sandwich
              construction Fiber Reinforced Polymer (FRP) product that can be
              supplied in various geometrical shapes. The most common one is a
              4-ft wide flat panel. In the field, these panels are secured to
              the corroded bulkhead or sheet pile with J-bolts. The edge of each
              panel is epoxy bonded to the adjacent panel to create an
              impervious stay-in-place form. The annular space between the
              SPiRe® panels and the corroded bulkhead is filled with concrete.
              Optionally, GFRP reinforcement can also be placed in the annular
              space.
              <br />
              <br />
              Another application is for repair of beams and decks, where
              placement of concrete in such hard-to-reach areas becomes
              challenging. SPiRe® panels can be customized to fit the exact
              dimension of the beam or deck. Reinforcing elements can also be
              placed inside these elements. In the field, these shells are
              lifted and secured to the underside of the deck. The annular space
              between the shell and the deck or beam is filled with concrete.
            </p>
          </section>
          <img src="./pilemedic-product.jpg" className="csnri-sub-pic" />
        </section>
        <section className="product-seemore-wrapper">
          <a
            className="product-seemore"
            target="_blank"
            href="https://pilemedic.com/"
          >
            See More
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
