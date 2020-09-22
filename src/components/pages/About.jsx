import React from "react";


const About = () =>{
    return(
        <>
       <h1> Welcome to About page</h1>
       <p className="minheight">
       <h2>Steps</h2>
        <p>
        step1:- $ npm install --save react-router-dom<br/>
        step2:- import<code> BrowserRouter, Route, Link  </code> from "react-router-dom";<br/>
        step 3:- Add BrowserRouter <br/>
        step 4:- Add switch inside BrowserRouter (BrowserRouter - switch )<br/>
        step 5:- Add Route inside switch (BrowserRouter - switch - Route )<br/>
        step 6:- add exact -- to check the exact path of the component <br/>
        step 7:- add component name </p>

       <h3> code:- example</h3>
       <p><img src={process.env.PUBLIC_URL + '/images/Capture1.jpg'} alt="dummy"/></p>
  
       <p><img src={process.env.PUBLIC_URL + '/images/Capture.jpg'}  alt="dummy"/></p>
       </p>
        </>
    );
}


export default About;