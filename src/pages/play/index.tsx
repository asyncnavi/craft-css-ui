import {IconArrowLeft} from "@tabler/icons-react";

const TopBar = () => {
    return (
        <div className="w-full border-b border-b-white flex items-center gap-2 py-4 px-2 ">
            <div className="cursor-pointer bg-slate-900 rounded-full p-2">
                <IconArrowLeft />
            </div>
            <h1 className="underline text-lg cursor-pointer">Problem : Shaky Circle</h1>
        </div>
    )
}

const PlayGround = () => {
    return (
        <div className="bg-slate-950 w-full h-screen text-white">
            <TopBar  />

        </div>
    )
}


export default PlayGround;