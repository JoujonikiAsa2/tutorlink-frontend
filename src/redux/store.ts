import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";

export const makeStore = () => {
  return configureStore({
    reducer: { [baseApi.reducerPath]: baseApi.reducer },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]> & {
    auth: {
      token: string;
      user: Record<string, unknown> | null;
    };
  };

// export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
