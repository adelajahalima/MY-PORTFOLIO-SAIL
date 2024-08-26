import React from 'react';
import Header from "../components/home/Header";
import Projects from '../components/home/Projects'
import TechStack from '../components/home/TechStack'
import Footer from '../static/Footer'

export default function Home() {
  return (
    <>
        <div>
          <Header />
          <TechStack />
          <Projects />
          <Footer />
        </div>
    </>
    
  )
}
