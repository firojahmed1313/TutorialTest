import React, { useState } from "react";

const FromPage = () => {
    const [name,setName] =useState("");
    const fromSubmit =(e)=>{
        e.preventDefault();
        console.log("name");
        console.log(name);
        setName("")
    }
  return (
    <>
      <div>FromPage</div>
      <form onSubmit={fromSubmit} >
        <input name="name" className="" placeholder="Enter Name" type="text" value={name} onChange={(e)=> setName(e.target.value)}/>
        <input type="submit"/>

        
      </form>
    </>
  );
};

export default FromPage;
