import React from "react";
import Contact from "../components/Contact";
import Header from "../components/Header";

function ContactScreen() {
  return (
    <>
      <Header />
      <div className="pt-24">
        {" "}
        <Contact />
      </div>
    </>
  );
}

export default ContactScreen;
