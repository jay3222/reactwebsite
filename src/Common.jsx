import React from "react";
import {NavLink} from "react-router-dom";



const Common=(props)=>{
    return (
        <>
        <section id="header" className="">
        <div className="container-fluid nav_bg">
        <div className="row">
            <div className="col-10 mx-auto">
            <div className="row ">
            <div className="col-md-6  pt-5 mt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center  ">
                <h1 className="header-content"> {props.name} </h1>
                <h3 className="my-3">we aer the team of talented developer making websites</h3>
                <div className="mt-3 ">

                <NavLink className="btn btn-outline-primary btn-lg " to={props.visit}>{props.btnname}</NavLink>
                </div></div>
                <div className="col-lg-6 order-1 order-lg-2 order-1 header-img d-flex justify-content-center">
                    <img className="img-fluid" 
                    src={props.imgsrc}
                     alt="Common img"

                     />
                </div>
                </div>
            </div>
        </div>
    </div>


        </section>
    </>


    );
};
export default Common;
