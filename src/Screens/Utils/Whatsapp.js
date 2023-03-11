import React from "react";

function Whatsapp() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=51000000000&text=olá"
      className="whatsapp-button"
      target="_blank"
      style={{ position: "fixed", right: "15px", bottom: "15px", zIndex: "99" }}
    >
      <img
        src="https://i.ibb.co/VgSspjY/whatsapp-button.png"
        alt="botão whatsapp"
      />
    </a>
  );
}

export default Whatsapp;
