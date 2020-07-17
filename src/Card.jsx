import React from "react";
import {NavLink} from "react-router-dom";
import web from "../src/images/2.JPG";

const Card=(props)=>{
  const cardSize={
    width:'100%',
  
  }
    return(
        <>
             <div className="col-lg-4 col-md-4 col-6 mx-auto">
        <div className="card "style={cardSize} >
  <img src={props.imgsrc} className="card-img-top " alt="img1" style={{width:'100%',heigth:'50px',}} />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.para}</p>
    <NavLink to="" className="btn btn-primary">{props.btn}</NavLink>
  </div>
 </div></div>



        </>



    );
};
export default Card;