import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Headerlogo from "../images/Frame 57.png"
import "../styles/header.css"

const header = () => {
  return (
    <>
      <header>
        <li>
          <Link to='/'>
            <div className='logo'>
              <img src={Headerlogo} alt='' />
            </div>
          </Link>
        </li>
        <nav>
          <li>
            <Link to='catalogue'>CATALOGUE</Link>
          </li>
          <li>
            <Link to='fashion'>FASHION</Link>
          </li>
          <li>
            <Link to='favourite'>FAVOURITE</Link>
          </li>
          <li>
            <Link to='offers'>LIFESTYLE</Link>
          </li>

        </nav>
        <button className='btn-b'>SIGN UP</button>
      </header>
      <Outlet />
    </>
  )
}


export default header
