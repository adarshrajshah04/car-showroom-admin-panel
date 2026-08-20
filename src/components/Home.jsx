import React, { useContext } from 'react'
import BellContext from './BellContext'


const Home = () => {
  const data=useContext(BellContext)
  console.log(data);
  

  return (
    <div>Home</div>
  )
}

export default Home