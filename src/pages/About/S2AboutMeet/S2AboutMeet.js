import React  from 'react'
import SocialIcons from '../../../components/SocialIcons/SocialIcons'
import img from '../../../data/images'
export default function S2AboutMeet() {
  const MeetItem = [
    {img: img.about_meet_1, title: 'Полина сибнева', subHead: 'консультант' },
    {img: img.about_meet_2, title: 'руслан гаев', subHead: 'менеджер' },
    {img: img.about_meet_3, title: 'алина синявская', subHead: 'консультант' },
  ]
  return (
    <section className="meet">
    <div className="meet-row">
      <div className="meet-row__left">
        <div className="meet-left__title title-h1">знакомьтесь, наша команда</div>
        <div className="meet-left-columns-row">
          {
            MeetItem.map((item, i)=> { 
             return ( 
              <div key={i} className="meet-left__item">
              <div className="meet-left-item__image"><img src={item.img} alt="фото"/></div>
              <div className="meet-left-background__row">
                <div className="meet-left-item__title">{item.title}</div>
                <div className="meet-left-item__subhead">{item.subHead}</div>
                <div className="meet-left-item-social__row">
                <SocialIcons
                   styles={'meet-left-social__item'}
              />
                </div>
              </div>
              </div>
              )})  
          }
</div>
</div>
<div className="meet-row__right"><img src={img.about_Meet_background2} alt="фото"/></div>
<div className="meet-background-line"></div>
</div>
</section>
)
}
