import React from 'react'

const ComicCard = (props) => {
 const {id, thumb, title} = props;
  return (
    <div className="col-16" key={id} >
      <div className="comic-card">
        <img src={thumb} alt="" />
        <h3>{title}</h3>
      </div>
    </div>
  )
}

export default ComicCard