import React from "react";
import grubhub from "../../../assets/grubhub.jpg";
import ubereats from "../../../assets/ubereats.jpg";
import doordash from "../../../assets/doordash.webp";
import ezcater from "../../../assets/ezcater.png";

import menu1 from "../../../assets/menu/menu1.jpg";
import menu2 from "../../../assets/menu/menu2.webp";
import menu3 from "../../../assets/menu/menu3.jpg";
import menu4 from "../../../assets/menu/menu4.webp";
import menu5 from "../../../assets/menu/menu5.png";
import menu6 from "../../../assets/menu/menu6.jpg";
import menu7 from "../../../assets/menu/menu7.jpg";
import menu8 from "../../../assets/menu/menu8.png";

const Menu = () => {
  return (
    <section id="menu" className="features-section">
      <div className="features-container">
        <h3
          className="md-heading"
          style={{ width: "100%", textAlign: "center", color: "#000000" }}
        >
          MENU
        </h3>
        <p className="feature-info">
          At America's Best Wings, we serve more than just amazing chicken
          wings. Shift through our menu on UberEats, Grubhub, or Doordash to see
          all of our offerings before placing your order.
        </p>
      </div>
      {/* <div className="feature-icons">
        <div className="box">
          <img
            src="https://res.cloudinary.com/dw8damfxa/image/upload/v1611029717/ABW/MENU/wings.jpg"
            alt="wings"
          />
        </div>
        <div className="box">
          <img
            src="https://res.cloudinary.com/dw8damfxa/image/upload/v1611029717/ABW/MENU/burger.jpg"
            alt="burger"
          />
        </div>
        <div className="box">
          <img
            src="https://res.cloudinary.com/dw8damfxa/image/upload/v1611029718/ABW/MENU/wrap.jpg"
            alt="wrap"
          />
        </div>

        <div className="box">
          <img
            src="https://res.cloudinary.com/dw8damfxa/image/upload/v1611029717/ABW/MENU/fish-chips.jpg"
            alt="fish & chips"
          />
        </div>
        <div className="box">
          <img
            src="https://res.cloudinary.com/dw8damfxa/image/upload/v1611029717/ABW/MENU/sandwich.jpg"
            alt="sandwich"
          />
        </div>
        <div className="box">
          <img
            src="https://res.cloudinary.com/dw8damfxa/image/upload/v1611029718/ABW/MENU/pasta.jpg"
            alt="pasta"
          />
        </div>
      </div> */}
      <div className="feature-icons">
        <div className="box">
          <img
            src={menu1}
            alt="wings"
            height={300}
            width={500}
            style={{
              borderRadius: "16px",
            }}
          />
        </div>
        <div className="box">
          <img
            src={menu2}
            alt="burger"
            height={300}
            width={500}
            style={{
              borderRadius: "16px",
            }}
          />
        </div>
        <div className="box">
          <img
            src={menu3}
            alt="wrap"
            height={300}
            width={500}
            style={{
              borderRadius: "16px",
            }}
          />
        </div>
        <div className="box">
          <img
            src={menu4}
            alt="fish & chips"
            height={300}
            width={500}
            style={{
              borderRadius: "16px",
            }}
          />
        </div>
        <div className="box">
          <img
            src={menu5}
            alt="sandwich"
            height={300}
            width={500}
            style={{
              borderRadius: "16px",
            }}
          />
        </div>
        <div className="box">
          <img
            src={menu6}
            alt="pasta"
            height={300}
            width={500}
            style={{
              borderRadius: "16px",
            }}
          />
        </div>
        <div className="box">
          <img
            src={menu7}
            alt="cake"
            height={300}
            width={500}
            style={{
              borderRadius: "16px",
            }}
          />
        </div>
        <div className="box">
          <img
            src={menu8}
            alt="alfredo"
            height={300}
            width={500}
            style={{
              borderRadius: "16px",
            }}
          />
        </div>
      </div>
      <div className="features-container">
        <h3
          className="md-heading"
          style={{
            width: "100%",
            textAlign: "center",
            color: "#000000",
            margin: "4% auto 3%",
          }}
        >
          ORDER NOW
        </h3>

        <a
          href="https://online.skytab.com/e330478ad33cb615b2da04348fee8296"
          rel="noreferrer"
          target="_blank"
        >
          <button className="feature-button feature-order-btn">
            ORDER ONLINE & PICKUP
          </button>
        </a>

        <div id="order" className="feature-link-icon">
          <div className="feature-link-icon-box">
            <a
              className=""
              href="https://www.grubhub.com/restaurant/americas-best-wings-11242-georgia-ave-silver-spring/2522990?classicAffiliateId=%2Fr%2Fw%2F2522990%2F&utm_source=https://restaurant.grubhub.com&utm_medium=OOL&utm_campaign=order%20online&utm_content=2522990"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={grubhub}
                alt="grubhub-logo"
                className="md-link-icon"
                height={100}
                width={200}
                style={{ borderRadius: "10px" }}
              />
            </a>
          </div>
          <div className="feature-link-icon-box">
            <a
              className=""
              href="https://order.ubereats.com/washington-dc/food-delivery/Americas%20Best%20Wings/FyYRRlNQSvep04tzcSpABg/?utm_source=web-restaurant-manager"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={ubereats}
                alt="ubereats-logo"
                className="md-link-icon"
                height={100}
                width={200}
                style={{ borderRadius: "10px" }}
              />
            </a>
          </div>
          <div className="feature-link-icon-box">
            <a
              className=""
              href="https://www.doordash.com/store/america's-best-wings-silver-spring-1452081/23271549/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJhbWVyaWNhcyBiZXN0IHdpbmdzIHdoZWF0b24iLCJpdGVtX2lkcyI6W10sInNlYXJjaF90ZXJtIjoiYW1lcmljYSBiZXN0IHdpbmdzIHdoZWF0IG9uIiwidmVydGljYWxfaWQiOi05OTksInZlcnRpY2FsX25hbWUiOiJhbGwifX0=&pickup=false"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={doordash}
                alt="doordash-logo"
                className="md-link-icon"
                height={100}
                width={200}
                style={{ borderRadius: "10px" }}
              />
            </a>
          </div>
          <div className="feature-link-icon-box">
            <a
              className=""
              href="https://www.ezcater.com/catering/pvt/americas-best-wings-4"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={ezcater}
                alt="ezcater-logo"
                className="md-link-icon"
                height={100}
                width={200}
                style={{ borderRadius: "10px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
