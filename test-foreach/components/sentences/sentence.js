"use client"
import { useEffect, useState } from "react"
import GenerateSentence from "./generate-sentence"
import AddSentence from "./add-sentence"

export default function Sentence () {
    
    const [sentence, SetSentence] = useState('')
    const [addANewSentence, setAddANewSentence] = useState(false)
    const [showBtn, setShowBtn] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setShowBtn(true)
        }, 2000);
    },[])

    return (
        <div className="w-screen h-screen bg-[#181818]">
            {
                addANewSentence ?
                <div className="modal">
                    <div className="w-3/4 h-3/4 border text-white rounded-2xl p-2 ">
                        <AddSentence setAddANewSentence={setAddANewSentence}/>
                    </div>
                </div> 
                : <></>
            }
            <div className="flex h-full flex-col">
                <div className="h-1/2"></div>
                <p className="text-center absolute text-white text-xl md:text-4xl font-bold mx-auto w-full mainTitle">ItWorksOnMyMachine</p>
                {
                    showBtn 
                    ?
                    <div className="text-center generateSentence">
                        {
                            sentence === 'loading' ?
                            <p className="font-bold text-white text-xl md:text-4xl mb-4">Chargement..</p>
                            :
                            <p className="font-bold text-white text-xl md:text-4xl mb-4">{sentence}</p>
                        }
                        <GenerateSentence SetSentence={SetSentence} setAddANewSentence={setAddANewSentence} addANewSentence={addANewSentence}/>
                    </div>
                    :
                    <></>
                }
            </div>
        </div>
    )
}