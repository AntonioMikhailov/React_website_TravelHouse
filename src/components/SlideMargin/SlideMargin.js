import   { useEffect } from 'react'
export default function SlideMargin(selector) {
  useEffect(()=> {  
    const newwayLeft = document.querySelector(selector);
    const hiRow = document.querySelector('.hi-row');
    const letsRowAbout = document.querySelector(selector);
    const hiRowMargin=getComputedStyle(hiRow);
    window.addEventListener('resize', ()=> { 
      SlideMargin();
     
    });
    function SlideMargin() {
      newwayLeft.style.marginLeft = hiRowMargin.marginLeft;
      letsRowAbout.style.marginRight = hiRowMargin.marginRight;
    }
    SlideMargin();
  })
}
