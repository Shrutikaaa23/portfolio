import React, {useEffect,useState} from"react";
import { FaStar,FaStarHalfAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";

export default function Product() {
    const renderRatingStars =()=> {
        const stars=[];
        const totalStars=5;
        const rating = Math.floor(product.rating.rate);
        const remainder = product.rating.rate - rating;

        //Full stars
        for(let i=0; i<rating;i++){
            stars.push(<FaStar key={i} style={{color:'orange'}} />);
        }

        //Half star
        if(remainder >= 0.5){
            stars.push(<FaStarHalfAlt key={rating} style={{ color: 'orange'}} />);
        }
        //Emptystars
        const remainingStars = totalStars- stars.length;
        for (let i=0;i<remainingStars;i++){
            stars.push(<FaStar key={rating +i +1} style={{color:'#ccc'}}/>);
        }
        return stars;

        };

    
    
    
    
    
        //buy now click garda euta product dekhauney code.fetch gareko
    const{ id }=useParams();
    const [product, setProduct]= useState(null);

    useEffect(()=>{
        const fetchProduct= async()=>{
            try{
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await response.json();
                setProduct(data);

            }catch(error){
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    },[id]);
     if(!product){
        return <div>Loading...</div>;
     }
    
    
    
     return (
    <div className="text-center">
        <div className="bg-green-200  pl-[36%]"><img className="pt-20 h-[60%] w-[36%]" src={product.image}/></div>
        <div>
            <label className="ml-26 font-semibold">{product.title}</label>
        </div>
        <div>
            <p className="text-amber-500 size-40 font-bold ml-[45%] rounded-xl h-8 w-24">price: {product.price}</p>
        </div>
        <div className="w-[56%] ml-[22%] text-justify ">Description:{product.description}</div>
        
        <div className="flex flex-row justify-between w-96 mt-5 ml-[36%]">
            <span style={{color:'green'}}>Rating</span>
            <span className="flex " style={{color:'green'}}>
                {renderRatingStars()}({product.rating.count} reviews)
            </span>
        </div>

        <div className="pt-5">
        <button className="bg-green-400 w-36 h-14 rounded-xl font-bold">Add to Cart</button>
        </div>
      
    </div>
  )
}
