import React from 'react'
import { NavLink } from 'react-router-dom'
import dataMeetWay from './dataMeetWay'
import icon from '../../../data/icons'

export default function S1ToursMeetway() {
return (
<section className="meetway">
<div className="container">
<h1 className="meetway-title title-h1">знакомьтесь – направления отдыха</h1>

<div className="meetway-row">

  {
    dataMeetWay.map((item, i)=> { 
     return ( 

      <NavLink key={i} to={item.link} className="meetway-column">
<div className="meetway-column__item"></div>
<div className="meetway-column__image"><img src={item.img} alt="фото"/></div>
<div className="meetway-column__subtitle ">{item.title}</div>
<div className="meetway-column-price__row">
<div className="meetway-column-price__left">{item.priceLeft}</div>
<div className="meetway-column-price__right">{item.priceRight}</div>
</div>
<div className="meetway-column__text textBody">{item.text}</div>
<div className="meetway-column-bottom__row">
<div className="meetway-column-bottom__column">
  <div className="meetway-column-bottom__icon"><img src={icon.breakfast} alt="icon"/></div>
  <div className="meetway-column-bottom__text">завтраки</div>
</div>
<div className="meetway-column-bottom__column">
  <div className="meetway-column-bottom__icon"><img src={icon.clock} alt="icon"/></div>
  <div className="meetway-column-bottom__text">5 дней</div>
</div>
<div className="meetway-column-bottom__column">
  <div className="meetway-column-bottom__icon"><img src={icon.plane} alt="icon"/></div>
  <div className="meetway-column-bottom__text">перелет</div>
</div>
</div>

</NavLink>
     
      )})  
  }

 

</div>


</div>
</section>
)
}
