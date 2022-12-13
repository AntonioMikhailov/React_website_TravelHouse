import React from 'react'
import img from '../../../data/images'
import dataOur from './dataOur'

export default function S3AboutOur() {
  return (
    <section className="our">
    <div className="container">
      <a href="tours.html" className="our-title title-h1">наши возможности</a>
      <div className="our-row">
        {
          dataOur.map((item, i)=> { 
           return ( 
            <div key={i} className="our-column">
            <div className="our-column__icon"><img src={item.icon} alt="icon"/></div>
            <a href="tours.html" className="our-column__title title-h2">{item.title}</a>
            <div className="our-column__text">{item.text}</div>
          </div>
            )})  
        }
     
    </div>
    </div>
    <div className="our-bigImage-bottom">
      <picture>
        <source srcSet={img.footert_background_2_tablet} media="(max-width:768px)"/>
        <img src={img.footert_background_2} alt="фото"/>
      </picture>
    </div>
  </section>
  )
}
