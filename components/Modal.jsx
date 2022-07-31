import styles from "@styles/componentStyles/Modal.module.scss";

export const GameModal = ({ message }) => {
    return (
        <div className={styles.modal}>
            <p className="w-100">{message}</p>
            <button
                className="btn btn-ouline btn-primary"
                onClick={() => location.reload()}
            >
                Reiniciar
            </button>
        </div>
    );
};
