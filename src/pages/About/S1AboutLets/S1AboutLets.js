import React, { useEffect } from 'react'
import img from '../../../data/images'
import SlideMargin from '../../../components/SlideMargin/SlideMargin'

export default function S1AboutLets() {

  useEffect(()=> {
    const letsleftsmallImage = document.querySelector('.lets-left__smallImage'); 
 window.addEventListener('scroll', function () {
 letsleftsmallImage.style.bottom = window.scrollY / 4 + 'px';
 });
  })

 
  SlideMargin('.lets-row')
  return (
    <section className="lets">
      <div className="lets-row">
        <div className="lets-left__row">
          <div className="lets-left__bigImage"><img src={img.aboutFirstSection} alt="фото"/></div>
          <div className="lets-left__smallImage"><img src={img.about_section1_small} alt="фото"/></div>
        </div>
        <div className="lets-right__row">
          <h1 className="lets-right__title title-h1">давайте
            путешествовать вместе</h1>
          <div className="lets-right__subTitle">Travel House, основанная в 2006 году, была создана целеустремленными,
            динамичными и новаторскими людьми, объединившимися вместе. </div>
          <div className="lets-right__text textBody">За пятнадцать лет работы мы расширили Travel House и открыли еще три
            дополнительных офиса, чтобы сосредоточиться на различных потребностях наших клиентов. Всего за два года
            работы в бизнесе наша компания была удостоена двух ценных наград - Russia Travel Excellence Award 2008. <p>
            </p>
            Кроме того, туристическое агентство прошло годичную программу Customer-Centric Initiative (CCI) и успешно
            получило сертификат класса обслуживания в Европе. <p></p>
            Мы предлагаем множество направлений, в том числе Европу, США и экзотические дальние туры, что делает наши
            профессиональные услуги более качественными. </div>
        </div>
      </div>
    </section>
  )
}
