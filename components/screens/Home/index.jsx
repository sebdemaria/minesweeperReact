import { useLocaleStorage } from "@hooks/useLocaleStorage";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import HomeDumb from "./HomeDumb";

export const Home = () => {
    const router = useRouter();

    const [setItem, , removeItem] = useLocaleStorage();

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

        return () => {
            setItem("playerName", playersName);
        };
    }, [playersName, removeItem, setItem]);

    return (
        <HomeDumb
            handleSubmit={handleSubmit}
            handleInputChange={handleInputChange}
        />
    );
};
