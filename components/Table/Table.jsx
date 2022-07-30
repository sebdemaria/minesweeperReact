import styles from "@styles/componentStyles/Table.module.scss";
import { TableRow } from "./TableRow";

export const Table = ({ board }) => {
    const handleShowCellValue = (e) => {
        // dispatch({ type: "TRY" });

        const { target } = e;

        const { x, y } = target.dataset;

        const value = board[y][x].value;

        target.textContent = value;

        if (value === "💣") {
            target.classList.add(styles.mineHitted);
            // dispatch({ type: "LOST" });
        }
    };

    // useEffect(() => {
    //     if (state.gameStatus === "game_over") {
    //     }
    // }, [state]);

    return (
        <div className={styles.boardDiv + " mt-5"}>
            <table>
                <tbody>
                    {board?.map((row, index) => {
                        return (
                            <TableRow
                                key={index}
                                row={row}
                                handleShowCellValue={handleShowCellValue}
                            />
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};
