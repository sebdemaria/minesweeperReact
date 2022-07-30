import { Counter } from "@components/Counter";
import { Table } from "@components/Table/Table";
import { useBoard } from "@hooks/useBoard";
import Link from "next/link";

export const PlayDumb = ({ playersName, cols, rows }) => {
    const [createBoard] = useBoard();

    const board = createBoard(cols, rows);

    return !playersName ? (
        <>
            <h1>Vuelva al inicio e ingrese su nombre para comenzar a jugar</h1>
            <Link href={"/"}>
                <a>
                    <button className="btn btn-primary">Home</button>
                </a>
            </Link>
        </>
    ) : (
        <section>
            <h1 className="h-50">Hola {playersName}, vamos a jugar!</h1>
            <Table board={board} />

            {/* <Counter state={state} /> */}
        </section>
    );
};
