import styles from "@styles/Home.module.scss";

const HomeDumb = ({ handleSubmit, handleInputChange }) => {
    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="playerName">Ingresa tu nombre bb</label>
                <input
                    type="name"
                    className="form-control mt-2"
                    id="playerName"
                    aria-describedby="playerName"
                    placeholder="Ingresa tu nombre"
                    onChange={handleInputChange}
                />
            </div>

            <button type="submit" className="btn btn-primary mt-3">
                Comenzar!
            </button>
        </form>
    );
};

export default HomeDumb;
