import reducer from "../reducer/reducer";
import {legacy_createStore as createStore, applyMiddleware, AnyAction } from 'redux'
import thunk,  { ThunkAction, ThunkDispatch } from "redux-thunk"

export const store = createStore(
    reducer, applyMiddleware(thunk)
)

