import React, { createContext, useState, FC } from 'react';

export type CartItemType = {
  _id: string;
  name: string;
  category: string;
  description: string;
  images: Array<string>;
  price: number;
  amount: number;
};

interface HandleCartContext {
  cartItems: CartItemType[];
  setCartItems: (items: CartItemType[]) => void;
  getTotalItems: (items: CartItemType[]) => number;
  handleAddToCart: (item: CartItemType) => void;
  handleRemoveFromCart: (id: string) => void;
}

const defaultState = {
  cartItems: [],
  setCartItems: () => {},
  getTotalItems: () => 0,
  handleAddToCart: () => {},
  handleRemoveFromCart: () => {},
};

export const CartContext = createContext<HandleCartContext>(defaultState);

export const CartProvider: FC = ({ children }) => {
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      //1. is item already added in the cart?
      const isItemInCart = prev.find(item => item._id === clickedItem._id);

      if (isItemInCart) {
        return prev.map(item =>
          item._id === clickedItem._id
            ? { ...item, amount: item.amount + 1 }
            : item,
        );
      }
      //First time item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(prev =>
      prev.reduce((ack, item) => {
        if (item._id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, [] as CartItemType[]),
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        getTotalItems,
        handleAddToCart,
        handleRemoveFromCart,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
