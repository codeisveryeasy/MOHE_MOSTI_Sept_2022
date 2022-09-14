import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';



function ConsumeCatalogAPI() {

    useEffect(()=>{
        //use axios here to call API
        axios.get("http://localhost:8888/catalog/all")
        //if response comes back -> .then() will be executed
            .then((response)=>{
                console.log(response)
            })
        //if error comes back -> .catch() will be executed    
            .catch((error)=>{
                console.log(error)
            })
    },[])


    return ( 
        <div>
            <h1>I will consume catalog API</h1>
        </div>
     );
   
}

export default ConsumeCatalogAPI;