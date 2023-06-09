import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import counterReducer from "../features/counter/counterSlice"
import { appReducer } from "./app.slice"
import { authReducer } from "features/auth/auth.slice"
import { packsReducer } from "features/packs/packs.slice"
import { cardsReducer } from "features/cards/cards.slice"
import { modalReducer } from "features/modals/modal.slice"
import { usersApi } from "features/users/service/users.api"
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import { cardsSliceApi } from "features/cards/services/cards.api"

export const store = configureStore({
  reducer: {
    app: appReducer,
    counter: counterReducer,
    auth: authReducer,
    packs: packsReducer,
    cards: cardsReducer,
    modal: modalReducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [cardsSliceApi.reducerPath]: cardsSliceApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware, cardsSliceApi.middleware),
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: false,
  //   })
  //     .prepend()
  //     .concat(usersApi.middleware, cardsSliceApi.middleware),
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
