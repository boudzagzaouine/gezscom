import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
  StoreEnhancer,
} from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createOffline } from "@redux-offline/redux-offline";
import offlineConfig from "@redux-offline/redux-offline/lib/defaults";
import customOfflineConfig from "./offline";
import { crudApi } from "./rtk";

import counterReducer from "features/counter/counterSlice";
import { crudClient } from "./rtk/RtkClient";

const {
  middleware: offlineMiddleware,
  enhanceReducer: offlineEnhanceReducer,
  enhanceStore: offlineEnhanceStore,
} = createOffline({
  ...offlineConfig,
  persist: undefined,
  ...customOfflineConfig,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

export function makeStore() {
  //   return configureStore({
  //     reducer: { counter: counterReducer },
  //   });
  const rootReducer = combineReducers({
    counter: counterReducer,
    [crudApi.reducerPath]: crudApi.reducer,
    [crudClient.reducerPath]: crudClient.reducer,

  });
  const persistedReducer = persistReducer(
    persistConfig,
    offlineEnhanceReducer(rootReducer)
  );
  const store = configureStore({
    reducer: persistedReducer,
    enhancers: [offlineEnhanceStore as StoreEnhancer],
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat([crudApi.middleware, offlineMiddleware]).concat([crudClient.middleware, offlineMiddleware]),
  });
  return store;
}

const store = makeStore();
export const persistor = persistStore(store);

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>;

export default store;
