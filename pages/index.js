import styles from "@styles/screenStyles/Home.module.scss";
import Head from "next/head";

import { Home as HomeScreen } from "@screens/Home";

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
