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
import { crudBureauDouane } from "./rtk/rtkBureauDouane";
import { crudArticle } from "./rtk/rtkArticle";
import { crudRegimeDouanier } from "./rtk/rtkRegimeDouanier";
import { crudRawMaterial } from "./rtk/rtkRawMaterial";
import { crudDeclarant } from "./rtk/rtkDeclarant";
import { crudIncoterm } from "./rtk/rtkIncoterm";
import { crudPayementMode } from "./rtk/rtkPayementMode";
import { crudUnitMeasure } from "./rtk/rtkUnitMeasure";

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
    [crudArticle.reducerPath]: crudArticle.reducer,
    [crudBureauDouane.reducerPath]: crudBureauDouane.reducer,
    [crudRegimeDouanier.reducerPath]: crudRegimeDouanier.reducer,
    [crudRawMaterial.reducerPath]: crudRawMaterial.reducer,
    [crudDeclarant.reducerPath]: crudDeclarant.reducer,
    [crudIncoterm.reducerPath]: crudIncoterm.reducer,
    [crudPayementMode.reducerPath]: crudPayementMode.reducer,
    [crudUnitMeasure.reducerPath]: crudUnitMeasure.reducer,

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
      }).concat([crudApi.middleware, offlineMiddleware]).concat([crudArticle.middleware, offlineMiddleware]).concat([crudBureauDouane.middleware, offlineMiddleware]).concat([crudDeclarant.middleware, offlineMiddleware]).concat([crudIncoterm.middleware, offlineMiddleware]).concat([crudIncoterm.middleware, offlineMiddleware]).concat([crudPayementMode.middleware, offlineMiddleware]).concat([crudRawMaterial.middleware, offlineMiddleware]).concat([crudRegimeDouanier.middleware, offlineMiddleware]).concat([crudUnitMeasure.middleware, offlineMiddleware]),
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
