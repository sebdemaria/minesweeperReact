import { useLocaleStorage } from "@hooks/useLocaleStorage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import HomeDumb from "./HomeDumb";

export const Home = () => {
    const router = useRouter();

    const [setItem, getItem, removeItem] = useLocaleStorage();

    const [playersName, setPlayersName] = useState("");

    const handleInputChange = ({ target }) => {
        setPlayersName(target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push("/play");
    };

    useEffect(() => {
        removeItem("playerName");
        const scores = getItem("scores");
        return () => {
            setItem("playerName", playersName);

            if (scores.length > 0) {
                return;
            } else {
                setItem("scores", JSON.stringify([]), false);
            }
        };
    }, [playersName, removeItem, setItem, getItem]);

    return (
        <HomeDumb
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
        />
    );
};
