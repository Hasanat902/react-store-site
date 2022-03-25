import React from 'react';

const Product = (props) => {
    const {title, image, price} = props.product;
    return (
        <div className='col-md-4'>
            <div className='card p-2 m-3 border'>
                <img className='w-50 m-auto img-fluid' src={image} alt="" />
                <h4>{title.slice(0,10)}</h4>
                <h5>Price: ${price}</h5>
                <button className='btn btn-success'>Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;