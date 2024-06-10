import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Location from '../component/location';
export default function Corrosion_preventions() {
  return (
    <>
      <Header />
      <main className="content-wrapper">
        <section className="decoration"></section>
        <Location name="Corrosion Prevention" />
        <section className="services-title-wrapper cp">
          <section className="overlay-2"></section>
          <section className="wrap">
            <h1 className="services-title-2">Corrosion Prevention</h1>
          </section>
        </section>
        <section className="services-content">
          <p>
            Our company offers top-tier corrosion prevention services,
            leveraging the best products in the industry to ensure the longevity
            and reliability of your infrastructure.
            <br />
            <br />
            We utilize products from CSNRI, a world leader in the manufacture of
            innovative, engineered products for the repair and rehabilitation of
            critical infrastructure. CSNRI’s composite solutions address
            pipeline anomalies from metal loss and small deformations to large
            deformations, crack/crack-like features, as well as damage to
            process piping. Some of their key products include A+ Wrap™, A+
            Max™, Atlas™, Clock Spring®, Contour Apex™, SnapWrap™, ViperSkin™,
            AcidShield™, DiamondWrap®, SynthoGlass® XT, ThermoWrap®. This
            ensures that your infrastructure is not only protected from
            corrosion but also strengthened against potential damage.
            <br />
            <br />
            We also use products from Premier Coatings Ltd and Resimac. Premier
            Coatings specializes in the manufacture and supply of a wide range
            of cost-effective, corrosion prevention, and chemical-resistant
            coatings and linings. Their products provide enduring protection
            against corrosion and chemical attack to buried and exposed pipes,
            valves, fittings, steelwork, marine structures, tanks, and concrete
            bunded areas. Some of their key products include ProtalTM Liquid
            Coatings, SeaShieldTM Marine Systems, Petrolatum Wax Tapes, Bitumen
            & Butyl Tapes, Sealing & Molding Products, ArchcoTM Coatings &
            Linings, Coal Tar Epoxies.
            <br />
            <br />
            On the other hand, Resimac offers corrosion protection products
            based on acrylic, epoxy, and polyurethane resin systems. Their
            coating systems are capable of giving 25 years + protection from UV
            degradation or weathering, ensuring that your assets are protected
            for the long term.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
