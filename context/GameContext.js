import { initialState, reducer } from "@store/reducers/gameReducer";
import { createContext, useContext, useReducer } from "react";

const GameContext = createContext();

const useGameContext = () => {
    return useContext(GameContext);
};

const GameContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <GameContext.Provider value={{ ...state, dispatch }}>
            {children}
        </GameContext.Provider>
    );
};

export { GameContextProvider, useGameContext };
