import React,{useState} from 'react';
import Formms from './Formms'

import { Link } from 'react-router-dom';
import { DiBlackberry } from 'react-icons/di';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from 'react-icons/io';
import { CgAddR } from "react-icons/cg";



export default function Navbar() {
  const [isScrolled, setIsScrolled]= useState(false);
  const [showMenu, setShowMenu]=useState(false);


   const handleScroll=()=>{
    const scrollTop=window.scrollY;
    setIsScrolled(scrollTop>10);
   };

    window.addEventListener("scroll",handleScroll);
   
const toggleMenu=()=>{
  setShowMenu(!showMenu);
};


  const MenuLinks=[
    { id:1, name:"Home" ,link:"/",},
    { id:2, name:"About", link:"/About",},
    { id:3, name:"Contact", link:"/Contact",},
    { id:3, name:"Service", link:"/Service",},
    { id:4, name:"Jewels", link:"/Jewels",},
  ];

  return(
    <div className={`fixed w-full flex justify-between  qpx-4 pt-4 pb-5 px-20 ${isScrolled ?'bg-pink-700':'bg-blue-200'}`}>
      <p>Shrutika</p>
      <li className='ml-[66%] '><CgAddR  size={36}/></li>

     
      <ul className='flex-row cursor-pointer hidden md:flex '>
      
        {MenuLinks.map((data,index)=>(   
          <li key={index} className='mt-2'> 
            <Link to={data.link}
            className='pl-10 font-semibold'>
              {data.name}
           </Link>
          </li>
        ))}

      </ul>
      <button onClick={toggleMenu} className='md:hidden cursor-pointer absolute top-2 right-10'>
        {showMenu ? (
          <IoMdClose size={25}/>
        ) : (
          <GiHamburgerMenu size={25}/>
        )}
        
      </button>

      <div
        className={`shadow-4xl ease-in text-black text-start ${
          showMenu ? 'block' : 'hidden'
        }`}>
          {showMenu &&(
            <div className='flex flex-col mt-16 py-2 bg-primary h-full w-full'>
             
             <ul className='flex-col cursor-pointer sm: '>
              
             {MenuLinks.map((data,index)=>(   
               <li key={index} className='mt-2'> 
                 <Link to={data.link}
                 className='pl-10 font-semibold'>
                   {data.name}
                </Link>
               </li>
              
             ))}
             </ul>
             </div>
          )}



      </div>
      </div>
  );
}


























{ /* return (
    <div className=" bg-green-100">
       <div className="text-end space-x-5 h-9">
            <a><Link to='/'>Home</Link></a>
          <a> <Link to='/About'>About us</Link></a>
              <a><Link to='/Contact'>Contact Us</Link></a>
         <a> <Link to='/Service'>Service</Link></a>
         
          </div> 
          <Formms label="FullName" placeholdertxt="Enter FullName"/>
         </div>
*/}
        
  
