import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

// firestoreプロパティにfirestoreデータベースが同期される
// firestoreReducerでfirestoreとstateを同期
// firebaseReducerでAuthenticationのステータスをstateと動機
const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
