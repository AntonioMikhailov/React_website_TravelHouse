import React, { useEffect, useState } from 'react'
import icon from '../../../../data/icons';
import img from '../../../../data/images';
import { useLocation } from "react-router-dom";
import Slider from '../../../../components/Slider/Slider';
import { AddOffsetPadding } from '../../../../components/OffsetPadding/OffsetPadding';

export default function TourBottomComp({currentPageBottom}) {

const location = useLocation();
useEffect(() => {
  setActiveTab(0)  
}, [location]);


const prevColumnImage = [
  {img: img.toures_paris, icon: icon.search_gallery},
  {img: img.toures_alpes, icon: icon.search_gallery},
  {img: img.toures_prague, icon: icon.search_gallery},
  {img: img.toures_greece, icon: icon.search_gallery},
  {img: img.toures_croatia, icon: icon.search_gallery},
  {img: img.toures_holland, icon: icon.search_gallery},
]

const sliderImage = [img.toursSingle_gallery_1, img.toursSingle_gallery_2, img.toursSingle_gallery_3, img.toursSingle_gallery_4, img.toursSingle_gallery_5, img.toursSingle_gallery_6,  ]
const TabButtons = [ 'Информация', 'Маршрут', 'Галерея' ]
const [ activeTab, setActiveTab ] = useState(0)

const [isActiveGallery, setActiveGallery] = useState(false)

 
const TabContent = [
    currentPageBottom.textTabOne, 
   currentPageBottom.textTabTwo ,
  <>
  <div className="carousel-preview">
  <div className="carousel-preview__row">
    {
      prevColumnImage.map((item, i)=> { 
      return ( 
        <div key={i} className="carousel-preview__columns">
        <div 
        onClick={()=> {setActiveGallery(true); AddOffsetPadding(false)}} className="carousel-preview-item">
          <div className="carousel-preview__image">
            <img src={item.img} alt="фото"/></div>
          <div className="carousel-preview__icon"><img src={item.icon} alt="icon"/></div>
        </div>
      </div>
        )})  
    }
</div>

</div>
  </>
]


return (
<section className="tabsingle">
<div className="container">
<div className="tabsingle-row">
<div className="tabsingle-tabbutton__row">
  {
    TabButtons.map((item, i)=> { 
      return ( 
      <div
      onClick={()=> setActiveTab(i)}
      key={i} className={activeTab === i ? "tabsingle-tubbutton tabButton-Showbackground" : "tabsingle-tubbutton"}>{item}</div>
      )})  
  }

</div>
<div className="tabsingle-tubContent__row">
{
    TabContent.map((item, i)=> { 
     return ( 
      <div key={i} className={activeTab === i ? "tabsingle-tubContent textBody showTabContent" : "tabsingle-tubContent textBody" }>{item}</div>
    )})  
  }
 
</div>
</div>
    </div>
    {/* Слайдер */}
    <div className="carousel-container">
     <Slider
     setActiveGallery={setActiveGallery}
     isActiveGallery={isActiveGallery}
     sliderImage={sliderImage}  
     />
    </div>
  </section>
  )
}
