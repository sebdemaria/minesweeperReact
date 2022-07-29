import PlayScreen from "@screens/PlayScreen";
import styles from "@styles/Home.module.scss";
import Head from "next/head";

export async function getServerSideProps() {
    const boardX = process.env.BOARDX;
    const boardY = process.env.BOARDY;

    return {
        props: {
            boardX,
            boardY,
        }, // will be passed to the page component as props
    };
}

const Play = ({ boardX, boardY }) => {
    return (
        <div className={styles.container + " h-100 w-50 text-center m-auto"}>
            <Head>
                <title>Bueno, vamo a juga'</title>
                <meta name="description" content="Minesweeper" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <PlayScreen boardX={boardX} boardY={boardY} />
        </div>
    );
};

export default Play;
