import React from 'react'
import SocialIcons from '../../components/SocialIcons/SocialIcons'
import img from '../../data/images'
import S4HomeStart from '../Home/S4HomeStart/S4HomeStart'
 

export default function Contacts() {
 
  const rightText = [
'Авиа перелеты первым классом',
"5 зведочные отели",
'Автомобили последних моделей',
'Все континенты на выбор'
]
  return (
   <>
<section className="contacts-top">
  <div className="contacts-row">
    <div className="contacts-row__left">
      <div className="contacts-row-left__text">Каждый год любой турист задается вопросом, куда же отправиться на отдых следующим летом. На сегодняшний момент, выбор настолько велик, что вопрос: куда поехать отдыхать, становится для многих камнем преткновения. Позвоните нам и мы поможем Вам с выбором.</div>
    </div>
    <div className="contacts-row__right"><img src={img.contacts_section2} alt="фото"/></div>
  </div>
</section>
<section className="callus">
  <div className="container">
    <h1 className="callus-title title-h1">свяжитесь с нами сейчас</h1>
    <div className="callus-text textBody">Наши менеджеры по туризму с радостью ответят на все Ваши вопросы и помогут выбрать правильный тур для отдыха</div>
    <div className="callus-adress">ул. Кузнецкий Мост, 21/5, г.&nbsp;Москва, <span>+7 495 626-05-48</span></div>
    <div className="callus-social__row">

    <SocialIcons
styles={'callus-social_item'}
/> 
    </div>
  </div>
</section>

<section className="contacts-map">
  <div className="container">
    <div className="contacts-map__row">
      <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1336.179593367429!2d37.60939417078904!3d55.72067156966663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54b12e3fe505f%3A0x41ff44999c25d07b!2z0YPQuy4g0KjQsNCx0L7Qu9C-0LLQutCwLCAzMdCzLCDQnNC-0YHQutCy0LAsINCg0L7RgdGB0LjRjywgMTE1MTYy!5e0!3m2!1sru!2sby!4v1619195625001!5m2!1sru!2sby" allowFullScreen="" loading="lazy"></iframe>
    </div>
  </div>

</section>

<section className="contacts-start start">
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
          </div>
        </section>

 
    </>
  )
}
