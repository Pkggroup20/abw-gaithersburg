import React from "react";

const Modal = ({ modalText }) => {
  return (
    <section className="modal-box">
      <div className="modal-container">{modalText}</div>
    </section>
  );
};

export default Modal;
