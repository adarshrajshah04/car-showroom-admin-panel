import React from 'react'
import Layout from './components/global/Layout'
import { Route, Routes } from 'react-router-dom'
import { ShowBrands } from './components/Brand/ShowBrands'
import SingleBrand from './components/Brand/SingleBrand'
import CreateBrands from './components/Brand/CreateBrands'
import UpdateBrand from './components/Brand/UpdateBrand'
import Home from './components/Home'
import CreateModel from './components/model/CreateModel'
import ShowModel from './components/model/ShowModel'
import SingleModel from './components/model/SingleModel'
import UpdateModel from './components/model/UpdateModel'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/brands' element={<ShowBrands/>} />
        <Route path='/create-brand' element={<CreateBrands/>} />
        <Route path='/create-model' element={<CreateModel/>} />
        <Route path='/model' element={<ShowModel/>} />
        {/* Dynamic routing */}
        {/* brands */}
        <Route path='/brands/:id' element={<SingleBrand/>} />
        <Route path='/brands/update/:id' element={<UpdateBrand/>} />
        {/* models */}
        <Route path='/model/:id' element={<SingleModel/>} />
        <Route path='/model/update/:id' element={<UpdateModel/>} />
        
        </Route>
      </Routes>
    </div>
  )
}

export default App