import Link from "next/link"
import { gameData } from "../gameData"
import PlayerCard from "./playerCard"


export default function Personajes() {

    return (
        <div className="">
            <div className="text-center font-bold text-7xl">
                <p>Personajes</p>
            </div>

            <div className="flex flex-wrap justify-items-center gap-0 mt-10">

                {gameData.players.map((player,idx) =>{
             
                    return ( 
                    <>
                    <Link href={"/personajes/"+player.id+"/zonas"}>
                    <PlayerCard player={player}></PlayerCard> 
                    </Link>
                    </>
                    )
                })}
            </div>
        </div>
    )
}