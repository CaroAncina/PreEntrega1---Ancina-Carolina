import { createContext, useState, useContext } from "react";

export const CartContext = createContext(null);

export const ShoppingCartContext = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Agregar un producto al carrito
    const addItem = (item, quantity) => {
        // Comprobamos si el producto ya está en el carrito
        const existingItem = cart.find((cartItem) => cartItem.id === item.id);

        if (existingItem) {
            // Si el producto ya está en el carrito, actualizamos su cantidad
            const updatedCart = cart.map((cartItem) => {
                if (cartItem.id === item.id) {
                    return { ...cartItem, quantity: cartItem.quantity + quantity };
                }
                return cartItem;
            });
            setCart(updatedCart);
        } else {
            // Si el producto no está en el carrito, lo agregamos
            setCart([...cart, { ...item, quantity }]);
        }
    };

    // Eliminar un producto del carrito por ID
    const removeItem = (itemId) => {
        const updatedCart = cart.map((cartItem) => {
            if (cartItem.id === itemId) {
                if (cartItem.quantity > 1) {
                    // Si la cantidad es mayor que 1, se reduce la cantidad
                    return { ...cartItem, quantity: cartItem.quantity - 1 };
                } else {
                    // Si la cantidad es 1, se elimina el producto
                    return null;
                }
            }
            return cartItem;
        });

        // Filtramos los elementos nulos y actualizamos el carrito
        setCart(updatedCart.filter((item) => item));
    };

    // Verificar si un producto está en el carrito
    const isInCart = (id) => {
        return cart.some((cartItem) => cartItem.id === id);
    };

    // Eliminar todos los productos del carrito
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
