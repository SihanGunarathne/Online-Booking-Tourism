//import React, { Component } from 'react';
import React from 'react';
import '../App.css';
import Cards from './MainPage/Cards';
import HeroSection from './MainPage/HeroSection';
import HomeSection from './HomeSection.Component';
import Footer from './MainPage/Footer';

export default function Home() {
  return (
    <>
      <HomeSection />
      {/* <HeroSection /> */}
      <Cards />
      <Footer />
    </>
  );
}

//export default Home;

/*export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Welcome to Online Tourism Management System</h1>

         
      </div>
    );
  }
}
*/