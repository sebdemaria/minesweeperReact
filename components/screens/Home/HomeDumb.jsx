import { Button } from "@components/UI/Button";
import styles from "@styles/screenStyles/Home.module.scss";

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

            <Button type="submit" moreClass="btn btn-primary mt-3">
                Comenzar!
            </Button>
        </form>
    );
};

export default HomeDumb;
