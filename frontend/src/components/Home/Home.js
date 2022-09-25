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
  const howWeHelpData = [
    {
      name: "The United Kingdom",
      extraClass: "one",
      link: "uk",
      noLink: false,
      description: null
    },
    {
      name: "Kenya",
      extraClass: "two",
      link: "kenya",
      noLink: false,
      description: null
    },
    {
      name: "Nigeria",
      extraClass: "three",
      link: "nigeria",
      noLink: false,
      description: null
    },
    {
      name: "Remote",
      extraClass: "four",
      link: "remote",
      noLink: false,
      description: null
    }
  ]
    return (
        <div className="Home">
          <Powerpoint/>
          {/* <Hero /> */}
          <HomePageInfo />
          <HowWeHelp data={howWeHelpData} title="HOW WE HELP"/>
          <Recent />
          <HowYouCanHelp />
          <Donation />
        </div>
    )
}

export default Home
