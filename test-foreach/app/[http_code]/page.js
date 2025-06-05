"use client"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { supabase } from "@/lib/supabaseClient"

export default function Http_code ({httpCode}) {
    
    const params = useParams()
    const [sentence, setSentence] = useState('')

    useEffect(() => {
        
        generateSentence()        
        
    },[params])

    async function generateSentence () {
        const { data } = await supabase
            .from('sentences')
            .select('')
            .eq('http_code', params.http_code)
        
        data.length ?
            setSentence(data[0].message)
            : setSentence('Erreur inconnue')
        
    }

    return (
        <div className="w-screen h-screen bg-[#181818] flex">
            <div className="text-white h-3/4 w-3/4 m-auto text-center text-2xl font-bold flex items-center justify-center">
                <p className="w-full">{sentence}</p>
            </div>
        </div>
    )
}