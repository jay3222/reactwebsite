import React from "react";
import web from "../src/images/5.JPG";
import {NavLink} from "react-router-dom";
import Common from "./Common";


const About=() =>{
    return(
        <>
            <Common 
            name="welcome to About page" 
            imgsrc={web}
            visit="/contact" 
            btnname="Conact Now" 

            />
        </>
    );


};
export default About;
