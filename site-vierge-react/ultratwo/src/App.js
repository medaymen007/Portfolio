import React from "react";
import NevBar from "./allComponent/nevBar";
import Index from "./allComponent/index";
import Contact from "./allComponent/contact";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./allComponent/home";



    
 function App(){
    return(
<BrowserRouter>
   <NevBar/>

<Routes>
   <Route path="*" element={<Home/>}/>
   <Route    path="/" element={<Home/>}/>
   
   <Route path="/contact" element={<Contact/>}/>

</Routes>


</BrowserRouter>
    )
  }

  

export default App;
