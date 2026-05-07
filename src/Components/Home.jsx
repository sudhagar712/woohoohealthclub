import React from 'react'
import Hero from './Hero'
import Membership from './Membership'
import SuccessStories from './SuccessStories'
import BuiltWithBest from './BuiltWithBest'
import ReformerPilates from './ReformerPilates'
import ScrollVideoSection from './ScrollVideoSection'

const Home = () => {
  return (
    <div>
      <Hero />
      <BuiltWithBest />
      <ScrollVideoSection/>
      <ReformerPilates />
      <SuccessStories />
      <Membership />
    </div>
  );
}

export default Home
