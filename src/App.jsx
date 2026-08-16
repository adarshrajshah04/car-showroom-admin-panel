import React from 'react'
import Layout from './components/global/Layout'
import { Route, Routes } from 'react-router-dom'
import { ShowBrands } from './components/ShowBrands'
import SingleBrand from './components/SingleBrand'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route path='/brands' element={<ShowBrands/>} />
        <Route path='/brands/:id' element={<SingleBrand/>} />
        
        </Route>
      </Routes>
    </div>
  )
}

export default App