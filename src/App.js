
import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
BrowserRouter,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
const App =()=>{

  const apiKey = process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
  const [Dmode, setDMode] = useState(false);
 const changeMode=()=>{
          
           setDMode(!Dmode);
           if(!Dmode)
           document.body.style.backgroundColor='black';
           else
           document.body.style.backgroundColor='white';


 }


   

    return (

      <BrowserRouter>
  <NavBar changeMode={changeMode} Dmode={Dmode} />
  <LoadingBar
        color='#f11946'
        progress={progress}
       
      />
    <Routes>
  
    
      
             <Route exact path="/" element={<div><News Dmode={Dmode} setProgress={ setProgress} apiKey={apiKey}   key="general" pageSize={12} country="in" category="general"/></div>} />
             <Route exact path="/general" element={<div><News Dmode={Dmode} setProgress={ setProgress} apiKey={apiKey}   key="general" pageSize={12} country="in" category="general"/></div>} />
             <Route exact path="/business" element={<div><News Dmode={Dmode} setProgress={ setProgress} apiKey={apiKey}  key="business" pageSize={12} country="in" category="business"/></div>} />
             <Route exact path="/entertainment" element={<div><News Dmode={Dmode} setProgress={ setProgress} apiKey={apiKey}  key="entertainment" pageSize={12} country="in" category="entertainment"/></div>} />
             <Route exact path="/health" element={<div><News Dmode={Dmode} setProgress={ setProgress} apiKey={apiKey}  key="health" pageSize={12} country="in" category="health"/></div>} />
             <Route exact path="/science" element={<div><News Dmode={Dmode} setProgress={ setProgress} apiKey={apiKey}  key="science" pageSize={12} country="in" category="science"/></div>} />
             <Route exact path="/sports" element={<div><News Dmode={Dmode} setProgress={ setProgress} apiKey={apiKey}  key="sports" pageSize={12} country="in" category="sports"/></div>} />
             <Route exact path="/technology" element={<div><News Dmode={Dmode} setProgress={ setProgress} apiKey={apiKey}  key="technology" pageSize={12} country="in" category="technology"/></div>} />
     
      
    </Routes>
  </BrowserRouter>
     
    )
  
}

export default App