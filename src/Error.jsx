import React from "react";
import web from "../src/images/6.png";
import { NavLink } from "react-router-dom";


const Error=()=>{
    return(
        <>
     <div className="container">
    <div className="row">
    <div className="col-10 mx-auto d-flex flex-column  align-items-center justify-content-center">

        <img src={web} className="img-fluid" alt="error-img"/>
        <NavLink className="btn btn-outline-info btn-lg " to="/home">Back To Home </NavLink>

       </div>
       </div></div>



        </>


    );
};
export default Error;