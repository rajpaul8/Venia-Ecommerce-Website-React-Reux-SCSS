import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";

// Get products and product from local storage
const products = JSON.parse(localStorage.getItem("products"));
const product = JSON.parse(localStorage.getItem("product"));

const initialState = {
  products: products
    ? products
    : [
        {
          id: null,
          title: "",
          price: null,
          description: "",
          category: "",
          image: "",
          rating: {
            rate: null,
            count: null,
          },
        },
      ],
  product: product
    ? product
    : {
        id: null,
        title: "",
        price: null,
        description: "",
        category: "",
        image: "",
        rating: {
          rate: null,
          count: null,
        },
      },
  isError: false,
  isSuccess: false,
  isLoading: true,
  message: "",
};

// Get all products:
export const getProducts = createAsyncThunk(
  "products/get",
  async (_, thunkAPI) => {
    try {
      return await productService.getProducts();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get Single Product
export const getProduct = createAsyncThunk("products/getProduct", async(productID, thunkAPI)=>{
  try {
    return await productService.getProduct(productID);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});


export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state)=>{
      state.isLoading = true;
    }).addCase(getProducts.fulfilled, (state, action)=>{
      state.isLoading = false;
      state.isSuccess = true;
      state.products = action.payload;
    }).addCase(getProducts.rejected,(state, action)=>{
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
    }).addCase(getProduct.pending, (state)=>{
      state.isLoading = true;
    }).addCase(getProduct.fulfilled, (state, action)=>{
      state.isLoading = false;
      state.isSuccess = true;
      state.product = action.payload;
    }).addCase(getProduct.rejected,(state, action)=>{
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    })
  },
});

export const { reset } = productSlice.actions;

export default productSlice.reducer;
