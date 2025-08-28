const TopFooterLinks = (props) => {
  
  const {category, links} = props.links;
  
  return (
    <div className={category}>
      <div className="list-icons">
        {links.map(link => {
          const {id, title, href, image} = link;
          return (
            <div className="link" key={id}>
                <a href={href}>
                  <img src={image} alt="" />
                  <span>{title}</span>
                </a>
              </div>
          )
        })}
        
          </div>
      </div>
  )
}

export default TopFooterLinks