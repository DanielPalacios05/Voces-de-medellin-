import { Player, gameData } from "@/app/gameData"



export default function Final({params} : {params : {playerId:number}}){

    const player: Player = gameData.players.filter((ply) => { return ply.id == params.playerId })[0]



    return (
        <div className="flex justify-center flex-col content-center">
        <div className="text-center font-bold text-7xl">
            <p>{"Contento"}</p>
        </div>
        <div className="border-8 p-8 text-3xl mt-10 text-justify backdrop-blur-md border-white rounded-xl">
            <p>{player.end}</p>
        </div>
    </div>
    )
    
}