import { Children, createContext } from "react";

const INIIAL_STATE = {
    user : null,
    isFetching : false,
    error : false,
};

export const Context = createContext(INIIAL_STATE);

export const ContextProvider = (Children) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE, init)
}