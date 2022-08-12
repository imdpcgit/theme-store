import React from 'react'
import './ProductPage.css'
import ShoppingCard from '../../Components/ShoppingCard/ShoppingCard'
import uparrow from '../../Assets/Img/upload.png'

const ProductPage = () => {
  return (
    <>
      <div className="flex-div-for-products">
        {/* fixed side navbar for products  */}

        <div className="sidenav-for-product">
          <div className="sidenav-position">
            <ul className="side-nav-content">
              <div>
                <div className="div-for-filter-heading">
                  <h3>Price</h3>
                  <p>
                    <img src={uparrow} alt="" className="icon-style-uparrow" />
                  </p>
                </div>

                <p>
                  <input type="checkbox" />
                  Free
                </p>
                <p>
                  <input type="checkbox" />
                  Paid
                </p>
              </div>
              <div>
                <div className="div-for-filter-heading">
                  <h3>Industry</h3>
                  <p>
                    <img src={uparrow} alt="" className="icon-style-uparrow" />
                  </p>
                </div>
                <p>
                  <input type="checkbox" />
                  Art & Crafts
                </p>
                <p>
                  <input type="checkbox" />
                  Baby & Kids
                </p>
                <p>
                  <input type="checkbox" />
                  Books, Music & Video
                </p>
                <p>
                  <input type="checkbox" />
                  Clothing
                </p>
                <p>
                  <input type="checkbox" />
                  Electronics
                </p>
              </div>
            </ul>
          </div>
        </div>
        {/* all products call by component  */}
        <div className="all-product-for-sell">
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
