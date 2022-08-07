import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import pricingService from './pricingService';

const pricingSummary = JSON.parse(localStorage.getItem("pricingSummary"));

const initialState = {
    pricingSummary: pricingSummary? pricingSummary : {},
    isLoading: false,
    isSuccess:false,
    isError: false,
    message: ''
}

export const updatePricing = createAsyncThunk('pricing/update', async (pricingSummary, thunkAPI)=>{
    try {
      return pricingService.updatePricing(pricingSummary)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
})



const pricingSlice = createSlice({
    name: "pricingSummary",
    initialState,
    reducers:{
        reset: state => initialState
    },extraReducers(builder){
      builder.addCase(updatePricing.pending,(state)=>{
        state.isLoading =true;
      }).addCase(updatePricing.fulfilled, (state, action)=>{
        state.isLoading =false;
        state.isSuccess = true;
        state.pricingSummary = action.payload;
        state.isError =false;
      }).addCase(updatePricing.rejected, (state, action)=>{
        state.isLoading =false;
        state.isError =true;
        state.message = action.payload
      })
    }
})

export const { reset } = pricingSlice.actions;
export default pricingSlice.reducer;