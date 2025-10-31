import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';

// Load cart from localStorage
function loadCart() {
    try {
        const saved = localStorage.getItem('aurora_cart');
        if (!saved) return undefined;
        const parsed = JSON.parse(saved);
        return {
            cart: {
                isCartOpen: false,
                cartItems: parsed.cartItems || [],
            },
        };
    } catch {
        return undefined;
    }
}

const store = configureStore({
    reducer: {
        cart: cartReducer
    },
    preloadedState: loadCart(),
});

// Persist cart (entire slice) to localStorage whenever it changes
store.subscribe(() => {
    try {
        const { cart } = store.getState();
        localStorage.setItem('aurora_cart', JSON.stringify({ cartItems: cart.cartItems }));
    } catch {
        // ignore write errors (e.g., privacy mode)
    }
});

export default store;