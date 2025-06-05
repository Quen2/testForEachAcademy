"use client"
import { useState } from "react"
import GenerateSentence from "./generate-sentence"

export default function Sentence () {
    
    const [sentence, SetSentence] = useState('')

    return (
        <div className="w-screen h-screen bg-[#181818]">
            <div className="flex h-full flex-col">
                <p className="text-center text-white text-4xl font-bold pt-4 h-1/3">ItWorksOnMyMachine</p>
                <div className="h-2/3 text-center ">
                    {
                        sentence === 'loading' ?
                        <p className="font-bold text-white text-4xl">Chargement..</p>
                        :
                        <p className="font-bold text-white text-4xl">{sentence}</p>
                    }
                    <GenerateSentence SetSentence={SetSentence} />
                </div>
            </div>
        </div>
    )
}