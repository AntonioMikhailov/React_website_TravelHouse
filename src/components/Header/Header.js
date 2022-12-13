import React, {   useEffect, useRef, useState } from 'react'
import icon from '../../data/icons'
import MobileMenu from '../MobileMenu/MobileMenu'
import { NavLink, useLocation } from 'react-router-dom'
import { toursLinks, discountLinks } from './dataLinks'
export default function Header() {
  const location = useLocation();
  const inputSearch = useRef()
  const [isMobileActive, setMobileActive] = useState(false)
  const [isSearchActive, setSearchActive] = useState(false)
  function handleSearchField() { 
    setSearchActive(true)
    inputSearch.current.value = ''
  }
  const [isStyleBackground,  setStyleBackground] = useState('hi-show')
  useEffect(()=> {
    window.addEventListener('scroll', ()=> {
      if( window.scrollY > 50 ) {
        setStyleBackground('hi-show')
      }  else {
        setStyleBackground('')
      }
    });
  })
return (
<>
<section className={location.pathname === '/' ? `hi ${isStyleBackground}`:  "hi allPagesHeaderBackground" }>
    <div className="hi-row" id='toUp'>
      <NavLink data-title to="/" className="hi-logo"><img src={icon.logo} alt="логотип"/></NavLink>
      <div className={isSearchActive ? "hi-menu menu-hide" : "hi-menu"}>
        <NavLink data-title to="/" end className={({isActive})=> isActive ? "hi-menu__item hi-active" : "hi-menu__item" }>Главная</NavLink>
        <NavLink data-title to="/about" className={({isActive})=> isActive ? "hi-menu__item hi-active" : "hi-menu__item" }>О нас</NavLink>
        <div className="hi-Submenu"> 
          <NavLink  data-title to="/tours" className={({isActive})=> isActive ? "hi-menu__item hi-active" : "hi-menu__item" }>Туры</NavLink>
          <div className="hi-Submenu__columns">
            {
              toursLinks.map((item, i)=> { 
               return ( 
                <NavLink end key={i} to={item.link} className="hi-Submenu___item ">{item.text}</NavLink>
                )})  
            }
          </div>
        </div>
        <div className="hi-Submenu">
          <NavLink data-title to="/discount" className={({isActive})=> isActive ? "hi-menu__item hi-active" : "hi-menu__item" }>Акции</NavLink>
          <div className="hi-Submenu__columns">
          {
              discountLinks.map((item, i)=> { 
               return ( 
                <NavLink end key={i} to={item.link} className="hi-Submenu___item ">{item.text}</NavLink>
                )})  
            }
         </div>
        </div>
        <NavLink data-title to="/contacts" className={({isActive})=> isActive ? "hi-menu__item hi-active" : "hi-menu__item" }>Контакты</NavLink>
      </div>
      <div onClick={()=> setMobileActive(prev => !prev)}  className={isSearchActive ? "burger-btn burger-btn-hide" : "burger-btn"}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="search-field">
        <div className="search-field__row">
          <input ref={inputSearch} type="text" className={isSearchActive ? "search-field__input input-active" : "search-field__input" }  placeholder="Поиск по сайту..."/>
          <div 
           onClick={ handleSearchField}
          className={isSearchActive ? "search-field__search--icon search-button-active" :"search-field__search--icon" }>
          </div>
          <div onClick={ ()=> setSearchActive(false)}
          className={isSearchActive ? "search-field__cancel--search search-active" : "search-field__cancel--search" }></div>
          </div>
      </div>
    </div>
  </section>
  <MobileMenu
  isMobileActive={isMobileActive}
  setMobileActive={setMobileActive}
  />
</>
  )
}
