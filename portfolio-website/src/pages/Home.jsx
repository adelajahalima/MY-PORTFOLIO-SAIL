import React from 'react'
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import Header from "../components/home/Header"
import Hero from "../components/home/Hero"
import TechStack from "../components/home/TechStack"
import Projects from "../components/home/Projects"
// import Footer from "../static/Footer"

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);
  
  return (
    <>
      <div>
        {/* <Header /> */}
        <Hero />
         <TechStack />
        <Projects />
      </div>
    </>
  )
}
