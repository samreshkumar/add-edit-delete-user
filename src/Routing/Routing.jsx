import React from "react";
import {  Route, Switch } from "react-router-dom";
import Home from '../components/pages/Home';
import About from '../components/pages/About';
import Contact from '../components/pages/Contact';
import NotFound from '../components/pages/NotFound'
import Adduser from "../components/users/Adduser";
import Edituser from "../components/users/Edituser";
import View from "../components/users/View";




const Routing = () =>{
    return(

          <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/contact" component={Contact}/>
              <Route exact path="/user/add" component={Adduser}/>
              <Route exact path="/user/edit/:id" component={Edituser}/>
              <Route exact path="/user/view/:id" component={View}/>
              <Route component={NotFound}/>
          </Switch>

    );
}


export default Routing;