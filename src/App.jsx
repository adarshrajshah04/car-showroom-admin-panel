import React from 'react'
import Layout from './components/global/Layout'
import { Route, Routes } from 'react-router-dom'
import { ShowBrands } from './components/ShowBrands'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route path='/brands' element={<ShowBrands/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App