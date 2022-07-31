import styles from "@styles/componentStyles/Table.module.scss";
import { TableRow } from "./TableRow";

export const TableDumb = ({ board, handleShowCellValue }) => {
    return (
        <div className={styles.boardDiv + " my-4"}>
            <table>
                <tbody className={styles.tbody}>
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
