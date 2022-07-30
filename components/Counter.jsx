import styles from "@styles/componentStyles/Counter.module.scss";

export const Counter = ({ state }) => {
    return <div className={styles.counter}>{state.tries}</div>;
};
