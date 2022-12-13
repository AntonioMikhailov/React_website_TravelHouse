import React from 'react'
import img from '../../../data/images'
export default function S3HomeWeDo() {
  const bottomColumn = [
    {title: '01. лучшие отели', text: 'Мы гарантируем лучшие отели и очень комфортабельные номера,    которые оценит каждый путешественник. Вы останетесь довольны отелем и прекрасно проведете там отпуск.'},
    {title: '02. сервис 24/7', text: 'Мы предоставляем нашим клиентам такую услугу, как Туристический     гид. Его основная цель - обеспечить человека всей необходимой информацией в любое время, когда он ему     понадобится. Эта услуга аналогична Службе поддержки клиентов с упором на поездки.'},
    {title: '03. авиабилеты', text: 'Вы можете забронировать билеты на любой самолет онлайн через нашу     систему бронирования. Здесь у вас есть возможность выбрать вашего транспортного оператора. Наши     представители помогут вам с деталями.'},
  ]
  return (
    <section className="wedo">
    <div className="wedo-row">
      <div className="wedo-left">
        <div className="wedo-left__row">
          <div className="wedo-left__imageMain"><img src={img.home_section2_2} alt="фото"/></div>
          <div className="wedo-left__imageSmall"><img src={img.home_section2_small} alt="фото"/></div>
        </div>
      </div>
      <div className="wedo-right">
        <div className="wedo-right__text textBody">За 25 лет успешной работы нашими услугами воспользовались более 1
          миллиона туристов.
          <p></p> Мы осуществляем профессиональный подбор туров, визовую поддержку, оказываем
          помощь с подготовкой документов – вам не придется ни о чем волноваться.
        </div>
      </div>
    </div>
    <div className="wedo-bottom">
      <div className="container">
        <div className="wedo-bottom__row">
          {
            bottomColumn.map((item, i)=> { 
             return ( 
              <div key={i} className="wedo-bottom__column">
              <h1 className="wedo-bottom__title title-h1">{item.title}</h1>
              <div className="wedo-bottom__text textBody">{item.text}</div>
            </div>
              )})  
          }
        </div>
      </div>
    </div>
  </section>
  )
}
