import React from 'react'

const Header = () => {

    const func = () => {
      return <div>
        <button>login</button>
        <button>signin</button>
        <button>logout</button>
        </div>
    }
  return (
    <div>
      <h1>my app</h1>
      {func()}

    </div>
  )
}

export default Header