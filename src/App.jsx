import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Footer from "./Footer";
import Error from "./Error";
import { Switch , Route ,Redirect } from "react-router-dom";

const App=() =>{
    return(
        <>
        <Navbar/>
            <Switch>
            
            <Route exact path="/home" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/service" component={Service} />
            <Route exact  path="/contact" component={Contact} />
       
            <Redirect to="/home"  />
           
           
            </Switch>
            <Footer/>
        </>
    );


};
export default App;
//     <Route exact component={Error}/>