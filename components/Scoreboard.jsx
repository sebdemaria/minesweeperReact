import { useLocaleStorage } from "@hooks/useLocaleStorage";

import styles from "@styles/componentStyles/ScoreBoard.module.scss";

const Scoreboard = () => {
    // const [scores, setScores] = useState([]);

    const [, getItem] = useLocaleStorage();

    const scores = JSON.parse(getItem("scores"));
    console.log(scores);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col" className={styles.th}>
                        #
                    </th>
                    <th scope="col" className={styles.th}>
                        Nombre
                    </th>
                    <th scope="col" className={styles.th}>
                        Puntaje
                    </th>
                </tr>
            </thead>
            <tbody>
                {scores.map((score, index) => (
                    <tr key={index} className={styles.th}>
                        <th scope="row">{index + 1}</th>
                        <td>{score.name}</td>
                        <td>{score.tries}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Scoreboard;
