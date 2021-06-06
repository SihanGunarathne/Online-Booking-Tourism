import React from 'react'
import './App.css';
import TravelerList from './TravelerList';
import Footer from './MainPage/Footer';



export default function FetchTraveler() {
    return (
	<>
        <div className="container">
         <TravelerList/> 
        </div>
	<Footer />
	</>
      );
    }


