import React, { useState, useEffect } from 'react';
import './cardProduct.scss';

export default function CardProduct() {
    const [product, setProduct] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchProducts = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) {
                throw new Error('Məlumatları çəkə bilmədik!');
            }
            const data = await response.json();
            setProduct(data);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const addToCard = (product) => {
        const exitingCard = JSON.parse(localStorage.getItem('card')) || [];
        const productExiting = exitingCard.find((item) => item.id === product.id);

        let updatedCard;
        if (productExiting) {
            updatedCard == exitingCard.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
        }
        else{
            updatedCard = [ ...exitingCard, { ...product, quantity: 1}]
        }
        localStorage.setItem('card', JSON.stringify(updatedCard))

        updateCard(updatedCard.length);
        };
    

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            {loading && <p>Yüklənir...</p>}
            {error && <p>{error}</p>}
            <div className="productCard">
                {product.map((product) => (
                    <div className="card-item" key={product.id}>
                        <div className="card-item-img">
                            <img src={product.image} alt={product.title} />
                        </div>
                        <h5>{product.title.substring(0, 20)}...</h5>
                        <p>{product.description.substring(0, 60)}...</p>
                        <hr />
                        <p>${product.price}</p>
                        <hr />
                        <div className="card-item-btn">
                            <button>Buy Now</button>
                            <button onClick={() => addToCart(product)}>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
