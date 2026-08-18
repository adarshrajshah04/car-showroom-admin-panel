
import React, { useEffect, useState } from 'react'
import ModelDataTable from './ModelDataTable'
import axios from 'axios'

const ShowModel = () => {
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
        <h3>Models</h3>
        <p>View , Update and Delete Models </p>

        <div>
            <ModelDataTable model={model} setUpdate={setUpdate} />
        </div>


    </div>
  )
}

export default ShowModel