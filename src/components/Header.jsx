import React from 'react'

const Header = () => {


  return (
    
    <header>
      <div className="container">
        <div className='logo'>
          <img src="./img/dc-logo.png" alt="" />
        </div>
        <div className="top-menu">
          <ul>
            <li><a href="#">characters</a></li>
            <li className='active'><a href="#" >comics</a></li>
            <li><a href="#">movies</a></li>
            <li><a href="#">tv</a></li>
            <li><a href="#">games</a></li>
            <li><a href="#">collectables</a></li>
            <li><a href="#">videos</a></li>
            <li><a href="#">fans</a></li>
            <li><a href="#">news</a></li>
            <li><a href="#">shop</a></li>
          </ul>
        </div>
      </div>

    </header>
    
  
  )
}
export default Header