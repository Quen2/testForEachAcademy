import Gif from "@/public/cat.gif"

export default function Lost () {
    return (
        <div className="w-screen h-screen bg-[#181818] flex flex-col">
            <div className="h-3/4 w-3/4 m-auto text-center">
                <p className="text-white text-2xl font-bold">I&apos;m lost...</p>
                <img src={Gif.src} alt="cat gif" className="w-1/3 mx-auto"></img>
            </div>
        </div>
    )
}