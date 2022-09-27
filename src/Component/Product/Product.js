import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import'./Product.css'
const Product = (props) => {
    // console.log(props.product);
    const {name, img, seller, price, ratings} = props.product;
    const {handleAddToCart} =props;
    // onsole.log(props);
    return (
        <div className='product'>
            <img src={img} alt="" /> 
            <div>
                <div className='product-content'>
                <h2>Name: {name}</h2>
                <p>Price: {price}</p>
                <p>Seller: {seller}</p>
                <p>Ratings: {ratings}</p>
                </div>
                <div>
                    <button onClick={()=>handleAddToCart(props.product)}>Add to cart</button>
                    {/* <FontAwesomeIcon icon={ faEnvelope }></FontAwesomeIcon> */}
                </div>
            </div>
            
        </div>
    );
};

export default Product;