import styles from "@styles/componentStyles/Table.module.scss";

export const TableRow = ({ row, handleShowCellValue }) => {
    return (
        <tr className={styles.tr}>
            {row.map(({ id, x, y, value }) => {
                return (
                    <td
                        id="cell"
                        key={id}
                        className={styles.mine}
                        data-x={x}
                        data-y={y}
                        onClick={handleShowCellValue}
                    ></td>
                );
            })}
        </tr>
    );
};
