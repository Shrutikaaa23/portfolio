import React from "react";

import img from "../Assets/Images/me.JPG";


export default function () {
  /*const intro=[
    {id:1, text: "Myself shrutika subba",},
    {id:2, text:"From Gachhiya",},
    {id:3, text:"BCA",},
    {id:4, text:"Completed training from Bardali Creations"}
  ];
  
  
  
  return(
    <div>
    {intro.map((txt)=>(
     <p key={txt.id}>{txt.text}</p>
  ))}
  </div>
);
}*/
 

return (
    <div className=" border-black flex flex-row  ml-80 bg-green-100 h-[350px] w-[59%]" >
      <div className="mt-[25]">
      <div className="ml-7 mt-7">
        <p>Hello I'm</p>
        <h1>SHRUTIKA</h1>
        <h1>SUBBA</h1>
        </div>
        <div className="ml-7">
        <p>A IT Student who has a passion for frontend designing. </p>
       
        <p>
          I have completed my 2months training of Web Development in Bardali
          Creations.{" "}
        </p>
        </div>
        
       
        <div className="ml-[55%] mt-[19%]">
        <p>Find Me on</p>
        </div>
       
        
        <div className="ml-[55%]">
          <button type="button">Contact Me</button>
        </div>
      </div>
      <div className="h-[32px] w-44 mt-7 rounded-l ml-4">
        <img src={img}></img>
        </div>
    </div>
  );
}
