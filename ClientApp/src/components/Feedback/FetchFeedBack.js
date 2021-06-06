import React from 'react'
import '../App.css';
import FeedBackList from './FeedBackList';
import Footer from '../MainPage/Footer';



export default function FetchFeedBack() {
    return (
	<>
        <div className="container">
         <FeedBackList/> 
        </div>
	<Footer />
	</>
      );
    }


