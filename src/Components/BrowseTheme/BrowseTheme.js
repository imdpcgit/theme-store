import React, { useState } from 'react'
import './BrowseTheme.css'
import Width75em from './../Width75em/Width75em'
import img1 from '../../Assets/Img/browsetheme1.jpg'
import img2 from '../../Assets/Img/img2.jpg'

import lessthan from '../../Assets/Img/less-than.png'
import greaterthan from '../../Assets/Img/greater-than.png'
import ProductPage from './../../Containers/ProductPage/ProductPage'
const BrowseTheme = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [Data, setData] = useState(0)
  const themes = [
    {
      imgUrl: img1,
      title: 'Envy',
    },
    {
      imgUrl: img2,
      title: 'aasdfs',
    },
  ]
  return (
    <>
      <div className="main-div-for-border-bottom">
        <Width75em>
          <div className="flex-div-for-browse-theme">
            {/* theme image for display  */}
            <div>
              <img src={themes[Data].imgUrl} alt="" className="theme-image" />
            </div>
            {/* description of theme  */}
            <div className="second-div-of-flex-browse-theme">
              <h2>{themes[Data].title}</h2>
              <p>
                A clean style ideal for regular promotions and featured products
              </p>
              {/* button to browse theme  */}

              <div>
                <button className="btn-for-the-browse-theme">
                  Browse Theme
                </button>
              </div>

              {/* functionaliity for changeing the theme */}
              <div className="div-for-theme-change-onclick">
                <div>
                  <img
                    src={lessthan}
                    alt=""
                    className="icon-style"
                    onClick={() => setData(Data === 0 ? Data + 1 : Data - 1)}
                  />
                </div>
                <div>
                  <p style={{ fontSize: '35px', fontWeight: '200' }}>1/6</p>
                </div>
                <img
                  src={greaterthan}
                  alt=""
                  className="icon-style"
                  onClick={() =>
                    setData(Data === themes.length - 1 ? 0 : Data + 1)
                  }
                />
              </div>
            </div>
          </div>

          <div>
            <ProductPage />
          </div>
        </Width75em>
      </div>
    </>
  )
}

export default BrowseTheme
