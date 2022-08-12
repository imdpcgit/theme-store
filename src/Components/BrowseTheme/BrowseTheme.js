import React from 'react'
import './BrowseTheme.css'
import Width75em from './../Width75em/Width75em'
import img1 from '../../Assets/Img/browsetheme1.jpg'

const BrowseTheme = () => {
  return (
    <>
      <Width75em>
        <div className="flex-div-for-browse-theme">
          <div>
            <img src={img1} alt="" />
          </div>
          <div></div>
        </div>
      </Width75em>
    </>
  )
}

export default BrowseTheme
