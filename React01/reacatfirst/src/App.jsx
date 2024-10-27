import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Post from './components/Post'

function App() {


  return (
    
      <div>
        <Header />
        <Post name="shoe" price="85"/>
        <Post name="garden" price="36"/>
        <Post />
        <Post />
      </div>
  )
}

export default App
