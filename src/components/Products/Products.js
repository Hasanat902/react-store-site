import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    const [cart, setCart] = useState([]);

    useEffect( () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='row'>
            <div className="col-md-10 product-details">
                <div className='row container'>
                    {
                        products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                    }   
                </div>
            </div>
            <div className="col-md-2 product-cart">
                <h3>Order Summary</h3>
                <p>Selected items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Products;