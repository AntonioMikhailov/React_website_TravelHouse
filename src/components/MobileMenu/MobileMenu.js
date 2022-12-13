import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import icon from '../../data/icons'
import { discountLinks, toursLinks } from '../Header/dataLinks'
export default function MobileMenu({isMobileActive, setMobileActive }) {
  const [isActiveOneSubMenu,  setActiveOneSubMenu] = useState(false)
  const [isActiveTwoSubMenu,  setActiveTwoSubMenu] = useState(false)
  function closeMobile() {   
    setMobileActive(false)  
    setActiveOneSubMenu(false) //  
    setActiveTwoSubMenu(false) //  
    }
return (
  <>
  <div onClick={closeMobile} className={isMobileActive?  "background background-active ": "background"}></div>
  <div className={isMobileActive ? "mobile-wrapper mobile-menu-active" : "mobile-wrapper"}>
  <div className="mobile-menu">
  <NavLink to="/" end className={({isActive})=> isActive ? 'mobile-menu__item mobile-active' : 'mobile-menu__item'} >Главная</NavLink>
  <NavLink to="/about" className={({isActive})=> isActive ? 'mobile-menu__item mobile-active' : 'mobile-menu__item'}>О нас</NavLink>
  <div className="subMobileMenu__active">
  <div className="mobile-menu-sectionOpener__row ">
  <NavLink to="/tours" className={({isActive})=> isActive ? 'mobile-menu__item mobile-active trigger-open-submenu' : 'mobile-menu__item trigger-open-submenu '}  >Туры</NavLink>
  <div onClick={()=> setActiveOneSubMenu(prev=> !prev)} className="mobile-menu-arrowDown"><img src={icon.dropDown_arrow_subMenu} alt="icon"/></div>
  </div>
  <div className={isActiveOneSubMenu ? "hi-Submenu-Mobile__columns active-submenuMobile" : "hi-Submenu-Mobile__columns" }>
    {
      toursLinks.map((item, i)=> { 
       return ( 
        <NavLink key={i} end to={item.link} className="mobile-menu__item ">{item.text}</NavLink>
        )})  
    }
  </div>
  </div>
        <div className="subMobileMenu__active ">
          <div className="mobile-menu-sectionOpener__row">
            <NavLink to="/discount" className={({isActive})=> isActive ? 'mobile-menu__item mobile-active' : 'mobile-menu__item'}>Акции</NavLink>
            <div onClick={()=> setActiveTwoSubMenu(prev=> !prev)} className="mobile-menu-arrowDown "><img src={icon.dropDown_arrow_subMenu} alt="icon"/></div>
          </div>
  <div className={isActiveTwoSubMenu ? "hi-Submenu-Mobile__columns active-submenuMobile" : "hi-Submenu-Mobile__columns" }>
    {
      discountLinks.map((item, i)=> { 
       return ( 
        <NavLink key={i} end to={item.link} className={ ({isActive})=> isActive ? "mobile-menu__item mobile-active" : "mobile-menu__item"}>{item.text}</NavLink>
        )})  
    }
  </div>
  </div>
  <NavLink to="/contacts" className={({isActive})=> isActive ? 'mobile-menu__item mobile-active' : 'mobile-menu__item'}>Контакты</NavLink>
  <div onClick={closeMobile}
  className="mobile-close-button"><img src={icon.canсel_search} alt="icon"/></div>
  </div>
  </div>
  </>
)
}
