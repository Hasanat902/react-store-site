import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    console.log(products);

    useEffect( () => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div className='row'>
            <div className="col-md-10 product-details">
                {
                    products.map(product => <Product key={product.id}></Product>)
                }
            </div>
            <div className="col-md-2 product-cart">
                <h3>Order Summary</h3>
            </div>
        </div>
    );
};

export default Products;