import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Location from '../component/location';
export default function Premiere_coating() {
  return (
    <>
      <Header />
      <main className="content-wrapper">
        <section className="decoration"></section>
        <Location name="Premiere Coatings" />
        <h1 className="content-title">Premiere Coatings</h1>
        <section className="content-product-1">
          <img src="premierecoating.png" alt="csnri" className="csnri-logo" />
          <p className="content-products-text">
            Premier Coatings Ltd specialise in the manufacture and supply of a
            wide range of cost effective, corrosion prevention and chemical
            resistant coatings and linings as well as waterproofing systems for
            the utilities, civil engineering and construction industries.
            Premier Coating create bespoke and off-the-shelf solutions that
            provide enduring protection against corrosion and chemical attack to
            buried and exposed pipes, valves, fittings, steelwork, marine
            structures, tanks and concrete bunded areas. From sub zero
            environments to extreme high temperatures, our range of products are
            capable of withstanding the toughest conditions, as well as proving
            to be cost-effective and maintenance free for several years. PT.
            Petro Riau Energi is official partner and distributor of Premier
            Coating products in Indonesia region market
          </p>
        </section>
        <section className="content-product-1 grey">
          <section className="content-product-1-sub">
            <h2 className="content-products-1-title">
              VISCOTAQ™ VISCO-ELASTIC PRODUCTS
            </h2>
            <p className="content-products-text">
              Viscotaq™ is the ultimate visco-elastic amorphous a-polar
              polyolefin for the protection against corrosion of underground and
              aboveground substrates in the pipeline, petrochemical, water
              industry and more. Viscotaq always has permanent and intimate
              contact with the surface of a substrate (concrete, steel, PVC,
              metal, wood, vinyl and other coatings). The viscous modulus and
              the elasticity modulus of the material are designed in such a way
              that the viscosity modulus gives permanent wetting characteristics
              hence forcing the material to flow into the pores and anomalies of
              the substrates, whereas the elasticity modules give the strength
              and elasticity of a solid. The patented Viscotaq systems are
              self-healing, non-toxic, easy to apply, are 100% impermeable to
              water and oxygen, and require no primer.
            </p>
          </section>
          <img src="premierecoating-product.jpg" className="csnri-sub-pic" />
        </section>
        <section className="product-seemore-wrapper">
          <a
            className="product-seemore"
            target="_blank"
            href="https://www.premiercoatings.com/product-groups/viscotaq-visco-elastic-products/?ref[]=/application/buried-onshore-coatings/&reftitle[]=Buried+Coatings"
          >
            See More
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
