export interface User{
    user:string,
    password:string, 
}

export type Action={
    type:string,
    payload:object
}

export type InitialState={
    user:object
    video:Array
}

export type Data={
    id:number
    genres:Array
    name:string
    description_raw:string
}

// export type AppDispatch = typeof store.dispatch;
// export type ReduxState = ReturnType<typeof rootReducer>;
// export type TypedDispatch = ThunkDispatch<ReduxState, any, AnyAction>;
// export type TypedThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   ReduxState,
//   unknown,
//   AnyAction
// >;
// export const useTypedDispatch = () => useDispatch<TypedDispatch>();
// export const useTypedSelector: TypedUseSelectorHook<ReduxState> = useSelector;