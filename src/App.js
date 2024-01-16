import React from 'react'
import './App.css'
import {originals, action, comedy, horror,romance, documentaries} from './urls'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Posts from './Components/Posts/Posts'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Posts title='Netflix Originals' url={originals}/>
      <Posts title='Action' isSmall={true} url={action}/>
      <Posts title='Comedy' isSmall={true} url={comedy}/>
      <Posts title='Horror' isSmall={true} url={horror}/>
      <Posts title='Romance' isSmall={true} url={romance}/>
      <Posts title='Documentaries' isSmall={true} url={documentaries}/>
      <Footer/>
    </div>
  )
}

export default App
