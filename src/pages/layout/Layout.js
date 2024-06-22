import React from 'react'
import HomePage from '../HomePage/HomePage'
import MainFooter from '../../components/MainFooter/MainFooter'

const Layout = (props) => {
  return (
    <div>
      <HomePage />
        {props.children}
        <MainFooter/>
    </div>
  )
}

export default Layout