import styles from "@styles/Home.module.scss";
import Head from "next/head";

import HomeScreen from "@screens/HomeScreen";

export default function Home() {
    return (
        <div className={styles.container + " h-100 w-50 text-center m-auto"}>
            <Head>
                <title>Cami se la come</title>
                <meta name="description" content="Minesweeper" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <HomeScreen />
        </div>
    );
}
