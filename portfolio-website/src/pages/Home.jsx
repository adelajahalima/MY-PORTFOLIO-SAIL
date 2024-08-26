import React from 'react'
import Header from "../components/home/Header"
import Hero from "../components/home/Hero"
import TechStack from "../components/home/TechStack"
import Projects from "../components/home/Projects"
import Footer from "../static/Footer"

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <Hero />
         <TechStack />
        <Projects />
        <Footer />
      </div>
    </>
  )
}
