import { crudVille } from './rtk/rtkVille';
import { crudType } from './rtk/rtkType';
import { crudTransporteur } from './rtk/rtkTransporteur';
import { crudRole } from './rtk/rtkRole';
import { crudPays } from './rtk/rtkPays';
import { crudDocument } from './rtk/rtkDocument';
import { crudDevise } from './rtk/rtkDevise';
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
<<<<<<< HEAD
import { crudBureauDouane } from "./rtk/rtkBureauDouane";
import { crudArticle } from "./rtk/rtkArticle";
import { crudRegimeDouanier } from "./rtk/rtkRegimeDouanier";
import { crudRawMaterial } from "./rtk/rtkRawMaterial";
import { crudDeclarant } from "./rtk/rtkDeclarant";
import { crudIncoterm } from "./rtk/rtkIncoterm";
import { crudPayementMode } from "./rtk/rtkPayementMode";
import { crudUnitMeasure } from "./rtk/rtkUnitMeasure";
=======
import { crudClient } from "./rtk/RtkClient";
>>>>>>> develop

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
<<<<<<< HEAD
<<<<<<< HEAD
    [crudArticle.reducerPath]: crudArticle.reducer,
    [crudBureauDouane.reducerPath]: crudBureauDouane.reducer,
    [crudRegimeDouanier.reducerPath]: crudRegimeDouanier.reducer,
    [crudRawMaterial.reducerPath]: crudRawMaterial.reducer,
    [crudDeclarant.reducerPath]: crudDeclarant.reducer,
    [crudIncoterm.reducerPath]: crudIncoterm.reducer,
    [crudPayementMode.reducerPath]: crudPayementMode.reducer,
    [crudUnitMeasure.reducerPath]: crudUnitMeasure.reducer,
=======
    [crudClient.reducerPath]: crudClient.reducer,
>>>>>>> develop

=======
    [crudDevise.reducerPath]: crudDevise.reducer,
    [crudDocument.reducerPath]: crudDocument.reducer,
    [crudPays.reducerPath]: crudPays.reducer,
    [crudRole.reducerPath]: crudRole.reducer,
    [crudTransporteur.reducerPath]: crudTransporteur.reducer,
    [crudType.reducerPath]: crudType.reducer,
    [crudVille.reducerPath]: crudVille.reducer,
>>>>>>> v_ismail
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
<<<<<<< HEAD
      }).concat([crudApi.middleware, offlineMiddleware]).concat([crudArticle.middleware, offlineMiddleware]).concat([crudBureauDouane.middleware, offlineMiddleware]).concat([crudDeclarant.middleware, offlineMiddleware]).concat([crudIncoterm.middleware, offlineMiddleware]).concat([crudIncoterm.middleware, offlineMiddleware]).concat([crudPayementMode.middleware, offlineMiddleware]).concat([crudRawMaterial.middleware, offlineMiddleware]).concat([crudRegimeDouanier.middleware, offlineMiddleware]).concat([crudUnitMeasure.middleware, offlineMiddleware]),
=======
      }).concat([crudApi.middleware, offlineMiddleware]).concat([crudClient.middleware, offlineMiddleware]),
>>>>>>> develop
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
