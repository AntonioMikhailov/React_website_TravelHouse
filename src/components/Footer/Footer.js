import React, { useRef } from 'react'
import icon from '../../data/icons'
import img from '../../data/images'
import SocialIcons from '../SocialIcons/SocialIcons'
export default function Footer() {
  const footerInput = useRef()
 return (
 <>
 <section className="footer">
      <div className="container">
        <div className="footer-row">
          <div className="footer-left"><img src={img.home_footer} alt="фото"/></div>
          <div className="footer-right">
            <h1 className="footer-right__title">подписаться на&nbsp;новости</h1>
            <div className="footer-right-columns">
              <div className="footer-right-columns__left">Подпишитесь, чтобы получать самые свежие новости о лучших турах от
                нашей компании</div>
              <div className="footer-right-columns__right">
                <input ref={footerInput} type="text" placeholder="Ваш E-mail:"/>
                <div
                onClick={()=> footerInput.current.value = ''}
                className="footer-right-columns__icon"><img src={icon.arrow_footer} alt=""/></div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom__row">
            <a href="index.html" className="footer-bottom__logo"><img src={icon.logo} alt="лого"/></a>
            <div className="footer-bottom__adress">ул.Кузнецкий Мост, <span>21/5, г. Москва, +7 495 626-05-48</span> </div>
            <div className="footer-bottom-social__row">
              <SocialIcons
              styles={'footer-bottom-social__icon'}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
</>
)
}
