import { FaRegUserCircle } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export function Header() {

    return (
        <header className="flex flex-row justify-between items-center p-10">
            <div>
                <h1 className="text-[#6A00FF]">NIGHTUP</h1>
            </div>
                
            <div className="flex flex-row justify-between">
                <FaRegUserCircle />
                <FaRegHeart />
            </div>
        </header>
    )
}

export default Header