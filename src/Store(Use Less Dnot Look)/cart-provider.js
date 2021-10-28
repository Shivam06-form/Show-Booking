
import { useReducer} from 'react';
// import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';

import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0
};


const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
 
    const updatedTotalAmount =
    state.totalAmount + action.item.Price * action.item.amount;
    
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;
      localStorage.setItem('items',JSON.stringify(updatedItems))
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
      localStorage.setItem('items',JSON.stringify(updatedItems))
    } 
    else {
      updatedItems = state.items.concat(action.item);
      localStorage.setItem('items',JSON.stringify(updatedItems))
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }
  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex]
    const updatedTotalAmount = state.totalAmount - existingItem.Price
    let updatedItems;
    localStorage.setItem('items',JSON.stringify(updatedItems))
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id)
      localStorage.setItem('items',JSON.stringify(updatedItems))
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 }
      updatedItems = [...state.items]
      updatedItems[existingCartItemIndex] = updatedItem;
      localStorage.setItem('items',JSON.stringify(updatedItems))
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const removeItemFromCartHandler = (id,item) => {
    dispatchCartAction({ type: 'REMOVE', id: id,});
  };



  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;