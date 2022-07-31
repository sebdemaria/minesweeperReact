import { useGameContext } from "@context/GameContext";
import { useLocaleStorage } from "@hooks/useLocaleStorage";
import * as ACTION_TYPES from "@store/actions/action_types";
import styles from "@styles/componentStyles/Table.module.scss";
import { useEffect, useState } from "react";
import { GameModal } from "../Modal";
import { TableDumb } from "./TableDumb";

export const Table = ({ board }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [message, setMessage] = useState("");

    const [setItem, getItem] = useLocaleStorage();

    const [cellClicked, setCellClicked] = useState({ x: null, y: null });

    const { gameStatus, dispatch, tries } = useGameContext();

    const handleShowCellValue = ({ target }) => {
        if (gameStatus !== "game_over") {
            // clicked cell coords
            const { x, y } = target.dataset;
            const cellCoords = { x: x, y: y };

            if (JSON.stringify(cellCoords) !== JSON.stringify(cellClicked)) {
                dispatch({ type: ACTION_TYPES.TRY });
                setCellClicked(cellCoords);
            } else {
                return;
            }

            //board value for clicked cell
            const value = board[x][y].value;

            //fill cell
            target.textContent = value;

            //check for mine and style cell
            if (value === "💣") {
                target.classList.add(styles.mineHitted);

                document.querySelectorAll("#cell").forEach((cell) => {
                    let value = board[cell.dataset.x][cell.dataset.y].value;
                    if (value === 0) {
                        value = "";
                        cell.classList.add(styles.cellEmpty);
                    }
                    cell.textContent = value;
                    const hoverClass = cell.classList[1];
                    cell.classList.remove(hoverClass);
                });

                handleScore();

                dispatch({ type: ACTION_TYPES.LOST });
                setMessage("Perdiste");
                setModalIsOpen("true");
            } else {
                target.classList.add(styles.cellClicked);
            }
        }
    };

    const handleScore = () => {
        const player = getItem("playerName");
        const scores = JSON.parse(getItem("scores"));
        const newScores = [];

        //set scoreboard
        if (scores.length !== 0) {
            newScores.push(...scores, { name: player, tries: tries });
        } else {
            newScores.push({ name: player, tries: tries });
        }

        setItem("scores", JSON.stringify(newScores), false);
    };

    useEffect(() => {
        dispatch({ type: ACTION_TYPES.START });
    }, [dispatch]);

    return (
        <>
            <TableDumb
                board={board}
                handleShowCellValue={handleShowCellValue}
            />
            {modalIsOpen && <GameModal message={message} />}
        </>
    );
};
