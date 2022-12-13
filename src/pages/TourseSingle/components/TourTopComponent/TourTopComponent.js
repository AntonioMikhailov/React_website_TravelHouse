import React from 'react'
import icon from '../../../../data/icons'

export default function TourTopComponent({currentPageTop}) {  
 return (
    <section className="singletop">
    <div className="container">
  <React.Fragment  >
   
  <h1 className="singletop-title title-h1">{currentPageTop.title}</h1>
<div className="singletop-row">
<div className="singletop-left"><img src={currentPageTop.img} alt="фото"/></div>
<div className="singletop-right">
<div className="singletop-right__row">
<div className="singletop-right__subhead meetway-column__subtitle ">{currentPageTop.title}</div>
<div className="singletop-right-price__row">
  <div className="singletop-right-price__left meetway-column-price__left">{currentPageTop.priceLeft}</div>
  <div className="singletop-right-price__right meetway-column-price__right">{currentPageTop.priceRight}</div>

</div>
<div className="singletop-right__text textBody">{currentPageTop.text}</div>
<div className="singletop-right-icon__row">
  <div className="singletop-right-icon__column">
    <div className="singletop-right-icon__icon"><img src={icon.Calendar} alt="icon"/></div>
    <div className="singletop-right-icon__text meetway-column-bottom__text">15-20 мая</div>
  </div>
  <div className="singletop-right-icon__column">
    <div className="singletop-right-icon__icon"><img  src={icon.Family} alt="icon"/></div>
    <div className="singletop-right-icon__text meetway-column-bottom__text">2 взрослых + 1 ребенок</div>
  </div>
  <div className="singletop-right-icon__column">
    <div className="singletop-right-icon__icon"><img src={icon.star_econom} alt="icon"/></div>
    <div className="singletop-right-icon__text meetway-column-bottom__text">эконом класс</div>
  </div>

</div>
</div>
</div>
</div>
</React.Fragment>
        
        
     
   
    </div>
  </section>
 
  )


}



 
