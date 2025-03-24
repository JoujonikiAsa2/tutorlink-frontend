import { RootState } from "@/redux/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TUser = {
    name:string,
    userId: string,
    email: string,
    role: string,
    iat: number,
    exp: number
  }

type TInitialState = {
    token: string | null,
    user: Record<string, unknown> | null
}

const initialState:TInitialState = {
    token:null,
    user:null
}
const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setUser: (state,action: PayloadAction<TInitialState>) => {
            console.log(state)
            state.token = action.payload.token
            state.user = action.payload.user
        },
        logout: (state) => {
            state.token = null;
            state.user = null;
          },
    }
})

export const {setUser, logout} = authSlice.actions
export default authSlice.reducer;
export const selectCurrentToken = (state: RootState) => state.auth.token
export const selectCurrentUser = (state: RootState) => state.auth.user