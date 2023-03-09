import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { api, fetchErrorHandler } from "app/api";
import { appModel } from "entities/app";
import { authModel } from "entities/auth";

const reducers = combineReducers({
  app: appModel.reducer,
  auth: authModel.reducer,
  [api.reducerPath]: api.reducer,
});

const persistConfig = {
  key: "root", storage, blacklist: ["api"], version: 1,
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(api.middleware, fetchErrorHandler),
});

export default store;
