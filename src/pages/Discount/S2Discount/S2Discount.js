import React from 'react'
import { NavLink } from 'react-router-dom'
import img from '../../../data/images'

export default function S2Discount() {

  const discItem = [
    {  img: img.discount_section_2_1, title: 'горные туры', text: 'Альпинизм в твоей крови? Получите тур в Андах или Гималях.', link: '/discount-single/mountains' },
    {  img: img.discount_section_2_2, title: 'туры для двои', text: 'Проведите свои первые дни в качестве супружеской пары в любом месте по всему миру.', link: '/discount-single/couple' },
    {  img: img.discount_section_2_3, title: 'Отдых на пляже', text: 'Ванна в любом океане благодаря линии специальных экзотических водных туров.', link: '/discount-single/beach' },
    {  img: img.discount_section_2_4, title: 'круизы', text: 'Круизный лайнер предоставит вам все ваши особые потребности на протяжении всего путешествия.', link: '/discount-single/cruise' },
    {  img: img.discount_section_2_5, title: 'сафари', text: 'Пройдите через колыбель цивилизации - матери Африки и ее великолепной нетронутой природы.', link: '/discount-single/safari' },
    {  img: img.discount_section_2_6, title: 'рафтинг', text: 'Получите незабываемые впечатление от спуска по горной реке. Вас захлестет волна эмоций.', link: '/discount-single/rafting' },

  ]

  return (
    <section className="disc-tours">
    <div className="container">
      <div className="disc-tours-row">
        {
          discItem.map((item, i)=> { 
           return ( 
            <div key={i} className="disc-tours-column">
            <div className="disc-tours__image"><img src={item.img} alt="фото"/></div>
            <div className="disc-tours__title title-h2">{item.title}</div>
            <div className="disc-tours__text textBody">{item.text}</div>
            
            <NavLink to={item.link} className="disc-tours__btn">читать дальше...</NavLink>
          </div>
            )})  
        }
  
     
  
  
      </div>
    </div>
  </section>
  )
}
