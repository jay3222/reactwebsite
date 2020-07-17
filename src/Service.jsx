import React from "react";
import {NavLink} from "react-router-dom";
import web from "../src/images/2.JPG";
import Card from "./Card";
import Sdata from "./Sdata";

const Service=() =>{
    return(
        <>
           <div className="container">
        <div className="row">
        <div className="col-10 mx-auto">
            <h1 className="text-center mb-5">Our Services</h1>
        </div></div>
        <div className="row gy-4">
        {
          Sdata.map((val,ind)=>{
            return <Card  key={ind} imgsrc={val.imgsrc} title={val.title}para={val.para}btn={val.btn}/>



          })
        

          }
          
       

        
        </div>

           </div>
        </>
    );


};
export default Service;
