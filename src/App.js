
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  
  render() {
    return (

      <BrowserRouter>
  <NavBar/>
    <Routes>
  
    
      
             <Route exact path="/" element={<div><News  key="general" pageSize={12} country="in" category="general"/></div>} />
             <Route exact path="/general" element={<div><News  key="general" pageSize={12} country="in" category="general"/></div>} />
             <Route exact path="/business" element={<div><News key="business" pageSize={12} country="in" category="business"/></div>} />
             <Route exact path="/entertainment" element={<div><News key="entertainment" pageSize={12} country="in" category="entertainment"/></div>} />
             <Route exact path="/health" element={<div><News key="health" pageSize={12} country="in" category="health"/></div>} />
             <Route exact path="/science" element={<div><News key="science" pageSize={12} country="in" category="science"/></div>} />
             <Route exact path="/sports" element={<div><News key="sports" pageSize={12} country="in" category="sports"/></div>} />
             <Route exact path="/technology" element={<div><News key="technology" pageSize={12} country="in" category="technology"/></div>} />
     
      
    </Routes>
  </BrowserRouter>
     
    )
  }
}

