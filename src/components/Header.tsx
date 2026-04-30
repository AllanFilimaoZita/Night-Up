import { FaRegHeart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";


function Header () {

    return (

        <header className="w-full px-4 py-3 sm:px-6 sm:py-4">
            <div className="flex flex-row items-center justify-between">

                <div>
                    <h1 className="text-[#6A00FF] text-lg font-bold sm:text-lg">NIGHTUP</h1>
                </div>

                <div className="flex flex-row items-center gap-">
                    <button className="text-zinc-500 active:scale-90 transition-all duration-200 p-1">
                        <FaRegUserCircle size={24} />
                    </button>
                    <button className="text-zinc-500 active:scale-90 transition-all duration-200 p-1">
                        <FaRegHeart size={22} />
                    </button>
                </div>

            </div>
        </header>

    )

}

export default Header