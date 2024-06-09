import React from 'react'
import Hero from '../component/Hero';
import Features from '../component/Features';
import Testimonial from '../component/Testimonial';
import CallToAction from '../component/CallToAction';

const Home = () => {
  return (
    <div>
        <Hero />
        <Features />
        <Testimonial />
        <CallToAction />
    </div>
  )
}

export default Home;