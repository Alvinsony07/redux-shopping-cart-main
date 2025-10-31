import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart, removeItem, incrementItem, decrementItem, clearCart } from '../store/slices/cartSlice';


const Cart = () => {

    const { isCartOpen, cartItems } = useSelector((state) => state.cart);


    const dispatch = useDispatch();


    const handleCloseCart = useCallback((close) => {
        dispatch(toggleCart(close));
    }, [dispatch]);


    const handleRemove = (itemId) => {
        dispatch(removeItem(itemId));
    };


    const handleIncrement = (itemId) => {
        dispatch(incrementItem(itemId));
    };

    const handleDecrement = (itemId) => {
        dispatch(decrementItem(itemId));
    };

    const handleCheckout = () => {
        if (cartQuantity === 0) return;
        
        // Simulate checkout process
        alert(`Checkout successful! Total: ₹${cartTotal.toLocaleString()}\n\nThank you for your purchase!`);
        
        // Clear the cart after checkout
        dispatch(clearCart());
        handleCloseCart(false);
    };


    // disable the body-scroll when the Cart is open
    useEffect(() => {
        const docBody = document.body;

        isCartOpen ? (
            docBody.classList.add('overflow_hide')
        ) : (
            docBody.classList.remove('overflow_hide')
        );

    }, [isCartOpen]);


    // closing the Cart on clicking outside of it
    useEffect(() => {
        const outsideClose = (e) => {
            if (e.target.id === 'cart') {
                handleCloseCart(false);
            }
        };

        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                handleCloseCart(false);
            }
        };

        if (isCartOpen) {
            window.addEventListener('click', outsideClose);
            window.addEventListener('keydown', handleEscape);
        }

        return () => {
            window.removeEventListener('click', outsideClose);
            window.removeEventListener('keydown', handleEscape);
        };
    }, [isCartOpen, handleCloseCart]);


    const cartQuantity = cartItems.length;

    const cartTotal = cartItems.map(item => item.price * item.quantity).reduce((prevValue, currValue) => prevValue + currValue, 0);


    return (
        <>
            {
                isCartOpen && (
                    <div id="cart">
                        <div className="cart_content">
                            <div className="cart_head">
                                <h2>Cart <small>({cartQuantity})</small></h2>
                                <div
                                    title="Close"
                                    className="close_btn"
                                    onClick={() => handleCloseCart(false)}
                                >
                                    <span>&times;</span>
                                </div>
                            </div>

                            <div className="cart_body">
                                {
                                    cartQuantity === 0 ? (
                                        <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                                            <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>🛒 Cart is empty</h2>
                                            <p style={{ color: 'var(--muted)', marginBottom: '1.5rem' }}>
                                                Add some products to get started!
                                            </p>
                                            <button
                                                className="btn-gradient"
                                                style={{ padding: '0.7rem 1.5rem', cursor: 'pointer' }}
                                                onClick={() => handleCloseCart(false)}
                                            >
                                                Continue Shopping
                                            </button>
                                        </div>
                                    ) : (
                                        cartItems.map(item => {
                                            const { id, img, title, price, quantity } = item;
                                            const itemTotal = price * quantity;

                                            return (
                                                <div className="cart_items" key={id}>
                                                    <figure className="cart_items_img">
                                                        <img src={img} alt="product-img" />
                                                    </figure>

                                                    <div className="cart_items_info">
                                                        <h4>{title}</h4>
                                                        <h3 className="price">₹ {itemTotal.toLocaleString()}</h3>
                                                    </div>

                                                    <div className="cart_items_quantity">
                                                        <span onClick={() => handleDecrement(id)}>&#8722;</span>
                                                        <b>{quantity}</b>
                                                        <span onClick={() => handleIncrement(id)}>&#43;</span>
                                                    </div>

                                                    <div
                                                        title="Remove Item"
                                                        className="cart_items_delete"
                                                        onClick={() => handleRemove(id)}
                                                    >
                                                        <span>&times;</span>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    )
                                }
                            </div>

                            <div className="cart_foot">
                                <h3>
                                    <small>Total:</small>
                                    <b>₹ {cartTotal.toLocaleString()}</b>
                                </h3>

                                <button
                                    type="button"
                                    className="checkout_btn"
                                    disabled={cartQuantity === 0}
                                    onClick={handleCheckout}
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default Cart;