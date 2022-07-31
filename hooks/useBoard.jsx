import { useCallback } from "react";

export const useBoard = () => {
    const createBoard = (cols, rows, bombs = 12) => {
        let board = [];

        for (let x = 0; x < rows; x++) {
            let row = [];
            for (let y = 0; y < cols; y++) {
                row.push({
                    id: y,
                    x: x,
                    y: y,
                    value: Math.floor(Math.random() * 5),
                });
            }
            board.push(row);
        }

        assignBombs(bombs, board, cols, rows);

        return board;
    };

    const assignBombs = (bombs, board, cols, rows) => {
        let bombsPlanted = 0;
        while (bombsPlanted <= bombs) {
            const { x, y } = generateRandomBoardPosition(cols, rows);

            let cell = board[y][x];

            if (cell.value !== "💣") {
                cell.value = "💣";
            } else {
                continue;
            }

            bombsPlanted++;
        }
    };

    const generateRandomBoardPosition = useCallback((cols, rows) => {
        const x = Math.floor(Math.random() * cols);
        const y = Math.floor(Math.random() * rows);

        return { x, y };
    }, []);

    return [createBoard];
};
