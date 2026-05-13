import React from 'react'

const cards = (props) => {
  return (
    <div className="card">
            <img src="https://static.vecteezy.com/system/resources/thumbnails/055/621/001/small/closeup-portrait-of-a-young-woman-with-freckles-and-snow-on-her-face-surrounded-by-pine-branches-photo.jpg" alt="img" />
            <h1>{props.name}</h1>
            <p>{props.para}</p>
            <p>{props.age}</p>
            <button>{props.btn}</button>
        </div>
  )
}

export default cards
