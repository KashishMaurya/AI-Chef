import React from 'react'
import { LuChefHat } from "react-icons/lu";
import '../style/Header.css'

const Header = () => {
  return (
    <div className='header'>
      <span>
        <LuChefHat />
      </span>
      <h1>AI Chef</h1>
    </div>
  );
}

export default Header