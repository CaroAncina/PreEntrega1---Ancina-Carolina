import { createContext, useState, useContext } from "react";

export const CartContext = createContext(null);

export const ShoppingCartContext = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        const existingItem = cart.find((cartItem) => cartItem.id === item.id);

        if (existingItem) {
            const updatedCart = cart.map((cartItem) => {
                if (cartItem.id === item.id) {
                    return { ...cartItem, quantity: cartItem.quantity + quantity };
                }
                return cartItem;
            });
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...item, quantity }]);
        }
    };

    const removeItem = (itemId) => {
        const updatedCart = cart.map((cartItem) => {
            if (cartItem.id === itemId) {
                if (cartItem.quantity > 1) {
                    return { ...cartItem, quantity: cartItem.quantity - 1 };
                } else {
                    return null;
                }
            }
            return cartItem;
        });

        setCart(updatedCart.filter((item) => item));
    };

    const isInCart = (id) => {
        return cart.some((cartItem) => cartItem.id === id);
    };

    const clear = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, isInCart, clear }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
