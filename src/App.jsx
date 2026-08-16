import React from 'react'
import Layout from './components/global/Layout'
import { Route, Routes } from 'react-router-dom'
import { ShowBrands } from './components/Brand/ShowBrands'
import SingleBrand from './components/Brand/SingleBrand'
import CreateBrands from './components/Brand/CreateBrands'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route path='/brands' element={<ShowBrands/>} />
        <Route path='/brands/:id' element={<SingleBrand/>} />
        <Route path='/create-brand' element={<CreateBrands/>} />
        
        </Route>
      </Routes>
    </div>
  )
}

export default App