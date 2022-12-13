import React, { useEffect, useRef, useState } from 'react'
import icon from '../../../data/icons'
import img from '../../../data/images'
import { AddOffsetPadding, RemoveOffsetPadding } from '../../../components/OffsetPadding/OffsetPadding'

export default function S1Home() {
  const [ isOpenVideo, setOpenVideo] = useState(false)
  const videoMovie = useRef()
function handleVideo() { 
  setOpenVideo(true)
  videoMovie.current.load()
  videoMovie.current.play()
 
}
useEffect(()=> {
  if (isOpenVideo) {
    AddOffsetPadding()
 
  } else {
    RemoveOffsetPadding()
 
  }

})

  return (
    <section className="open">
      {}
    <div className="open-header__row">
      <div className="open-header__header">Travel House</div>
      <div className="open-header__Subheader">Откроем мир вместе</div>

      <div className={"open-video" }>
        <div onClick={handleVideo}  className="open-video__row">

          <div  
          className="open-video__button"><img src={icon.play_video} alt="play"/></div>
          <div className="open-video__text">Смотреть видео</div>
        </div>
        <div
         onClick={()=> {setOpenVideo(false); videoMovie.current.pause()}}
        className={isOpenVideo ? "open-video-wrapper open-video-show" : "open-video-wrapper" }>
          <video
          onClick={(e)=> e.stopPropagation()}
          ref={videoMovie} className="videoMovie" src={img.home_Elementorvideo}  loop muted></video>
          <div onClick={()=> {setOpenVideo(false); videoMovie.current.pause()}} 
          className="video-close-button"><img src={icon.canсel_search} alt="icon"/></div>
        </div>

      </div>
    </div>
  </section>
  )
}
