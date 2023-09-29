import { configureStore } from '@reduxjs/toolkit';
import Cartreducer from '../src/Fetures/Cart/CartSlice';
import Modalreducer from '../src/Fetures/Modal/ModalSlice';

export const store = configureStore({
  reducer: {
    cart: Cartreducer,
    modal: Modalreducer,
  },
});
