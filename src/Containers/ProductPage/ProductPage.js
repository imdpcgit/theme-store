import React, { useState } from 'react'
import './ProductPage.css'
import ShoppingCard from '../../Components/ShoppingCard/ShoppingCard'
import uparrow from '../../Assets/Img/upload.png'





const ProductPage = () => {


  const [showFilter, setShowFilter] = useState(false)


  const conent = () => {
    return (
      <>
        {/* all filter data  */}
        <ul className="side-nav-content">
          <div>
            <div className="div-for-filter-heading">
              <h3>Price</h3>
              <p>
                <img src={uparrow} alt="" className="icon-style-uparrow" />
              </p>
            </div>

            <p style={{ display: "flex" }} >
              <input type="checkbox" />
              Free
              <span ></span>
            </p>

            <p style={{ display: "flex" }}>
              <input type="checkbox" />
              Paid
            </p>
          </div>
          <hr />
          <div>
            <div className="div-for-filter-heading">
              <h3>Industry</h3>
              <p >
                <img src={uparrow} alt="" className="icon-style-uparrow" />
              </p>
            </div>
            <p style={{ display: "flex" }}>
              <input type="checkbox" />
              Art & Crafts
            </p>
            <p style={{ display: "flex" }}>
              <input type="checkbox" />
              Baby & Kids
            </p>
            <p style={{ display: "flex" }}>
              <input type="checkbox" />
              Books, Music & Video
            </p>
            <p style={{ display: "flex" }}>
              <input type="checkbox" />
              Clothing
            </p>
            <p style={{ display: "flex" }}>
              <input type="checkbox" />
              Electronics
            </p>
          </div>
        </ul>
      </>
    )
  }


  return (
    <>
      <div className="flex-div-for-products">
        {/* fixed side navbar for products  */}

        <div className="sidenav-for-product">
          <div className="sidenav-position">
            <div className='filter-btn-position'>
              <div className='a'>
                {!showFilter ? <button className="filter-btn" onClick={() => { setShowFilter(true) }}>Filter</button> : null}
              </div>
            </div>

            <div className='side-filter-content'>
              {conent()}
            </div>
            {
              showFilter ?
                <div className='div-for-popup-in-responsive'>
                  {/* button group in responsive to select filter and apply */}
                  <div className='filter-done-btn-after-click'>
                    <div>
                      <button className="filter-btn-after-click" >
                        Filter
                      </button>
                    </div>
                    <div onClick={() => { setShowFilter(false) }}>
                      <button className='done-btn-after-click'>
                        Done
                      </button>
                    </div>
                  </div>
                  {conent()}
                </div>
                : null
            }

          </div>
        </div>
        {/* all products call by component  */}
        <div className="all-product-for-sell">
          <ShoppingCard />
          <ShoppingCard />
          <ShoppingCard />
          <ShoppingCard />
          <ShoppingCard />
          <ShoppingCard />
          <ShoppingCard />
        </div>
      </div>
      <div></div>
    </>
  )
}

export default ProductPage
