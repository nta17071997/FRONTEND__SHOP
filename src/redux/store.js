import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './Slice/productsSlice';
import cartReducer from './Slice/cartSlice';
import usersReducer from './Slice/usersSlice';
import authReducer from './Slice/authSlice';


const store = configureStore({
  reducer: {
    products: productsReducer,
    users:usersReducer,
    cart: cartReducer,
    auth: authReducer,
  },
});

export default store;
