import { Counter } from "@components/Counter";
import Scoreboard from "@components/Scoreboard";
import { Table } from "@components/Table";
import { useBoard } from "@hooks/useBoard";
import styles from "@styles/screenStyles/Play.module.scss";
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
        <section className={styles.section}>
            <h1 className="h-100">Hola {playersName}, vamos a jugar!</h1>
            <Counter />
            <Table board={board} />
            <hr className={styles.hr}></hr>

            <Scoreboard />
        </section>
    );
};
