import React, { useEffect, useState } from 'react';
import { addToDb, getStorCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';

import './Shop.css'

const Shop = () => {
    const [products, setPoducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setPoducts(data))
    }, [])

    useEffect(()=> {
        const storedCart = getStorCart();
        const saveCard = [];
        for(const id in storedCart){
            const addAllproduct = products.find(product=> product.id === id);
            if(addAllproduct){
                const quantity = storedCart[id];
                addAllproduct.quantity = quantity;
                saveCard.push(addAllproduct);
            }
        }
        setCart(saveCard);
    },[products])


    const heandelAdd = (product) => {
        // console.log(product);
        console.log(product);
        const newCard = [...cart, product]
        setCart(newCard);
        addToDb(product.id)
    }

    return (
        <div className='shop-conatainer'>
            <div className="product-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        heandelAdd={heandelAdd}
                    ></Product>)
                }
            </div>
            <div className="card-container">
                <Cart cart={cart}> </Cart>
               
            </div>
        </div>
    );
};

export default Shop;