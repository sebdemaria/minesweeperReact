import { useLocaleStorage } from "@hooks/useLocaleStorage";
import { useEffect, useState } from "react";
import { ScoreboardDumb } from "./ScoreboardDumb";

const Scoreboard = () => {
    const [scores, setScores] = useState([]);

    const [, getItem] = useLocaleStorage();

    const orderScores = (a, b) => {
        if (a.tries < b.tries) {
            return 1;
        }
        if (a.tries > b.tries) {
            return -1;
        }
        return 0;
    };

    // limit scoreboard to 5 best ones
    useEffect(() => {
        const partialScores = JSON.parse(getItem("scores")).sort(orderScores);

        while (partialScores.length > 5) {
            partialScores.pop();
        }

        setScores(partialScores);
    }, [getItem]);

    return <ScoreboardDumb scores={scores} />;
};

export default Scoreboard;
