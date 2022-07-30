import { Play as PlayScreen } from "@components/screens/Play";
import Head from "next/head";

import styles from "@styles/screenStyles/Play.module.scss";

export async function getServerSideProps() {
    const cols = process.env.COLS;
    const rows = process.env.ROWS;

    return {
        props: {
            cols,
            rows,
        }, // will be passed to the page component as props
    };
}

const Play = ({ cols, rows }) => {
    return (
        <div className={styles.container + " h-100 w-50 text-center m-auto"}>
            <Head>
                <title>Bueno, vamo a juga</title>
                <meta name="description" content="Minesweeper" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <PlayScreen cols={cols} rows={rows} />
        </div>
    );
};

export default Play;
