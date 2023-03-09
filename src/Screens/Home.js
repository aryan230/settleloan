import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Manager from "../components/Manager";
import SCFeed from "../components/SCFeed";
import ServicesHome from "../components/ServicesHome";
import SocialFeed from "../components/SocialFeed";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <Hero />
            <SCFeed />
            <Manager />
            <Stats />
            <ServicesHome />
            <Testimonials />
          </main>
        </div>
      </div>
    </>
  );
}

export default Home;
