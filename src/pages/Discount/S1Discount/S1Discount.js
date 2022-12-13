import React from 'react'
import img from '../../../data/images'

export default function S1Discount() {
 

  return (
    <section className="hot">
    <h1 className="hot-title title-h1 container">наши горячие предложения</h1>
    <div className="hot-row">
      <div className="hot-left__row">
        <div className="hot-left-row__text">
          В данном разделе собраны самые выгодные предложения. Ведь отдохнуть на море можно и с экономией! Выбирайте
          акцию, ознакамливайтесь с условиями и собирайте чемодан!
        </div>

      </div>
      <div className="hot-right"><img src={img.discount_section_1} alt="фото"/></div>
    </div>
  </section>
  )
}
