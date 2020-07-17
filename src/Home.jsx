import React from "react";
import Common from "./Common";
import web from "../src/images/1.JPG";


const Home=() =>{
    return(
        <>
               <Common 
            name="Grow your business with Online Website " 
            imgsrc={web} 
            visit="/service" 
            btnname="Get Started" 
                
            />
        </>
    );


};
export default Home;
