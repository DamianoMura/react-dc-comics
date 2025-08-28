import React from 'react'

const ComicCard = (props) => {
  return (
    <div className="col-16" key={props.id} >
      <div className="comic-card">
        <img src={props.thumb} alt="" />
        <h3>{props.title}</h3>
      </div>
    </div>
  )
}

export default ComicCard