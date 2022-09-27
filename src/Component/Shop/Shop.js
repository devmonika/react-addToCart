import React, { useState } from 'react';
import { useEffect } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const[products, setProducts] = useState([]);
    const[cart, setCart] = useState([]);
// console.log(products);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data=> setProducts(data))
    },[])
    const handleAddToCart =(product) =>{
        // console.log(product);
        const newCart =[...cart, product];
        setCart(newCart);
    }
    return (
        <div className="shop-container">
           <div className="products-container">
            {
                products.map((product)=><Product key={product.id}
                product={product} handleAddToCart={handleAddToCart}></Product>)
            }
           </div>
           <div className="cart-container">
            this is cart
            <p>seclected cart: {cart.length}</p>
            </div> 
        </div>
    );
};

export default Shop;