import React from "react";
import "./ExploreThemes.css";
import Width75em from "./../../Components/Width75em/Width75em";

const ExploreThemes = () => {
  return (
    <>
      {/* created explore theme container for the shopping cards that we have in our Theme Store */}
      {/* here we call 75em component */}
      <Width75em>
        <div className="container-for-explore-free-themes">
          {/* contains explore theme btn and some info */}
          <div className="button-for-explore-theme-and-para">
            <div className="heading-explore-themes">
              <p>Ready, set, go with themes made for what you’re selling</p>
            </div>
            <div className="para-explore-themes">
              <p>
                With custom templates and styling options for your industry,
                these themes help you get started fast.
              </p>
            </div>
            <div className="btn-for-explore-theme">
              <button type="submit">Explore free themes</button>
            </div>
          </div>
          {/* contains cards for shopping */}
          <div className="contains-two-shopping-cards-with-info"></div>
        </div>
      </Width75em>
    </>
  );
};

export default ExploreThemes;
