import { Player, gameData } from "@/app/gameData"



export default function Contexto({params} : {params : {playerId:number}}){

    const player: Player = gameData.players.filter((ply) => { return ply.id == params.playerId })[0]



    return (
        <div className="flex justify-center flex-col content-center">
        <div className="text-center font-bold text-7xl">
            <p>{player.name}</p>
        </div>
        <div className="border-8 p-8 text-3xl mt-10 text-justify backdrop-blur-sm font-bold  border-white rounded-xl">
            <p>{player.context}</p>
        </div>
    </div>
    )
    
}