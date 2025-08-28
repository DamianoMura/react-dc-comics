import React from 'react'

const MidFooter = (props) => {
  console.log(props.data)
  const {section,links}=props.data
  
  console.log(links)
 
  return (
        <div className={section}>
            <div className="container">
              <div className="row">
                <div className="col-50">
                  <div className="site-map">
                    <div className="row">
                     {links.map(link=>{
                      const {id,category,links}=link;
                      return(
                        <div className="col-33" key={id}>
                          <h4>{links.category}</h4>
                        
                        <div className="foot-links">
                              <h4>{category}</h4>
                              <ul>
                                {links.map(link => {
                                  return(
                                  <li key={link.id} className={link.title==="Shop" ? "shop-position" : ""}><a href={link.href}>{link.title}</a></li>
                                )
                                })}
                                
                              </ul>
                            </div>
                            </div>
                      )
                     })}
                        
                         
                    </div>
                  </div>
                </div>
                <div className="col-50 dc-bg">

                </div>
            </div>
          </div>
        </div>
       
  )
}

export default MidFooter