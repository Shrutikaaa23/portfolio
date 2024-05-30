import React, {useEffect,useState} from"react";
import {useNavigate} from 'react-router-dom'




function Jewels() {
    const [filteredProducts, setFilteredProducts]=useState([]);
    const navigate =useNavigate();
    useEffect(()=> {
        const fetchProducts = async () => {
            try{
                const response = await fetch(
                    "https://fakestoreapi.com/products/category/jewelery?"
                
                );
                const data= await response.json();
                setFilteredProducts(data);

            }catch(error){
                console.error("Error fetching products:", error);
            }
        };
        fetchProducts();
    },[]);

    const navigateToProduct=(id) => {
        navigate(`/product/${id}`);
    };
    
    return (
    <div className="Featureditems flex flex-row ">
        {filteredProducts.map((item,index) =>(
            <div className="eachItems w-56 ml-28 p-10 shadow-xl " key={item.id}>
                <img src={item.image}
                alt={item.title}
                style={{
                    width:
                    index=== 0
                    ?"100px"
                    :index=== 1
                    ? "390px"
                    :index=== 2
                    ? "250px"
                    :index=== 3
                    ? "250px"
                    :"auto",
                    marginTop:
                    index=== 0
                    ? "90px"
                    : index=== 1
                    ? "110px"
                    :index=== 2
                    ? "90px"
                    :index=== 3
                    ? "100px"
                    :"auto",
                   

                   
                }}
                />
                <label className="text-center">price: Rs.{item.price}</label>
               <div className="text-center">
                 <button className="bg-green-400 w-14" onClick= {()=> navigateToProduct(item.id)}>Buy</button></div>
                </div>
               ))}
               </div>
       
        
   
  )
}

export default Jewels