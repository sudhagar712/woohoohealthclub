import React from 'react'
import Hero from './Hero'
import Membership from './Membership'
import SuccessStories from './SuccessStories'
import BuiltWithBest from './BuiltWithBest'
import ReformerPilates from './ReformerPilates'

const Home = () => {
  return (
    <div>
      <Hero />
      <BuiltWithBest />
      <ReformerPilates />
      <SuccessStories />
      <Membership />
    </div>
  );
}

export default Home
