import React from 'react'
import TourTopComponent from './components/TourTopComponent/TourTopComponent'
import { useParams } from 'react-router-dom';
import meetWay from '../Tours/S1ToursMeetway/dataMeetWay';
import dataTourBottom from './components/TourBottomComp/dataTourBottom'
import TourBottomComp from './components/TourBottomComp/TourBottomComp';
export default function TourseSingle() {
  const {id} = useParams() 
  const currentPageTop = meetWay.find((item) => {
    return  item.link === `/tours-single/${id}`;
     });
const currentPageBottom = dataTourBottom.find((item) => {
  return  item.link === id;
   });

     return (
 <>
      <TourTopComponent
      currentPageTop={currentPageTop}
      />
      <TourBottomComp
      currentPageBottom={currentPageBottom}
      />
 </>
     )
     }