import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from "../pages/HomePage/Header.js"
import Layout from '../pages/layout/Layout.js'

const RouteHandler = () => {
  return (
  
    <Routes>
    <Route path="/" element={<Layout> <Header /> </Layout>} />
 
  </Routes>
    
  )
}

export default RouteHandler