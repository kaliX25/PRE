import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Typewritter from '../component/typewritter';
import { Link } from 'react-router-dom';
import useAssetLoader from '../component/useAssets';
import Preloader from '../component/Preloader';
import '../styles/styles.css';
const assets = [
  './home_pic_1.jpg',
  './home_pic_2.jpg',
  './home_pic_3.jpg',
  './home-about.jpg',
  './csnri.png',
  './magnaseal.jpg',
  './forge_bonding.jpeg',
  './premierecoating.png',
  './resimac.jpg',
  './safetytools.jpg',
  './pilemedic.jpg',
  './carmel.png',
  './quote.png',
  './profile.png',
];
export default function HomePage() {
  const loading = useAssetLoader(assets);
  const images = ['home_pic_1.jpg', 'home_pic_2.jpg', 'home_pic_3.jpg'];
  const [imageIndex, setImageIndex] = React.useState(0);
  const [years, setYears] = React.useState(0);
  const [project, setProjects] = React.useState(0);
  const [scrollY, setScrollY] = React.useState(0);
  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimeout(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, [scrollY]);
  React.useEffect(() => {
    if (scrollY > 2000) {
      const interval = setInterval(() => {
        setYears((prevNumber) => {
          if (prevNumber < 13) {
            return prevNumber + 1;
          } else {
            clearInterval(interval);
            return prevNumber;
          }
        });
      }, 20);
      return () => clearInterval(interval);
    }
  }, [scrollY]);
  console.log(scrollY);
  React.useEffect(() => {
    if (scrollY > 2000) {
      const interval = setInterval(() => {
        setProjects((prevNumber) => {
          if (prevNumber < 100) {
            return prevNumber + 1;
          } else {
            clearInterval(interval);
            return prevNumber;
          }
        });
      }, 20);
      return () => clearInterval(interval);
    }
  }, [scrollY]);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <>
      {loading ? (
        <Preloader loading={loading} />
      ) : (
        <>
          <Header home={true} />
          <main>
            <section className="home_picture-wrapper">
              <img
                src={`./${images[imageIndex]}`}
                alt={images[imageIndex]}
                className={`home_picture`}
              />
              <section className="vision-wrapper">
                <Typewritter text="PT PETRO RIAU ENERGI" />
                <Link to="/about" className="see-more">
                  See More
                </Link>
              </section>
              <section className="circle-wrapper">
                <section
                  className={`circle-1 ${
                    imageIndex === 0 ? 'circle-yellow' : ''
                  }`}
                ></section>
                <section
                  className={`circle-2 ${
                    imageIndex === 1 ? 'circle-yellow' : ''
                  }`}
                ></section>
                <section
                  className={`circle-3 ${
                    imageIndex === 2 ? 'circle-yellow' : ''
                  }`}
                ></section>
              </section>
            </section>
            <section className="home_about-wrapper">
              <section className="home_about-decor"></section>
              <section className="home_about-content">
                <h1 className="home_about-title">
                  GET CLOSER WITH <br />
                  PT. PETRO RIAU
                  <br />
                  ENERGI
                </h1>
                <p className="home_about-content-contents">
                  Established in 2022, PT. Petro Riau Energi has emerged as a
                  dynamic force in the field of innovative engineering
                  solutions, specializing in tackling corrosion-related
                  challenges prevalent in the oil and gas, petrochemical, and
                  allied industries.
                </p>
                <Link to="/about" className="view-more" onClick={scrollToTop}>
                  View More
                </Link>
              </section>
              <section className="home-about_picture-wrapper">
                <img
                  src="./home-about.jpg"
                  alt="home picture"
                  className="about-home_picture"
                />
              </section>
            </section>
            <section className="home-product-wrapper">
              <section className="home-product-title">
                <h1 className="home-product-title-title">
                  Explore Our Products
                </h1>
                <p className="home-product-title-content">
                  Discover our high-quality products, we use the latest
                  technology and implement sustainable programs in each of our
                  productions.
                </p>
              </section>
              <section className="home-product-content">
                <section className="home-product csnri">
                  <Link to="/csnri" onClick={scrollToTop}>
                    <img
                      src="./csnri.png"
                      alt="csnri"
                      className="product-picture"
                    />
                  </Link>
                </section>
                <section className="home-product magnaseal">
                  <Link to="/magnaseal" onClick={scrollToTop}>
                    <img
                      src="./magnaseal.jpg"
                      alt="magnaseal"
                      className="product-picture"
                    />
                  </Link>
                </section>
                <section className="home-product forgetech">
                  <Link to="/forgebonding" onClick={scrollToTop}>
                    <img
                      src="./forge_bonding.jpeg"
                      alt="forgetech"
                      className="product-picture"
                    />
                  </Link>
                </section>
                <section className="home-product premiere">
                  <Link to="/premierecoating" onClick={scrollToTop}>
                    <img
                      src="./premierecoating.png"
                      alt="premiere"
                      className="product-picture"
                    />
                  </Link>
                </section>
                <section className="home-product resimac">
                  <Link to="/resimac" onClick={scrollToTop}>
                    <img
                      src="./resimac.jpg"
                      alt="resimac"
                      className="product-picture"
                    />
                  </Link>
                </section>
                <section className="home-product safetytools">
                  <Link to="/allmet" onClick={scrollToTop}>
                    <img
                      src="./safetytools.jpg"
                      alt="safetytools"
                      className="product-picture"
                    />
                  </Link>
                </section>
                <section className="home-product pilemedics">
                  <Link to="/pilemedic" onClick={scrollToTop}>
                    <img
                      src="./pilemedic.jpg"
                      alt="pilemedic"
                      className="product-picture pilemedic"
                    />
                  </Link>
                </section>
                <section className="home-product safetytools">
                  <Link to="/allmet" onClick={scrollToTop}>
                    <img
                      src="./carmel.png"
                      alt="carmel corrosion"
                      className="product-picture"
                    />
                  </Link>
                </section>
              </section>
            </section>
            <section className="home-team-wrapper">
              <h1 className="home-team-wrapper-title">Meet Our Team</h1>
              <section className="home-team-content">
                <img src="./profile.png" alt="profile" className="profile" />
                <section className="home-team-content-info">
                  <section className="home-team-content-info-title">
                    <img src="./quote.png" className="quote" />
                    <h1 className="owner">Soemanto, S.E.</h1>
                    <p className="role">chairman</p>
                  </section>
                  <section className="home-team-content-info-content">
                    <section className="home-team-content-info-years">
                      <h2 className="home-team-content-info-subtitle">
                        Years Of Experience
                      </h2>
                      <p className="home-team-content-info-digit">{years}</p>
                    </section>
                    <section className="home-team-content-info-project">
                      <h2 className="home-team-content-info-subtitle">
                        Project Finished
                      </h2>
                      <p className="home-team-content-info-digit">{project}%</p>
                    </section>
                  </section>
                </section>
              </section>
            </section>
            <section className="home-team-endtron">
              <section className="overlay"></section>
              <h1 className="home-team-endtron-text">
                Join the Movement for Enhanced <br />
                Pipeline Integrity and Efficiency
              </h1>
              <section className="home-team-endtron-button-wrapper">
                <Link
                  to="/about"
                  className="learn-more-endtron"
                  onClick={scrollToTop}
                >
                  Learn More
                </Link>
                <Link
                  to="/contact"
                  className="contact-us-endtron"
                  onClick={scrollToTop}
                >
                  Contact Us
                </Link>
              </section>
            </section>
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
