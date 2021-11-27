import React from 'react'
import {
    
    Link
  } from "react-router-dom";

export const Nav = () => {
    return (
        <div className='nav w-96 flex justify-around p-2 list-none justify-center m-auto cursor-pointer bg-gray-100 fixed top-0 '>
            <li><Link to="/"> Home</Link></li>
            <li><Link to="/page2">About </Link></li>
            <li><Link to="/page3">Services</Link></li>
            <li><Link to="/page2">Blog</Link></li>
            <li><Link to="/page3">Contact</Link></li>
            
        </div>
    )
}
