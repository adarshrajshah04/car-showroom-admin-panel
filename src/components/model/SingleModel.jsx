import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const SingleModel = () => {
    const {id}=useParams()
    console.log("ID =", id);
    const [smodel, setSmodel] = useState({})
    useEffect(() => {
        axios.get(`https://6a79ba5f674f43f4db11a88d.mockapi.io/category/${id.split("-")[0]}/product/${id.split("-")[1]}`)
        .then(res=>{
            // console.log(res.data);
            
            setSmodel(res.data)

        })
    }, [id])
    
    
    
  return (
    <div className='h-full w-full flex flex-col items-center'>
       <div className='w-[40%]  h-[80vh] rounded-3xl overflow-hidden'>
        <img src={smodel.thumbnail} alt="thumbnail" 
        className='w-full h-full object-cover' />

       </div>
       <div className='h-[80%] w-[80%] flex flex-col items-start'>
        <h3 className='text-3xl font-bold mt-5 text-white '>{smodel.title}</h3>
        <p className='mt-2 text-white font-medium '>{smodel.description}</p>
       </div>
    </div>
  )
}

export default SingleModel