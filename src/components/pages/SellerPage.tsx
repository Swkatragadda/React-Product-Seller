import React ,{useState,useEffect } from "react";
import { getAllSellerAPI } from "../../services/SellerServiceApi";
import { AddSeller } from "../components/AddSeller";
import Seller from '../components/Seller';
import { SellerList } from "../components/SellerList";
import { SellerModel } from '../models/SellerModel';



export function SellerPage() {

return ( 
<>
<SellerList></SellerList>
<AddSeller></AddSeller>    


</>
)
};