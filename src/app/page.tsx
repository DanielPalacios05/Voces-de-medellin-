import Image from "next/image";
import { gameData } from "./gameData";
import Link from "next/link";
export default function Home() {

  return (
    <div>
      <div className="text-center font-bold text-7xl">
        <p>Voces de Medellin</p>
      </div>

      <div className="text-center text-3xl py-16">
        <p>
          Juego de mesa interactivo diseñado para explorar y discutir temas incómodos y de gran importancia social que afectan la ciudad de Medellín y sus habitantes.
        </p>
      </div>

      <div className="flex flex-col gap-5 mx-40">
        <Link className="gameButton" href={"/personajes"}>Iniciar</Link>
        <Link className="gameButton" href={"/instrucciones"}>Instrucciones</Link>
      </div>
    </div>
  );
}
