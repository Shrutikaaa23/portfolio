import React ,{useState}from 'react'
import Button from './Button'
import {FaInstagram} from 'react-icons/fa';


import contact from "../Assets/Images/contact.png";

export default function Contact() {

/*const[count,setCount]=useState(0);
const incrementCount=()=>{
    setCount(count+1);
};*/


const[items,setItems]=useState([]);

const addItem = ()=>{
    const newItem= prompt('Enter Item:');
    setItems([...items, newItem]);

};




  return (
   
  
      <div className="mt-2 ml-[25%] bg-green-100 w-[55%]">
          
            <div className= "flex flex-row mt-8">
                <div className=" flex flex-col ml-8 mt-11">
                    <label>Name</label><input type="text" name="fname" placeholder="Enter your name" ></input>
                    <label>Email</label> <input type="text"  name="emails" placeholder="Enter your email"></input>
                    <label>Subject</label><textarea class="textarea" name="subj">Enter text here...</textarea>
             </div>
            
                <div className="ml=[122px]">
                <img src={contact}></img>
                </div>
            </div>
            <div className="ml-8 bg-pink-200 w-[12%]">
                <button type="submit" >Send Message</button>
                </div>
                <div>
                <Button label="FOLLOW" clr="pink" txt="white" icon={<FaInstagram/>}/>
                </div>
    {/*<div>
        <p>Count:{count}</p>
        <button onClick={incrementCount}>Increment</button>
  </div>*/}

  <div>
    <button onClick={addItem} className='border-2 border-black'>ADD ITEM</button>
    <ul>
        {items.map((item, index)=>(
            <li key={index}> {item}</li>

        ))}
    </ul>
  </div>
              
            </div>
            
   
  )
}