import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';



function ConsumeCatalogAPI() {

    const [catalogItems, updateCatalogItems] = useState([])
    const [name, updateName] = useState("")
    const [productCount, updateProductCount] = useState(0)


    useEffect(()=>{
        getCatalogList()
    },[])

    const getCatalogList = ()=>{
        //use axios here to call API
        axios.get("http://localhost:8888/catalog/all")
        //if response comes back -> .then() will be executed
            .then((response)=>{
                //console.log(response)
                console.log(catalogItems)
                console.log("before state update")
                console.log(response.data)
                updateCatalogItems(response.data)
                console.log("after state update")
                console.log(catalogItems)
            })
        //if error comes back -> .catch() will be executed    
            .catch((error)=>{
                console.log(error)
            })
    }

    const renderCatalogItems = ()=>{
        return catalogItems.map((item)=>{
            console.log("in map iteration")
            console.log(item)
            console.log(item.name)
            
            return (
                <li key={item._id}>
                    {item.name} @ {item.productCount}
                </li>
            )
        })
    }

    const captureName =(event)=>{
        console.log(event)
        console.log(event.target.value)
        updateName(event.target.value)
    }

    const captureCount = (event)=>{
        console.log(event.target.value)
        updateProductCount(event.target.value)
    }

    const addNewCategory = ()=>{
        let newCategory = {
            "name": name,
            "productCount":productCount
        }
        console.log(newCategory)
        //call POST api (created/exposed from express) to add newCategory to MongoDB
        axios.post("http://localhost:8888/catalog/add", newCategory)
            .then((response)=>{
                //console.log(response)
                console.log(response.data)
                getCatalogList()
            })
            .catch((error)=>{
                console.log(error)
            })

    }

    return ( 
        <div>
            <h1>I will consume catalog API</h1>
            {renderCatalogItems()}
            <br />
            <hr />
            <div>
                Category name: <input type="text" onChange={captureName} />
                <br />
                Product Count: <input type="number" onChange={captureCount}/>
                <br />
                <button onClick={addNewCategory}>Add</button>
            </div>
        </div>
     );
   
}

export default ConsumeCatalogAPI;