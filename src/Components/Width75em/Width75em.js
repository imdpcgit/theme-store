import React from "react";

const Width75em = (props) => {
  return (
    <>
      {/* created width75em component for all the page for specifc width 75em */}
      {/* display flex for the width set */}
      <div className="flex-container-for-width-set-all-page">
        {" "}
        {/* div for width set 75em */}
        <div className="width-cset-for-theme-store-all-screen">
          {props.children}
        </div>
      </div>
    </>
  );
};

export default Width75em;
