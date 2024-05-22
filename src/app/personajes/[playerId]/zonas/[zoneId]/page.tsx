import { gameData } from "@/app/gameData"
import Link from "next/link"



export default function PlayerZone({ params }: { params: { playerId: number, zoneId: number } }) {


    return (
        <div>
            <div className="flex flex-col gap-5 mx-40">
                <Link className="gameButton" href={"/personajes/"+params.playerId+"/zonas/"+params.zoneId+"/historia"}>Historia</Link>
            </div>
        </div>
    )
}