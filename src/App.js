import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router  } from "react-router-dom";
import Routing from './Routing/Routing'
import Nav from './components/layouts/Nav'
import Footer from './components/layouts/Footer'



function App() {
  return (
   <>
   <div>
   <Router>
   <Nav/>
   <div className="container">
     <div className="row">
       <div className="col-md-12">
       <Routing/>
     </div>
   </div>
   </div>
   </Router>
   </div>
   <Footer/>
   </>
  );
}

export default App;
