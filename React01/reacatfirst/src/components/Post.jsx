import React from 'react'

const Post = (props) => {
  return (
    <div style={{border: '2px solid red', padding: '10px', margin: '10px', display: 'flex', flexDirection: 'column', gap: '10px'}}>
      <h1>product name: {props.name}</h1>
      <h2>product price: {props.price}</h2>
      <button>buy {props.name}</button>
    </div>
  )
}

export default Post