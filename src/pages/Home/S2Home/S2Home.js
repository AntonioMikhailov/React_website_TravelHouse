import React from 'react'
import { useEffect } from "react";
import img from '../../../data/images'
import SlideMargin from '../../../components/SlideMargin/SlideMargin'
export default function S2Home() {
  useEffect(()=> {
    const newwayRightImageSmall = document.querySelector('.newway-right__imageSmall');
const wedoLeftImageSmall = document.querySelector('.wedo-left__imageSmall'); 
window.addEventListener('scroll', function () {
  newwayRightImageSmall.style.bottom = window.scrollY / 4 + 'px';
  wedoLeftImageSmall.style.bottom = window.scrollY / 4 + 'px';
  });
  })
    SlideMargin('.newway-left')
  return (
    <section className="newway">
    <div className="newway-row">
      <div className="newway-left">
        <h1 className="newway-left__title title-h1">Откройте для себя
          новый способ путешествий</h1>
        <div className="newway-left__text textBody">Откройте для себя новые культуры и прекрасно отдохните с Travel House!
          Выберите страну, которую хотите посетить, и сообщите нашим агентам примерное время – они найдут и
          предложат наиболее подходящие туры и отели.
          <p></p> За время работы мы организовали бесчисленное количество поездок для наших клиентов. Мы начинали как
          небольшое туристическое бюро, а вскоре расширили список предложений. Сегодня у нас есть ценный опыт
          путешествий, и мы можем посоветовать самые потрясающие курорты, города и страны для посещения!
        </div>
        <div className="newway-left__signature"><img src={img.home_signature} alt="img"/></div>
      </div>
      <div className="newway-right">
        <div className="newway-right-row">
          <div className="newway-right__imageMain"><img src={img.home_section1} alt="img"/> </div>
          <div className="newway-right__imageSmall"><img src={img.home_section1_small} alt="img"/></div>
        </div>
      </div>
    </div>
  </section>
  )
}
