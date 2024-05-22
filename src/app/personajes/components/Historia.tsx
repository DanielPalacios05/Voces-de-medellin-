"use client"
import { Option, Story } from "@/app/gameData";
import { useState } from "react";



export default function StoryComponent({ story }: { story: Story }) {

    const [optionSelected, setOptionSelected] = useState<Option|undefined>(undefined);
    const [showQuestion, setShowQuestion] = useState<boolean>(false);

    return (
!showQuestion?
   !optionSelected ?
        <div className="flex justify-center flex-col content-center">
            <div className="text-center font-bold text-7xl">
                <p>{story.title}</p>
            </div>
            <div className="border-8 p-8 text-3xl mt-10 text-justify backdrop-blur-md border-white rounded-xl">
                <p>{story.description}</p>
            </div>

            <div className="flex justify-around mt-10">
                {story.options.map((option) =>{
                    return (<>
                    <button type={"button"} onClick={()=>setOptionSelected(option)}className="gameButton">{`${option.index}. ${option.description}`}</button>
                    </>)
                })}
            </div>
        </div>
    :
    
    <div className="flex justify-center flex-col content-center">
    <div className="text-center font-bold text-7xl">
    </div>
    <div className="border-8 p-8 text-3xl mt-10 text-justify backdrop-blur-md border-white rounded-xl">
        <p>{optionSelected.result}</p>
    </div>

    <div className="flex justify-around mt-10">
            <button className={"gameButton"} onClick={()=>setShowQuestion(true)}type={"button"}>Mostrar pregunta</button>
    </div>
</div>

:
<>
<div className="text-3xl text-center">
{story.question}
</div>
</>

    )

}