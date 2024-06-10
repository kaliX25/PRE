import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Location from '../component/location';
export default function Vessel_and_Tank() {
  return (
    <>
      <Header />
      <main className="content-wrapper">
        <section className="decoration"></section>
        <Location name="Vessel and Tank Reinforcement" />
        <section className="services-title-wrapper vtr">
          <section className="overlay-2"></section>
          <section className="wrap">
            <h1 className="services-title-2">Vessel and Tank Reinforcement</h1>
          </section>
        </section>
        <section className="services-content">
          <p>
            Resimac offers a range of vessel and tank lining coatings which can
            be applied to metallic and concrete surfaces giving long term
            chemical protection. Their unique composite wrap system can seal
            large diameter pipe and restore lost surface wall thickness. Once
            cured, Resimac systems can withstand pressures up to 300psi and
            in-service immersion temperatures up to 120C.
            <br />
            <br />
            We incorporate the use of Safety Tools Allmet’s unique cold work
            surface preparation grinding and cutting tools. These tools are
            ATEX-certified for explosive environments and conform to the SSPC
            SP11 surface treatment standard after grinding. This allows us to
            prepare surfaces for vessel and tank reinforcement treatments safely
            and efficiently.
            <br />
            <br />
            For magnesium alloys, we use Magnaseal Forge Tech/Bonding solutions,
            which have shown promising results in corrosion protection56. Their
            key product, MAGNASEAL, is a unique, patented, magnetic urethane
            sheet that is redefining the way first responders, hazmat
            technicians, and other industry professionals handle leaks of
            hazardous materials. It can hold back at least 30 pounds of
            pressure, making it an excellent choice for vessel and tank
            reinforcement.
            <br />
            <br />
            By combining these high-quality products and our expert application
            techniques, we provide comprehensive vessel and tank reinforcement
            services that you can trust. Our goal is to help you protect your
            assets, reduce maintenance costs, and extend the life of your
            infrastructure. Let us help you reinforce your vessels and tanks
            effectively and efficiently.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
