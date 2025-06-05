"use client"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"

export default function GenerateSentence ({SetSentence, setAddANewSentence, addANewSentence}) {

    const [needToGenerate, setNeedToGenerate] = useState('loading')
    const randomDelay = Math.floor(Math.random() * 5)

    useEffect(() => {
        SetSentence('loading')
        setTimeout(() => {
            getSentence()
        }, randomDelay * 1000);
    },[needToGenerate])

    async function getSentence () {
        const { data } = await supabase
        .from('sentences')
        .select('*')

        const randomIndex = Math.floor(Math.random() * data.length)        

        SetSentence(data[randomIndex].message); 
    }

    return (
        <div className="flex gap-8 text-white text-4xl justify-center">
            <button onClick={() => setNeedToGenerate(!needToGenerate)} className="cursor-pointer hover:scale-105">O</button>
            <button onClick={(() => setAddANewSentence(!addANewSentence))} className="cursor-pointer hover:scale-105">+</button>
        </div>
    )
}