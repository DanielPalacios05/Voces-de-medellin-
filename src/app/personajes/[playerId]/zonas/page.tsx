import { Player, gameData } from "@/app/gameData"
import Card from "../../components/Card"
import Link from "next/link"


export default function PlayerZones({ params }: { params: { playerId: number } }) {

    const player: Player = gameData.players.filter((ply) => { return ply.id == params.playerId })[0]

    return (
        <div className="">
            <div className="text-center font-bold text-7xl">
                <p>Zonas</p>
            </div>



            <div className="flex flex-wrap justify-items-center  gap-5 mt-10">
                <Link href={"/personajes/" + params.playerId + "/contexto/"}>
                    <Card image={player.image} title={"Inicio"} ></Card>
                </Link>

                {gameData.zones.map((zone, idx) => {

                    return (
                        <>
                            <Link href={"/personajes/" + params.playerId + "/zonas/" + zone.zoneId}>
                                <Card image={zone.image} title={zone.name} ></Card>
                            </Link>
                        </>
                    )
                })}
                <Link href={"/personajes/" + params.playerId + "/final/"}>
                    <Card image={player.image} title={"Final"} ></Card>
                </Link>

            </div>
        </div>
    )
}