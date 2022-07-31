import * as ACTION_TYPES from "../actions/action_types";

export const initialState = {
    gameStatus: null,
    tries: 0,
    timesLost: 0,
};

export const reducer = (state, action) => {
    switch (action.type) {
        case ACTION_TYPES.START:
            return {
                ...state,
                gameStatus: "playing",
            };
        case ACTION_TYPES.TRY:
            return {
                ...state,
                tries: state.tries + 1,
            };
        case ACTION_TYPES.LOST:
            return {
                ...state,
                gameStatus: "game_over",
                timesLost: state.timesLost + 1,
            };
        case ACTION_TYPES.NEW:
            return initialState;
        default:
            return state;
    }
};
