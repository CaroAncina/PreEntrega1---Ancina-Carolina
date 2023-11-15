import { createContext, useState, useContext, useEffect } from "react";

export const CartContext = createContext(null);

export const ShoppingCartContext = ({ children }) => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
          setCart(JSON.parse(storedCart));
        }
      }, []);


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
          localStorage.setItem('cart', JSON.stringify(updatedCart));
        } else {
          const updatedCart = [...cart, { ...item, quantity }];
          setCart(updatedCart);
          localStorage.setItem('cart', JSON.stringify(updatedCart));
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
        localStorage.removeItem('cart');
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
