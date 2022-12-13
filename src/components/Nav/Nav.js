import { useEffect } from "react";
export default function Nav() {
 useEffect(()=> {
  const link = document.querySelectorAll('a');
const anchor = document.querySelector('.anchor-wrapper');
let scrollPos = 0;
window.addEventListener('scroll', function () {
  let i = window.pageYOffset;
  let e = window.innerHeight;
  let documentScrollHeight = document.documentElement.scrollHeight;
  if (((document.body.getBoundingClientRect()).top > scrollPos && i >= e - i) ||  i+e === documentScrollHeight ) {
    anchor.classList.add('anchor-active');
  } else {
    anchor.classList.remove('anchor-active');
  }
  scrollPos = (document.body.getBoundingClientRect()).top;
});
  function smoothScroll (targetSelector ) {
 const whereTo = document.querySelector(targetSelector); 
    let startPosition = window.pageYOffset;
  let targetPosition = whereTo.offsetTop - 100  ;
  let distance = targetPosition - startPosition;
  let duration = 1000;
  let start = null;  
  window.requestAnimationFrame(step);
  function step(timestamp) {
  if (!start) start = timestamp;
  let progress = timestamp - start;
  window.scrollTo(0, easing(progress, startPosition, distance, duration));
  if (progress < duration) { 
  window.requestAnimationFrame(step);
  }
  }
  }
  function easing (t, b, c, d) {
  return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
  }
  link.forEach(item => { 
    item.addEventListener('click', function(e)  {
       let targetPosition = item.getAttribute(`${'href'}`);
  if(item.hasAttribute('data-link')) {
    e.preventDefault();
   smoothScroll(targetPosition );
   }
   if(item.hasAttribute('data-title')) {
     document.querySelector('title').textContent = `Travel House – ${item.textContent}`;
   }
  });
   });
 })
}
