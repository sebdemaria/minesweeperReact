export const useLocaleStorage = () => {
    const createBoard = (cols, rows, bombs = 30) => {
        let board = [];

        for (let x = 0; x < rows; x++) {
            let rowCol = [];
            for (let y = 0; y < cols; y++) {
                rowCol.push({
                    x: x,
                    y: y,
                });
            }
            board.push(rowCol);
        }
    };

    return [createBoard];
};
