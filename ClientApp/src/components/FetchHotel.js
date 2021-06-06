import React from 'react'
import './App.css';
import HotelList from './HotelList';
import Footer from './MainPage/Footer';



export default function FetchHotel() {
    return (
	<>
        <div className="container">
         <HotelList/> 
        </div>
	<Footer />
	</>
      );
    }
