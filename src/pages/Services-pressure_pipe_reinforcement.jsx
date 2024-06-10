import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Location from '../component/location';
export default function Pressure_pipe() {
  return (
    <>
      <Header />
      <main className="content-wrapper">
        <section className="decoration"></section>
        <Location name="Pressure Pipe Reinforcement" />
        <section className="services-title-wrapper ppr">
          <section className="overlay-2"></section>
          <section className="wrap">
            <h1 className="services-title-2">
              Pressure Pipe <br />
              Reinforcement
            </h1>
          </section>
        </section>
        <section className="services-content">
          <p>
            For pressure pipe reinforcement, we use CSNRI’s products such as
            Clock Spring®, a composite repair sleeve uniquely designed for
            high-pressure pipelines. It’s made up of a pretensioned
            unidirectional e-glass composite coil, a high-modulus filler
            material, and a high lap-shear strength methyl methacrylate
            adhesive. This product is proven to 8,000 psi and has a design life
            beyond 50 years. Another notable product from CSNRI is SynthoGlass®
            XT, a unique pre-saturated, bidirectional composite used to repair
            and reinforce both internal and external corrosion on pipelines.
            <br />
            <br />
            In addition, we use Premier Coatings Ltd’s products like Protal™
            Liquid Coatings. These coatings are cost-effective, corrosion
            prevention, and chemical-resistant, providing enduring protection
            against corrosion and chemical attack to buried and exposed pipes.
            Another key product from Premier Coatings is SeaShield™ Marine
            Systems, which provides long-term protection for marine structures
            against corrosionFor pressure pipe reinforcement, we use CSNRI’s
            products such as Clock Spring®, a composite repair sleeve uniquely
            designed for high-pressure pipelines. It’s made up of a pretensioned
            unidirectional e-glass composite coil, a high-modulus filler
            material, and a high lap-shear strength methyl methacrylate
            adhesive. This product is proven to 8,000 psi and has a design life
            beyond 50 years. Another notable product from CSNRI is SynthoGlass®
            XT, a unique pre-saturated, bidirectional composite used to repair
            and reinforce both internal and external corrosion on pipelines.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
