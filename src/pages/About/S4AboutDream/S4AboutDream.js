import React from 'react'
import icon from '../../../data/icons'

export default function S4AboutDream() {
  const dreamItem = [
    {icon: icon.dream1, num: '2345', text: 'довольных клиентов'},
    {icon: icon.dream2, num: '568', text: 'авиа перелетов'},
    {icon: icon.dream3, num: '1245', text: 'отелей в базе'},
    {icon: icon.dream4, num: '6789', text: 'классных туров'},
  ]
  return (
    <section className="dream">
      <div className="container">
        <h2 className="dream-title title-h1">всего пара шагов чтобы прийти к мечте</h2>
        <div className="dream-row">

          {
            dreamItem.map((item, i)=> { 
             return ( 
              <div key={i} className="dream-column">
            <div className="dream-column__icon"><img src={item.icon} alt="icon"/></div>
            <div className="dream-column__line"></div>
            <div className="dream-column__number">{item.num}</div>
            <div className="dream-column__text">{item.text}</div>
          </div>
              )})  
          }
 

        </div>

      </div>
    </section>
  )
}
