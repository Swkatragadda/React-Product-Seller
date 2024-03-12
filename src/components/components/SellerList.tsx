import { useState, useEffect } from "react";
import { getAllSellerAPI } from "../../services/SellerServiceApi";
import { SellerModel } from "../models/SellerModel";
import DeleteSeller from "./DeleteSeller";

export function SellerList() {
    const [sellers, setSellers] = useState<SellerModel[]>([]);
  
    useEffect(() => {
        getAllSellerAPI()
        .then(response => response.json())
        .then(json => {
          setSellers(json);
          // console.log(json);
          // console.log(allproducts);
        });
    }, []);

    const handleDeleteSeller= (sellerId:number)=>{
      setSellers(prevSellers=> prevSellers.filter(seller=>seller.sellerId !==sellerId));
    };

  
    return (
      <>
        <h1>Seller List:</h1>
        {sellers.length > 0 ? (
          <ul>
            {sellers.map((seller, index) => (
              <li key={index} >
                
                <div className='seller-info'> 
                      <span className='seller-property'>Seller ID:</span>
                      <span className='seller-value'>{seller.sellerId}</span><br></br>
                      <span className='seller-item'></span>
                      <span className='seller-property'>Seller Name:</span> 
                       <span className='seller-value'>{seller.sellerName}</span><br></br> 
                 </div> 
                       <DeleteSeller onDelete={()=>handleDeleteSeller(seller.sellerId)}/>
                    </li> 

                 ))}   
                                                                  
                                                                                                                                      
                   </ul> 
                      ) : ( 
                        <span>Loading...</span> 
                    )} 
                    </> 
); }





                

