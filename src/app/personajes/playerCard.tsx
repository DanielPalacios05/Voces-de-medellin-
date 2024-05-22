import { Player } from "../gameData";
import Image from "next/image";
export default function PlayerCard({player} : {player : Player} ){

    return(
        <div className="w-60 text-center border-8 p-5 backdrop-blur-md border-white rounded-xl">
            <div className="m-4">
            <p className="text-3xl font-bold mb-6">{player.name}</p>
            <div className="flex justify-center">
            <Image width={300} src={player.image} alt={player.name}></Image>
            </div>
            </div>
        </div>
    )
}