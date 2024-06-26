import React from 'react'
import HeroImage from "../assets/heroImage.png" 
import { FaPersonWalkingArrowRight } from "react-icons/fa6";
import {Link} from 'react-scroll'


const Home = () => {
  return (
    <div
    name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      
      <div className='max-w-screen-lg max-auto flex flex-col
      items-center justify-center h-full px-4 md:flex-row'>
        
        <div className='flex flex-col justify-center h-full'> 
          <h2 className='text-4xl sm:text-7xl font-bold text-white'> I'm a Full Stack Developer.</h2>
          <p className='text-gray-500 py-4 max-w-md'>
            My introduction...
            Hi I'm Siddhant Rajput I come From Nagpur Maharasthra 
             qui dolorem ipsum quia dolor sit amet, 
            consectetur, adipisci velit..."
           "There is no one who loves pain itself,
            who seeks after it and wants
            to have it, simply because it is pain..."
          </p>
          <div>
            <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2
             flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio 
              <span className='group-hover:rotate-90 duration-300'>
              <FaPersonWalkingArrowRight className='w-fit px-2 'size={20}/>
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img src={HeroImage} alt="My Profile"
          className='rounded-2xl mx-auto w-2/3 md:w-full'/>
        </div>
      </div>
    </div>
  )
}

export default Home

