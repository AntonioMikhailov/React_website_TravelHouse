import React from 'react'
import { NavLink } from 'react-router-dom'
import img from '../../../data/images'

export default function S5HomeBlog() {
  const blogColumn = [
    {link: '/tours', img: img.home_blog_1, caption: '2 июня 2020г.', subTitle: '5 мест для отдыха летом', text: 'Летние Каникулы только начались. У Вас прекрасный шанс отдохнуть со     всей семьей, в любой точке земного шара...'},
    {link: '/tours', img: img.home_blog_2, caption: '12 июня 2020г.', subTitle: 'бюджетный отдых', text: 'Бюджетная поездка - не значит скучать! Есть множество мест, которые     стоит посетить, даже если у вас мало денег. Золотые пески Флориды и Калифорнии...'},
    {link: '/tours', img: img.home_blog_3, caption: '23 июня 2020г.', subTitle: 'Мачу-пикчю', text: 'Мачу-Пикчу - загадочное и привлекательное место для всех туристов,     посещающих Перу. Если вы согласны пойти по этому пути, вам нужно знать больше информации... '},
   
  ]
  return (
    <section className="blog">
    <div className="blog-bigimage">
      <picture>
        <source srcSet={img.home_section_3_tablet} media="(max-width:768px)"/>
        <img src={img.home_section_3} alt="фото"/>
      </picture>
    </div>
    <div className="container">
      <h1 className="blog-title title-h1">наши Туры</h1>
      <div className="blog-row">
        {
          blogColumn.map((item, i)=> { 
           return ( 
            <NavLink key={i} to={item.link} className="blog-column">
            <div className="blog-column__image"><img src={item.img} alt="фото"/></div>
            <div className="blog-column__caption">{item.caption}</div>
            <div className="blog-column__subtitle title-h2">{item.subTitle}</div>
            <div className="blog-column__text textBody">{item.text}</div>
          </NavLink>
            )})  
        }
  </div>

    </div>


  </section>
  )
}
