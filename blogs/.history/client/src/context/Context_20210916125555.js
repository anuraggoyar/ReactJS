import { Children, createContext } from "react";

const INITIAL_STATE = {
    user : null,
    isFetching : false,
    error : false,
};

export const Context = createContext(INIIAL_STATE);

export const ContextProvider = (Children) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);
    return <Context.Provider value={{ 
        user : state.user,
        isFetching : state.isFetching,
        error : user.error
    }}>
        {Children}
    </Context.Provider>
}