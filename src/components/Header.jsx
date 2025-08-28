import React from 'react'

const Header = () => {
  const links=[
    {
    id:1,
    href:"#",
    title:"characters",
    active:false
    },
    {
    id:2,
    href:"#",
    title:"comics",
    active:true
    },
    {
    id:3,
    href:"#",
    title:"movies",
    active:false
    },
    {
    id:4,
    href:"#",
    title:"tv",
    active:false
    },
    {
    id:5,
    href:"#",
    title:"games",
    active:false
    },
    {
    id:6,
    href:"#",
    title:"collectables",
    active:false
    },
    {
    id:7,
    href:"#",
    title:"videos",
    active:false
    },
    {
    id:8,
    href:"#",
    title:"fans",
    active:false
    },
    {
    id:9,
    href:"#",
    title:"news",
    active:false
    },
    {
    id:10,
    href:"#",
    title:"shop",
    active:false
    },
  ]

  return (
    
    <header className='flex-container-between'>
      
        <div className='logo'>
          <img src="./img/dc-logo.png" alt="" />
        </div>
        <div className="top-menu">
          <ul>
            {links.map(link => {
              return(
                <li key={link.id} className={link.active === true ? 'active' :'' }><a href={link.href}>{link.title}</a></li>
              )
            })}
          </ul>
        
      </div>

    </header>
    
  
  )
}
export default Header