import React from 'react'
import img from '../../../data/images'

export default function S3Discount() {
  return (
    <section className="dayoff">
  <div className="dayoff-row">
    <div className="dayoff-left"><img src={img.discount_section_3} alt="фото"/></div>
    <div className="dayoff-right">
      <div className="dayoff-right__row">
        <div className="dayoff-right__title">Выходные в Альпах, Давос!</div>
        <div className="dayoff-right-price__row">
          <div className="meetway-column-price__left">17450</div>
          <div className="meetway-column-price__right">24450</div>
        </div>
        <div className="dayoff-right__text textBody">Давос – это курортный город Швейцарии, который имеет идеальный климат для всех зимних видов спорта, таких как лыжи, сноуборд, коньки и так далее. Самые популярные гостиницы – это Waldhotel, Grischa - DAS Hotel, Hotel Edelweiss, а рестораны - Alpenhof, Glow by Armin Amrein и другие.</div>
      </div>
    </div>
  </div>
</section>
  )
}
