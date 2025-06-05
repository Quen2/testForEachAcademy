"use client"
import { useEffect, useState } from "react"
import GenerateSentence from "./generate-sentence"

export default function Sentence () {
    
    const [sentence, SetSentence] = useState('')
    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShowBtn(true)
        }, 2000);
    },[])

    return (
        <div className="w-screen h-screen bg-[#181818]">
            <div className="flex h-full flex-col">
                <div className="h-1/3"></div>
                <p className="text-center absolute text-white text-4xl font-bold mx-auto w-full mainTitle">ItWorksOnMyMachine</p>
                {
                    showBtn 
                    ?
                    <div className="text-center generateSentence">
                        {
                            sentence === 'loading' ?
                            <p className="font-bold text-white text-4xl">Chargement..</p>
                            :
                            <p className="font-bold text-white text-4xl">{sentence}</p>
                        }
                        <GenerateSentence SetSentence={SetSentence} />
                    </div>
                    :
                    <></>
                }
            </div>
        </div>
    )
}