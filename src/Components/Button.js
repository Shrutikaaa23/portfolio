import React from 'react'
function Button ({label,clr,icon,txt}){
    return(
        <button style={{backgroundColor: clr,color:txt}} className='text-xl w-32 flex gap-4 py-2 px-2 font-sans'>
        {<span >{icon}</span>}
        {label}
        </button>
    )
};
export default Button;



