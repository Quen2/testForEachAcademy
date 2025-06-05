"use client"
import Gif from "@/public/cat.gif"
import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Lost () {

    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 5000);
    },[])
    
    return (
        <div className="w-screen h-screen bg-[#181818] flex flex-col">
            <div className="h-3/4 w-3/4 m-auto text-center flex flex-col justify-center items-center">
                <p className="text-white text-2xl font-bold">I&apos;m lost...</p>
                <img src={Gif.src} alt="cat gif" className="w-full md:w-1/3 mx-auto"></img>
            </div>
        </div>
    )
}