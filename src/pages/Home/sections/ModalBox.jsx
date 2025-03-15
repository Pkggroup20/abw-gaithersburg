import React from "react";
import Modal from "../../../components/Modal";
import grubhub from "../../../assets/grubhub.jpg";
import ubereats from "../../../assets/ubereats.jpg";
import doordash from "../../../assets/doordash.webp";
import ezcater from "../../../assets/ezcater.png";

const ModalText = () => {
  return (
    <div>
      <h3 className="md-heading">BEST WINGS FOR PICKUP OR DELIVERY</h3>
      <p className="md-info">
        At America's Best Wings, you can place your order online for pickup in
        store. Alternatively, you can have America’s best wings delivered right
        to your doorsteps through one of delivery partners. Order online now!
      </p>
      <a
        href="https://online.skytab.com/e330478ad33cb615b2da04348fee8296"
        rel="noreferrer"
        target="_blank"
      >
        <button className="md-link-icon-clover">
          ORDER ONLINE FOR PICKUP OR DELIVERY
        </button>
      </a>
      <div className="md-link">
        <div className="md-link-box">
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
        <div className="md-link-box">
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
        <div className="md-link-box">
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
        <div className="md-link-box">
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
        {/* <div className="md-link-box">
            <a className="" href="https://eat.chownow.com/discover/restaurant/43450/americas-best-wings-wheaton-11242-georgia-ave-silver-spring" rel='noreferrer' target='_blank'>
                <img
                src='https://res.cloudinary.com/dw8damfxa/image/upload/v1618184611/ABW/LOGOS/Chownow_vxvh3x.svg'
                alt="chowNow-logo"
                className='md-link-icon'
                />
            </a>
        </div> */}
      </div>
    </div>
  );
};

const ModalBox = () => {
  return <Modal modalText={<ModalText />} />;
};

export default ModalBox;
