import { useGameContext } from "@context/GameContext";

import styles from "@styles/componentStyles/Counter.module.scss";

export const Counter = () => {
    const { tries } = useGameContext();

    return (
        <div className="w-100">
            <div className={styles.counter}>
                <p className="mb-0">Intentos</p>
                {tries}
            </div>
        </div>
    );
};
