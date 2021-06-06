import React from 'react'
import './App.css';
import GuiderList from './GuiderList';
import Footer from './MainPage/Footer';



export default function FetchGuider() {
    return (
	<>
        <div className="container">
         <GuiderList/> 
	 
        </div>
	<Footer />
	</>
      );
    }
