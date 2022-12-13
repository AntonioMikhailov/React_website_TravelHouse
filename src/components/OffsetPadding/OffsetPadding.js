
export function RemoveOffsetPadding() {
  const hi = document.querySelector('.hi');
   setTimeout(() => {
    document.body.style.marginRight = 0 + 'px';
    hi.style.paddingRight = 0 + 'px';
    document.body.classList.remove('lock');
   }, 300);
 
}

export function AddOffsetPadding(disableHeaderOffset = true) {

 const hi = document.querySelector('.hi');
 let marginOffset =  window.innerWidth - document.body.clientWidth;
if(disableHeaderOffset===false) {
  document.body.style.marginRight = marginOffset + 'px';
  document.body.classList.add('lock');
  hi.style.paddingRight = 0 + 'px';
 

   } else {
   document.body.style.marginRight = marginOffset + 'px';
   hi.style.paddingRight = marginOffset + 'px';
  document.body.classList.add('lock');
   }
   }

