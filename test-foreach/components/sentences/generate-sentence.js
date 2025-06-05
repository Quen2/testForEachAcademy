"use client"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"

export default function GenerateSentence ({SetSentence}) {

    const [needToGenerate, setNeedToGenerate] = useState('loading')

    useEffect(() => {
        SetSentence('loading')
        setTimeout(() => {
            getSentence()
        }, 2000);
    },[needToGenerate])

    async function getSentence () {
        const { data } = await supabase
        .from('sentences')
        .select('*')

        const randomIndex = Math.floor(Math.random() * data.length)        

        SetSentence(data[randomIndex].message); 
    }

    return (
        <div>
            <button className="text-white text-4xl" onClick={() => setNeedToGenerate(!needToGenerate)}>générer</button>
        </div>
    )
}