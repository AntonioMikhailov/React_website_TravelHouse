import React from 'react'
import img from '../../../data/images'

export default function S2ToursAllOur() {
  return (
    <section className="allour">
    <div className="allour-row">
      <div className="allour-row__left">
        <div className="allour-row-left__text">Все наши сотрудники, которые помогут Вам в
          осуществлении своей мечты, – исключительно
          вежливые, компетентные и обладают
          многолетним опытом работы.
          В этом наше отличие от других турфирм в
          Москве?</div>
      </div>
      <div className="allour-row__right"><img src={img.toures_tours_bottom} alt="фото"/></div>
    </div>
  </section>
  )
}
