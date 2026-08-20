
import React, { useEffect, useState } from 'react'
import ModelDataTable from './ModelDataTable'
import axios from 'axios'
// import { useParams } from 'react-router-dom'


const ShowModel = () => {
  //  const { categoryId } = useParams();
  //  console.log(categoryId);
   
    const [model, setModel] = useState([])
    const [update, setUpdate] = useState(1)
    useEffect(() => {
      axios.get('https://6a79ba5f674f43f4db11a88d.mockapi.io/category/2/product')
      .then(res=>{
        setModel(res.data)
      })
      .catch(err=>{

        console.log(err);
        
      })
      
    }, [update])
    

  return (
    <div>
        <h3 className='text-2xl text-white font-bold '>Models</h3>
        <p className='text-white font-medium'>View , Update and Delete Models </p>

        <div>
            <ModelDataTable model={model} setUpdate={setUpdate} />
        </div>


    </div>
  )
}

export default ShowModel