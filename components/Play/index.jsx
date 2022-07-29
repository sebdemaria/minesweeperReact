import { useLocaleStorage } from "@hooks/useLocaleStorage";
import { useEffect, useState } from "react";

import PlayDumb from "./PlayDumb";

const index = () => {
    const [, getItem] = useLocaleStorage();

    const [playersName, setPlayersName] = useState("");

    useEffect(() => {
        setPlayersName(getItem("playerName"));
    }, []);

    return <PlayDumb playersName={playersName} />;
};

export default index;
