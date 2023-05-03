import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
import counterReducer from "../features/counter/counterSlice"
import { appReducer } from "./app.slice"
import { authReducer } from "features/auth/auth.slice"

export const store = configureStore({
  reducer: {
    app: appReducer,
    counter: counterReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>