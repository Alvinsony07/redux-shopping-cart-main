import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleCart } from '../store/slices/cartSlice';


const Header = () => {

    const { cartItems } = useSelector((state) => state.cart);

    const dispatch = useDispatch();


    const handleOpenCart = (open) => {
        dispatch(toggleCart(open));
    };


    const cartQuantity = cartItems.length;

    // Theme toggle (light/dark)
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') || 'light';
        }
        return 'light';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

    // Badge bump animation on cart update
    const [isBumping, setIsBumping] = useState(false);

    useEffect(() => {
        if (cartQuantity === 0) return;
        setIsBumping(true);
        const timer = setTimeout(() => setIsBumping(false), 300);
        return () => clearTimeout(timer);
    }, [cartQuantity]);


    return (
        <>
            <header id="header">
                <div className="container">
                    <div className="navbar">
                        <h4 className="brand">Aurora Cart</h4>
                        <div className="nav_menu">
                            <button
                                type="button"
                                className="theme_toggle"
                                title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
                                onClick={toggleTheme}
                            >
                                {theme === 'light' ? '🌙' : '☀️'}
                            </button>
                            <div
                                title="Cart"
                                className="cart_icon"
                                onClick={() => handleOpenCart(true)}
                            >
                                <img src="/images/bag-icon.svg" alt="bag-icon" />
                                <span
                                    aria-label="Cart items count"
                                    data-testid="cart-badge"
                                    className={`badge ${isBumping ? 'bump' : ''}`}
                                >
                                    {cartQuantity}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;