import React from 'react'
import '../styles/Footer.css'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate()

  return (
    <div className='footer'>

        <h3>SB Recipess...</h3>

        <div className="footer-options">
          <ul>
            <li  onClick={()=>navigate(`/`)}>Home</li>
            <li  onClick={()=>navigate(`/category/Chicken`)}>Chicken</li>
            <li  onClick={()=>navigate(`/category/Breakfast`)}>Breakfast</li>
          </ul>
          <ul>
            <li  onClick={()=>navigate(`/category/Dessert`)}>Dessert</li>
            <li  onClick={()=>navigate(`/category/Goat`)}>Goat</li>
            <li  onClick={()=>navigate(`/category/Lamb`)}>Lamb</li>
          </ul>
          <ul>
            <li  onClick={()=>navigate(`/category/Pasta`)}>Pasta</li>
            <li  onClick={()=>navigate(`/category/Seafood`)}>Seafood</li>
            <li  onClick={()=>navigate(`/category/Starter`)}>Starter</li>
          </ul>
          <ul>
            <li  onClick={()=>navigate(`/category/Vegan`)}>Vegan</li>
            <li  onClick={()=>navigate(`/category/Side`)}>Side</li>
            <li  onClick={()=>navigate(`/category/Miscellaneous`)}>Miscellaneous</li>
          </ul>
        </div>

        <hr />
        <p>SB Recipiess - &copy; 2023 - All Rights Reserved</p>
    </div>
  )
}

export default Footer