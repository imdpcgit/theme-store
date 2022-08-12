import React from "react";
import "./ShoppingCard.css";
import themeimg1 from "../../Assets/Img/cards for shopping";

const ShoppingCard = (props) => {

  return (
    <>
      {/* creating shopping card component for all the shopping options */}
      {/* div for shopping cards */}
      <div className="contains-cards-container-and-info">
        <div
          className="card-for-shopping-in-theme-store"
          style={{ width: "100%" }}
        >
          {/* div for image in card */}
          <div className="img-for-shopping-card">
            {/* <img src={props.themeDetails.url} alt="" srcset="" /> */}
            <img
              //   src={themeimg1}
              className="img-for-shopping-card-image"
              src={themeimg1}
              alt=""
              srcset=""
              style={{ height: "24em", width: "100%" }}
            />
          </div>
          {/* div for title and the price details */}
          <div
            className="title-and-price-for-the-product"
            style={{ fontWeight: "600" }}
          >
            {/* title for theme */}
            <div className="title-for-theme">
              {/* <p>Craft</p> */}
              <p>title</p>
            </div>
            {/* pricing for theme */}

            <div className="price-for-the-themes">
              {/* <p>Free</p> */}

              <p>price</p>
            </div>

          </div>
          <div className="btn-group-in-shoping-card">
            <button className="btn-for-card">Quick View</button>
            <button className="btn-for-card">Mega Menu</button>
            <button className="btn-for-card">Stickey Header</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCard;
