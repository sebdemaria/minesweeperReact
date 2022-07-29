import PlayScreen from "@screens/PlayScreen";
import styles from "@styles/Home.module.scss";
import Head from "next/head";

export default function Home() {
    return (
        <div className={styles.container + " h-100 w-50 text-center m-auto"}>
            <Head>
                <title>Bueno, vamo a juga'</title>
                <meta name="description" content="Minesweeper" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <PlayScreen />
        </div>
    );
}
