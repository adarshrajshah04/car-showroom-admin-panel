import React from 'react'
import Layout from './components/global/Layout'
import { Route, Routes } from 'react-router-dom'
import { ShowBrands } from './components/Brand/ShowBrands'
import SingleBrand from './components/Brand/SingleBrand'
import CreateBrands from './components/Brand/CreateBrands'
import UpdateBrand from './components/Brand/UpdateBrand'
import Home from './components/Home'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/brands' element={<ShowBrands/>} />
        <Route path='/create-brand' element={<CreateBrands/>} />
        {/* Dynamic routing */}
        <Route path='/brands/:id' element={<SingleBrand/>} />
        <Route path='/brands/update/:id' element={<UpdateBrand/>} />
        
        </Route>
      </Routes>
    </div>
  )
}

export default App