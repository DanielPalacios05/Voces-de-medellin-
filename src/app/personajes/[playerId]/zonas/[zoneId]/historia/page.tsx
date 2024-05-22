import { gameData } from "@/app/gameData"
import Story from "@/app/personajes/components/Historia"




export default function StoryPage({ params }: { params: { playerId: number, zoneId: number } }){

    const story = gameData.stories.filter((story) => {
        return story.zoneId == params.zoneId && story.playerId == params.playerId
    })[0]

    return(
        <Story story={story} ></Story>
    )

}