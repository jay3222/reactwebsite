import React, { useState } from "react";
import {NavLink} from "react-router-dom";



const Contact=()=>{

  const[data,setData]=useState(({

      uname:'',
      phone:'',
      email:'',
      message:"",

  }));


  const inputEvent=(event)=>{
    console.log(event.target.value);
    const{name,value}=event.target;
    setData((preValue)=>{
      return{
      ...preValue,
      [name]:value,
      };

    });

  };


  const formSubmit=(event)=>{
  event.preventDefault();
  alert( `my name is  ${data.uname} my phone no is ${data.phone}  my email id is ${data.email} message ${data.message}`);

  }
    return (
        <>
      <div className="container  mt-3">
            <div className="row">
                <div className="col-lg-5 col-md-5 col-10 mx-auto  bg-warning text-white ">
                <h1 className="text-center my-3">Contact</h1>
                <form onSubmit={formSubmit}>
  <div className="form-group ">
    <label for="exampleFormControlInput1">User Name</label>
    <input type="text"
     className="form-control"
      id="exampleFormControlInput1" 
      name="uname"
      value={data.uname}
      onChange={inputEvent}
       placeholder="Enter your Name  "/>
  </div>

  <div className="form-group">
    <label for="exampleFormControlInput1">Phone</label>
    <input type="number" 
    className="form-control"
     id="exampleFormControlInput1"
      placeholder="Enter mobile number  "
      name="phone"
      value={data.phone}
      onChange={inputEvent}
      />
  </div>

  <div className="form-group">
    <label for="exampleFormControlInput1">Email</label>
    <input type="email"
     className="form-control"
      id="exampleFormControlInput1"
       placeholder="xyz@gmail.com"
       name="email"
      value={data.email}
      onChange={inputEvent}
       />
  </div>
 
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <input type="text" className="form-control" id="exampleFormControlTextarea1" rows="2"
       name="message"
      value={data.message}
      onChange={inputEvent}
    />
  </div>
  <input type="submit"  className="btn btn-outline-light bg-light text-dark btn-md my-3" />
</form>


                </div></div>
      </div>
  
    </>


    );
};
export default Contact;
