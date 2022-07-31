import { GameContextProvider } from "@context/GameContext";
import { useLocaleStorage } from "@hooks/useLocaleStorage";
import { useEffect, useState } from "react";

import { PlayDumb } from "./PlayDumb";

export const Play = ({ cols, rows }) => {
    const [, getItem] = useLocaleStorage();

    const [playersName, setPlayersName] = useState("");

    useEffect(() => {
        setPlayersName(getItem("playerName"));
    }, [getItem]);

    return (
        <GameContextProvider>
            <PlayDumb playersName={playersName} cols={cols} rows={rows} />
        </GameContextProvider>
    );
};
