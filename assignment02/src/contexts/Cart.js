import { createContext, useState } from "react";

export const items = [
  {
    id: 1,
    name: "Watch",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=2899&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Sunglasses",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&q=80&w=2960&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Stool",
    price: 15.99,
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Pepsi",
    price: 1.99,
    image:
      "https://images.unsplash.com/photo-1553456558-aff63285bdd1?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "House Plant",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80&w=2944&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const CartContext = createContext({
  cart: [],
  name: "",
  streetAddress: "",
  city: "",
  state: "",
  zip: "",
  cardNumber: "",
  addToCart: (item) => {},
  removeFromCart: (item) => {},
  setName: (name) => {},
  setStreetAddress: (streetAddress) => {},
  setCity: (city) => {},
  setState: (state) => {},
  setZip: (zip) => {},
  setCardNumber: (cardNumber) => {},
  total: 0,
  subtotal: 0,
  taxes: 0,
  clearCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [name, setName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [total, setTotal] = useState(0);
  const [subtotal, setSubtotal] = useState(0);

  const taxes = 3;

  const clearCart = () => {
    setCart([]);
    setSubtotal(0);
    setTotal(0);
  };

  const addToCart = (item) => {
    const newCart = [...cart, item];

    const newSubtotal = newCart.reduce((acc, item) => acc + item.price, 0);
    setSubtotal(newSubtotal);
    setTotal(newSubtotal + taxes);

    setCart(newCart);
  };

  const removeFromCart = (item) => {
    setCart((prevCart) => {
      const index = prevCart.lastIndexOf(item);

      if (index < 0) return prevCart;

      const newCart = [
        ...prevCart.slice(0, index),
        ...prevCart.slice(index + 1, prevCart.length),
      ];

      const newSubtotal = newCart.reduce((acc, item) => acc + item.price, 0);
      setSubtotal(newSubtotal);
      setTotal(newSubtotal + taxes);

      return newCart;
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        name,
        setName,
        streetAddress,
        setStreetAddress,
        city,
        setCity,
        state,
        setState,
        zip,
        setZip,
        cardNumber,
        setCardNumber,
        total,
        subtotal,
        taxes,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
