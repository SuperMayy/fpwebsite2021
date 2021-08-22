import React from 'react'
import Powerpoint from '../generalComponents/Powerpoint'
// import Hero from './Hero'
import HomePageInfo from './HomePageInfo'
import HowWeHelp from './HowWeHelp'
import Recent from './Recent'
import HowYouCanHelp from './HowYouCanHelp'
import Donation from './Donation'
import './home.css'

const Home = () => {
    return (
        <div className="Home">
          <Powerpoint/>
          {/* <Hero /> */}
          <HomePageInfo />
          <HowWeHelp />
          <Recent />
          <HowYouCanHelp />
          <Donation />
        </div>
    )
}

export default Home
