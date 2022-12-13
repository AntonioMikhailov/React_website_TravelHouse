import React from 'react'
import { NavLink } from 'react-router-dom'
import img from '../../../data/images'

export default function S4HomeStart() {
  const startBottomColumn = [
    {link: '/tours', img: img.home_start_1, text: 'хорватия'},
    {link: '/tours', img: img.home_start_2, text: 'бали'},
    {link: '/tours', img: img.home_start_3, text: 'Тунис'},
  ]
  const rightText = [
'Авиа перелеты первым классом',
"5 зведочные отели",
'Автомобили последних моделей',
'Все континенты на выбор'
]
  return (
    <section className="start">
      <div className="container">
        <h1 className="start__title ">Начни свой тур</h1>
        <h2 className="start__subTitle title-h1">вместе с Travel House</h2>
        <div className="start-row">
          <div className="start-left textBody">Позвольте нам подарить вам вдохновляющие впечатления, пока вы наслаждаетесь
            личным приключением с профессиональным гидом, отвечающим вашим интересам. Будь то однодневная поездка или
            многопутешествие, у вас будет привилегия насладиться этой непревзойденной роскошью, чтобы исследовать Европу
            с экспертом, а также уникальными видами с высоты птичьего полета с вертолета на Европу, включая Рим,
            побережье Далмации, Париж, Прага и 20 популярных направлений. </div>
          <div className="start-right">
            <ol className="start-right__row textBody">
              {
                rightText.map((item, i)=> { 
                 return ( 
                  <li key={i} className="start-right__text">{item}</li>
                  )})  
              }
 

            </ol>
          </div>
        </div>

        <div className="start-bottom">
          <div className="start-bottom__row">
            {
              startBottomColumn.map((item, i)=> { 
               return ( 
                <NavLink key={i} to={item.link} className="start-bottom-column">
                <div className="start-bottom-column__image"><img src={item.img} alt="фото"/>
                  <div className="start-bottom-column__text">{item.text}</div>
                </div>
  
              </NavLink>
                )})  
            }

           
          </div>
          <div className="start-bottom-button"><NavLink to="/tours">Все направления</NavLink></div>

        </div>

      </div>
    </section>
  )
}
