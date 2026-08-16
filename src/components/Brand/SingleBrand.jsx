import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const SingleBrand = () => {
    const {id}=useParams()
    const [brand, setbrand] = useState({})
    useEffect(() => {
        axios.get(`https://6a79ba5f674f43f4db11a88d.mockapi.io/category/${id}`)
        .then(res=>{
            console.log(res.data);
            
            setbrand(res.data)

        })
    }, [id])
    
    
    
  return (
    <div className='h-full w-full flex flex-col items-center'>
       <div className='w-[40%]  h-[80vh] rounded-3xl overflow-hidden'>
        <img src={brand.logo} alt="logo" 
        className='w-full h-full object-cover' />

       </div>
       <div className='h-[80%] w-[80%] flex flex-col items-start'>
        <h3 className='text-3xl font-bold mt-5 text-white '>{brand.name}</h3>
        <p className='mt-2 text-white font-medium '>{brand.description}</p>
       </div>
    </div>
  )
}

export default SingleBrand