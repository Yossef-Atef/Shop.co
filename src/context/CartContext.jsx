import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product, quantity, color, size) => {
        setCartItems(prevItems => {
            const existingItemIndex = prevItems.findIndex(
                item => item.id === product.id && item.selectedColor === color && item.selectedSize === size
            );

            if (existingItemIndex > -1) {
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex].quantity += quantity;
                return updatedItems;
            }

            return [...prevItems, {
                ...product,
                quantity,
                selectedColor: color,
                selectedSize: size
            }];
        });
    };

    const removeFromCart = (id, color, size) => {
        setCartItems(prevItems =>
            prevItems.filter(item => !(item.id === id && item.selectedColor === color && item.selectedSize === size))
        );
    };

    const updateQuantity = (id, color, size, delta) => {
        setCartItems(prevItems => {
            return prevItems.map(item => {
                if (item.id === id && item.selectedColor === color && item.selectedSize === size) {
                    const newQuantity = Math.max(1, item.quantity + delta);
                    return { ...item, quantity: newQuantity };
                }
                return item;
            });
        });
    };

    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const discountAmount = subtotal * 0.2; // Example 20% discount as shown in the image
    const deliveryFee = 15;
    const total = subtotal - discountAmount + deliveryFee;

    const value = {
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartCount,
        subtotal,
        discountAmount,
        deliveryFee,
        total
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};
