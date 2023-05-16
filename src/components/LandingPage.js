import React from "react";
import { Link } from "react-router-dom";
import LandingVideo from "../assets/heroVideo/landing-video.mp4";

function LandingPage() {
  function scrollToTop() {
    return window.scroll(0, 0);
  }
  return (
    <main className="landing-page">
      <section className="landing-page__video">
        <video autoPlay loop muted playsInline>
          <source src={LandingVideo} type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="text-container">
          <h1 className="headline">
            Unlocking Access to Clean Water: Borehole Drilling Experts
          </h1>
          <button>
            <Link to="/contact-us" className="cta-button" onClick={scrollToTop}>
              Get In Touch
            </Link>
          </button>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
