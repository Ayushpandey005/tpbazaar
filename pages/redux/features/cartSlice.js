import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: []
}

// card slice 
const cartSlice = createSlice({
    name: 'cartslice',
    initialState,
    reducers:{
        //add to cart
        addToCart:(state, action) => {
            // console.log("action",action)
            // state.carts = [...state.carts, action.payload]
            const IteamIndex = state.carts.findIndex((iteam) => iteam.pid === action.payload.pid);

            if (IteamIndex >= 0) {
                state.carts[IteamIndex].quantity += 1
            } else {
                const temp = { ...action.payload, quantity: 1 }
                state.carts = [...state.carts, temp]

            }
        },


        //remove particular item in cart
        removeToCart: (state,action) => {
            const data = state.carts.filter((ele)=> ele.pid !== action.payload)
            state.carts = data
        },


        //decreament the quantity of a particular item in cart
        decrementItem:(state, action) => {
            const IteamIndex_dec = state.carts.findIndex((iteam) => iteam.pid === action.payload.pid);

            if(state.carts[IteamIndex_dec].quantity >= 1){
                state.carts[IteamIndex_dec].quantity -= 1
            }
        },


        //remove all items in cart
        emptycartIteam:(state,action)=>{
            state.carts = []
        }
    }
})

export const {addToCart,removeToCart,decrementItem ,emptycartIteam} = cartSlice.actions;

export default cartSlice.reducer;