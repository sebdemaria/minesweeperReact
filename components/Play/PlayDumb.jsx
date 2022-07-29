import Link from "next/link";
import { useRouter } from "next/router";
import Table from "../Table/Table";

const PlayDumb = ({ playersName, boardX, boardY }) => {
    const router = useRouter();

    return !playersName ? (
        <>
            <h1>Vuelva al inicio e ingrese su nombre para comenzar a jugar</h1>
            <Link href={"/"}>
                <a>
                    <button className="btn btn-primary">Home</button>
                </a>
            </Link>
        </>
    ) : (
        <section>
            <h1 className="h-50">Hola {playersName}, vamos a jugar!</h1>
            <Table boardX={boardX} boardY={boardY}/>
        </section>
    );
};

export default PlayDumb;
