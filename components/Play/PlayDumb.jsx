const PlayDumb = ({ playersName }) => {
    return !playersName ? (
        <h1>Bienvenido, vamos a jugar!</h1>
    ) : (
        <h1>Hola {playersName}, vamos a jugar!</h1>
    );
};

export default PlayDumb;
