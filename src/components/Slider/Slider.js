import React  from 'react'
import SliderSlick from "react-slick";
import icon from '../../data/icons';
 
import {RemoveOffsetPadding } from '../../components/OffsetPadding/OffsetPadding'
export default function Slider({isActiveGallery, setActiveGallery, sliderImage }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    variableWidth: true,
    pauseOnHover: true,
  };
  return (
    <div
    onClick={()=> {setActiveGallery(false); RemoveOffsetPadding()}}
    className={isActiveGallery ? "carousel-wrapper show-carousel" : "carousel-wrapper "  }>
    <div
    onClick={(e)=> e.stopPropagation()}
    className="carousel-main">
      <div className="slider-row">
        <SliderSlick  {...settings}>
       {
          sliderImage.map((item, i)=> { 
           return ( 
            <div key={i} className="slider-image"><img src={item} alt="img"/></div>
            )})  
        }
         </SliderSlick>
      </div>
    </div>
    <div className="buttons-row">
      {}
  <div onClick={()=> {setActiveGallery(false); RemoveOffsetPadding()}} className="carousel-cancelBtn"><img src={icon.gallery_canсel_search}  alt="icon"/></div>
      {}
    </div>
  </div>
  )
}
