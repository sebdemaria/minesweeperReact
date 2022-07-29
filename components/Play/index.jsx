import { useLocaleStorage } from "@hooks/useLocaleStorage";
import { useEffect, useState } from "react";

import PlayDumb from "./PlayDumb";

const index = ({ boardX, boardY }) => {
    const [, getItem] = useLocaleStorage();

    const [playersName, setPlayersName] = useState("");

    useEffect(() => {
        setPlayersName(getItem("playerName"));
    }, []);

    return (
        <PlayDumb playersName={playersName} boardX={boardX} boardY={boardY} />
    );
};

export default index;
