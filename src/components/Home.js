import React from 'react'
import Bio from './Bio'
import "../component-styles/Home.css"
import wave from "../wave1.png"
import CustomerReviews from './CustomerReviews'
const Home = () => {
  return (
    <div className="Home">
        <Bio />
        <div className="divider">
          <img src={wave}/>
        </div>
        <CustomerReviews />
    </div>
  )
}

export default Home