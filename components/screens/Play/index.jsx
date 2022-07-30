import { useLocaleStorage } from "@hooks/useLocaleStorage";
import { useEffect, useReducer, useState } from "react";

import { PlayDumb } from "./PlayDumb";

export const Play = ({ cols, rows }) => {
    const [, getItem] = useLocaleStorage();

    const [playersName, setPlayersName] = useState("");

    const initialState = {
        gameStatus: null,
        tries: 0,
        timesLost: 0,
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case "START":
                return {
                    gameStatus: "playing",
                    ...state,
                };
            case "TRY":
                return {
                    ...state,
                    tries: state.tries + 1,
                };
            case "LOST":
                return {
                    gameStatus: "game_over",
                    timesLost: state.timesLost + 1,
                    ...state,
                };
            case "NEW":
                return initialState;
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        setPlayersName(getItem("playerName"));
    }, [getItem]);

    return <PlayDumb playersName={playersName} cols={cols} rows={rows} />;
};
