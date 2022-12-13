import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import dataDiscSingle from './dataDiscSingle'
import icon from '../../data/icons'
import img from '../../data/images'
import { AddOffsetPadding } from '../../components/OffsetPadding/OffsetPadding'
import Slider from '../../components/Slider/Slider'
import dataGalletyDiscount from './dataGalletyDiscount'
export default function DiscountSingle() {
  const {id} = useParams()
  const currentPage = dataDiscSingle.find((item )=> {
    return item.pageId === id; 
  })
  const prevImage = [ currentPage.prevImg_1, currentPage.prevImg_2, currentPage.prevImg_3,  ]
  const [isActiveGallery, setActiveGallery] = useState(false)
    const currentGallery = dataGalletyDiscount.find((item)=> {
      return item.pageId === id; 
    })
    console.log(dataGalletyDiscount[0].img);
    console.log(currentGallery);
  return (
 <>
   <Slider
     setActiveGallery={setActiveGallery}
     isActiveGallery={isActiveGallery}
     sliderImage={currentGallery.images} // передаем разные фото
     />
     <section className="mounttop">
      <div className="container">
        <div className="mounttop-top__row">
          <div className="mounttop-top__backgroundImage"><img src={currentPage.img} alt="фото"/></div>
          <h1 className={`mounttop-top__title h1-${currentPage.pageId}`}>{currentPage.H1title}</h1>
        </div>
        <div className="mounttop-bottom__row">
          <h2 className="mounttop-bottom__title title-h1">{currentPage.H2title}</h2>
          <div className="mounttop-bottom___text textBody">{currentPage.H2text}</div>
        </div>
      </div>
    </section>
  <section className="what">
<div className="container">
<h2 className="what-title title-h1">Что нас ждет...</h2>
   <div className="carousel-preview">
     <div className="carousel-preview__row">
   {
 prevImage.map((item, i)=> { 
 return ( 
   <div key={i} className="carousel-preview__columns">
   <div
    onClick={()=> {setActiveGallery(true); AddOffsetPadding(false)}} 
   className="carousel-preview-item">
     <div className="carousel-preview__image what-preview-image">
       <img src={item} alt="фото"/></div>
     <div className="carousel-preview__icon"><img src={icon.search_gallery} alt="icon"/></div>
   </div>
 </div>
   )})  
   }
</div>
      </div>
</div>
        </section>
{/* FeedBAck */}
        <section className="feedback">
   <div className="container">
     <div className="feedback-title title-h1">отзывы наших клиентов о&nbsp;туре</div>
     <div className="feedback-row">
      <div className="feedback-column">
        <div className="feedback-left"><img src={img.comment2} alt="фото"/></div>
        <div className="feedback-right">
          <div className="feedback-right__title">Мария Суханова</div>
          <div className="feedback-right__text textBody">Это очень красивая местность в любое время года и в любую погоду.У природы нет плохой погоды! Я езжу туда ежегодно зимой и летом.Там много туристов -иностранцев, детей и взрослых из разных уголков Великой России. Величественные горы никого не оставляют равнодушным! Природа вокруг как музей под открытым небом! Полный покой и удовольствие для души!</div>
        </div>
      </div>
      <div className="feedback-column">
        <div className="feedback-left"><img src={img.comment1} alt="фото"/></div>
        <div className="feedback-right">
          <div className="feedback-right__title">игорь Смолянов</div>
          <div className="feedback-right__text textBody">На самой высокой в Европе горе есть горнолыжный курорт "Азау" и с его помощью за 900 руб можно подняться на 3 закрытых канатках (ветер не страшен!) на высоту до почти 3800 м. Виды на окрестные горы неописуемые, смотреть на царапающие и лижущие вершины гор облака можно бесконечно. А внизу горнолыжники и скейтбордисты, словно муравьи. Хотя на верхней станции канатки до пиков Эльбруса еще 2 км, они кажутся очень близкими и на таком расстоянии смотрятся менее эффектно.</div>
        </div>
      </div>
     </div>
   </div>
 </section>    
 </>
  )
}
