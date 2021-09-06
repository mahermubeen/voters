import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import addMemberModal from "./reducers/members";
import addForm from "../pages/surveys";
import {reducer} from "redux-form";


import { authApi } from "./../services/auth";
import { postApi } from "./../services/post";
import { electionApi } from "./../services/electionCenter";
import { pageApi } from "./../services/page";
import { surveyApi } from "./../services/survey";
import { votingApi } from "./../services/votingReport";

var formReducer = reducer;

export const store = configureStore({
  reducer: {
    form: formReducer,
    addMemberModal: addMemberModal,
    [authApi.reducerPath]: authApi.reducer,
    [postApi.reducerPath]: postApi.reducer,
    [electionApi.reducerPath]: electionApi.reducer,
    [pageApi.reducerPath]: pageApi.reducer,
    [surveyApi.reducerPath]: surveyApi.reducer,
    [votingApi.reducerPath]: votingApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      postApi.middleware,
      electionApi.middleware,
      pageApi.middleware,
      surveyApi.middleware,
      votingApi.middleware
    ),
});

setupListeners(store.dispatch);
