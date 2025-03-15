import React from "react";
import abw from "../assets/abw-logo.png";
import phone from "../assets/phone.png";
import location from "../assets/location.png";
import clock from "../assets/clock.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";

const Footer = () => {
  return (
    <section id="contact" className="footer">
      <div className="footer-container">
        <div>
          <img src={abw} alt="abw-logo" srcSet="" width={250} />
        </div>

        <div className="footer-info-box">
          <div>
            <img src={phone} alt="phone" className="footer-info-icons" />
          </div>
          <div>
            <a href="tel:(240)-912-7171">(240)-912-7171</a>
          </div>
        </div>

        <div className="footer-info-box">
          <div>
            <img src={location} alt="location" className="footer-info-icons" />
          </div>
          <div>
            <a
              href="http://maps.google.com/?q=11242 18208 Contour Rd, Gaithersburg, Maryland, 20877"
              rel="noreferrer"
              target="_blank"
            >
              18208 Contour Rd
              <span style={{ display: "block" }}>Gaithersburg, MD 20877</span>
            </a>
          </div>
        </div>

        <div className="footer-info-box">
          <div>
            <img src={clock} alt="hours" className="footer-info-icons" />
          </div>
          <div>
            <span>
              Mon - Thu: 11am - 10pm
              <span style={{ display: "block" }}>Fri - Sat: 11am - 11pm</span>
              <span style={{ display: "block" }}>Sun: 11am - 9pm</span>
            </span>
          </div>
        </div>

        <div className="break-line"></div>

        <div className="footer-info-box">
          <div>
            <span>Follow us</span>
          </div>
          <div style={{ width: "100px" }}>
            <a
              href="https://www.facebook.com/Americas-Best-Wings-Wheaton-113241587064352"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={facebook}
                alt="facebook"
                className="footer-info-icons"
                style={{ marginTop: "9%", marginRight: "6%" }}
              />
            </a>
            <a
              href="https://www.instagram.com/americasbestwingswheaton/"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={instagram}
                alt="instagram"
                className="footer-info-icons"
                style={{ marginTop: "9%", marginLeft: "6%" }}
              />
            </a>
          </div>
        </div>

        <div className="footer-info-box">
          <p>© America's Best Wings ● 2025</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
