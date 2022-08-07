import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/products/productSlice";
import cartReducer from "../features/cart/cartSlice";
import pricingReducer from '../features/pricingSummary/pricingSlice'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    pricing: pricingReducer,
  },
});
