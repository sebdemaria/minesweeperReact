import Head from "next/head";
import styles from "@styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Cami se la come</title>
                <meta name="description" content="Minesweeper" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <HomeScreen />
        </div>
    );
}
