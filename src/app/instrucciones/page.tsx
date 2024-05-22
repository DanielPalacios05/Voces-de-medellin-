
export default function Ins(){
    return(
        <div className="container text-xl text-black text-center font-extrabold">
        <h1>Voces de Medellín</h1>
        <p>Número de jugadores: 4</p>
        <p>Objetivo del juego: Ser el primer jugador en llegar a la casilla final descubriendo la historia de tu personaje y enfrentando diversas situaciones en cada zona de Medellín.</p>
        <p  className="text-3xl">Componentes del juego:</p>
        <ul>
            <li>1 tablero físico con 36 casillas</li>
            <li>1 dado</li>
            <li>4 fichas de personaje (cada uno con una historia diferente)</li>
            <li>Aplicación web para eventos y preguntas polémicas</li>
        </ul>
        <p  className="text-3xl">Preparación:</p>
        <ul>
            <li>Coloca el tablero en el centro de la mesa.</li>
            <li>Cada jugador se le asigna un personaje aleatoriamente</li>
            <li>Asegúrate de tener acceso a la aplicación web que interactuará con el juego.</li>
        </ul>
        <h1 className="text-3xl">Desarrollo del juego:</h1>
        <ul>
            <li>Los jugadores lanzan el dado para determinar quién inicia (el jugador con el número más alto empieza).</li>
            <li>Al pasar por una zona nueva, se lee la carta de historia para el personaje en esa zona</li>
            <li>De acuerdo a la historia, se toma una decisión, que afecta el desarollo de el juego</li>
            <li>Se muestra la pregunta asociada a esa historia,se debate con todos los jugadores</li>
        </ul>
        <h1>
            Final de el juego
        </h1>
        <ul>
            En este juego no hay ganadores, todos ganan cuando se escuchan todas las historias y se realizan socializan todas las preguntas
        </ul>
        
    </div>
    )
}