import React from 'react'

const Header = (props) => {
const {section,links} =props.data;
// console.log(links,section)
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