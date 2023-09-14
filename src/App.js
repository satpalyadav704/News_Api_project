
import React, { Component } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import News from './News'
import Menu from './Menu'
import Sports from './Sports'
import Business from './Business'
import Technology from './Technology';
import Science from './Science'
import Health from './Health';

export default class App extends Component {
  render() {
    return (
      // <>
      //   <BrowserRouter>
      //   <Menu/>
      //   <Routes>
      //     <Route path="/"element={<News/>}/>
      //     <Route path="/"element={<News category="all"/>}/>
      //     <Route path="/sports"element={<News category="sports"/>}/>
      //     <Route path="/business"element={<News category="business"/>}/>
      //     <Route path="/technology"element={<News category="technology"/>}/>
        
      //   </Routes>
      //   </BrowserRouter>
      // </>
      <>
        <BrowserRouter>
        <Menu/>
        <Routes>
          <Route path="/"element={<News/>}/>
          <Route path="/"element={<News category="all"/>}/>
          <Route path="/sports"element={<Sports/>}/>
          <Route path="/business"element={<Business/>}/>
          <Route path="/technology"element={<Technology/>}/>
          <Route path="/science"element={<Science/>}/>
          <Route path="/health"element={<Health/>}/>  
        
        </Routes>
        </BrowserRouter>
      </>
    )
  }
}
