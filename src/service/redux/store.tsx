import { configureStore } from '@reduxjs/toolkit'
import { crudApi } from './CrudApi'
export const store = configureStore({
    reducer: {
        [crudApi.reducerPath]: crudApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(crudApi.middleware)
    },
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
