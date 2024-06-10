import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Location from '../component/location';
export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="content-wrapper">
        <section className="decoration"></section>
        <Location name="About" />
        <section className="content-main">
          <h1 className="about-main-title">About Us</h1>
          <section className="about-main-content-1">
            <img src="./about_1.jpg" className="about_1-pic" />
            <section className="about-main-content-1-content">
              <h1 className="about_1-title">Established in 2022</h1>
              <p className="about_1-detail">
                PT. Petro Riau Energi has emerged as a dynamic force in the
                field of innovative engineering solutions, specializing in
                tackling corrosion-related challenges prevalent in the oil and
                gas, petrochemical, and allied industries. Our journey has been
                marked by a relentless commitment to providing cutting-edge
                services, particularly in the realm of comprehensive cold work
                solutions.
              </p>
            </section>
          </section>
          <section className="about-main-content-2">
            <section className="about-main-content-2-content">
              <h1 className="about_2-title">Professional</h1>
              <p className="about_2-detail">
                At the core of our operations lies a passion for addressing
                industry-specific issues related to corrosion with a focus on
                safety, efficiency, and sustainability. Our expert team,
                comprising seasoned professionals and engineers, brings a wealth
                of knowledge and experience to the forefront, ensuring that
                every project is approached with precision and dedication
              </p>
            </section>
            <img src="./about_2.jpg" className="about_2-pic" />
          </section>
          <section className="about-main-content-3">
            <img src="./about_3(2).jpg" className="about_3-pic" />
            <section className="about-main-content-3-content">
              <h1 className="about_3-title">Our Services</h1>
              <p className="about_3-detail">
                Our comprehensive suite of services encompasses corrosion
                prevention, pressure pipe reinforcement, vessel and tank
                reinforcement, and innovative solutions utilizing Cold Work
                methods. We operate with a customer-centric philosophy,
                tailoring our services to meet the unique needs of each client.
              </p>
            </section>
          </section>
          <section className="about-main-content-4">
            <h1 className="about_4-title">International Standards</h1>
            <section className="about-main-content-4-pic-wrapper">
              <img src="./about_4.jpg" className="about_4-pic" />
              <img src="./about_5(2).jpg" className="about_5-pic" />
              <img src="./about_6.jpg" className="about_6-pic" />
            </section>
            <section className="about-main-content-4-content">
              <p className="about_4-detail">
                As a testimony to our dedication to quality, we adhere
                rigorously to international standards such as ASME PCC-2 and ISO
                TS 24817. This commitment ensures that our services and
                solutions consistently meet and exceed globally recognized
                benchmarks, reinforcing our position as a reliable and trusted
                partner in the industry. With an innovative approach, PT. Petro
                Riau Energi continues to thrive as a leader in providing
                effective and safe solutions for the oil and gas industry and
                related sectors.
              </p>
            </section>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}
