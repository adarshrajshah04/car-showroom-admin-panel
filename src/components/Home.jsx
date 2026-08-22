import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'

const data=[
  {'button':'Brands',
    'link':'/brands',
  },
  {'button':'Brands Add',
    'link':'/create-brand',
  },
  {'button':'Models',
    'link':'/model',
  },
  {'button':'Brands Add',
    'link':'/create-model',
  },

]


const Home = () => {
  
  

  return ( 
    <div className='w-full h-full flex justify-center '>
      <div className='w-[60%] overflow-hidden'>
        <img src={logo} alt="logo" className='w-full  object-contain ' />
        
        <div className='  mt-5 flex justify-around ' >
        {data.map((a)=>(
          <Link to={a.link}>
          <button className='px-4 py-2 bg-gray-600 text-white  mr-2 rounded-full hover:bg-gray-400 '>{a.button}</button>
          </Link>
        ))}
      </div>
      </div>
      


    </div>
  )
}

export default Home