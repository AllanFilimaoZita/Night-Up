import { GoHome } from "react-icons/go";
import { HiOutlineTicket } from "react-icons/hi";
import { GiPartyPopper } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa";

function NavBar() {
    return (
        <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
            <div className="flex flex-row items-center justify-between gap-6 px-8 py-4 rounded-full bg-white shadow-lg border border-purple-200 w-max">
                <a href="#">
                    <button className="flex flex-col items-center gap-1 text-xs text-gray-500 hover:text-purple-600 active:scale-90 transition-all">
                        <GoHome color="#6A00FF" size={24} />
                        <span>Home</span>
                    </button>
                </a>
                <a href="#">
                    <button className="flex flex-col items-center gap-1 text-xs text-gray-500 hover:text-purple-600 active:scale-90 transition-all">
                        <HiOutlineTicket color="#6A00FF" size={24} />
                        <span>Bilhetes</span>
                    </button>
                </a>
                <a href="#">
                    <button className="flex flex-col items-center gap-1 text-xs text-gray-500 hover:text-purple-600 active:scale-90 transition-all">
                        <GiPartyPopper color="#6A00FF" size={24} />
                        <span>Eventos</span>
                    </button>
                </a>
                <a href="#">
                    <button className="flex flex-col items-center gap-1 text-xs text-gray-500 hover:text-purple-600 active:scale-90 transition-all">
                        <FaRegUser color="#6A00FF" size={24} />
                        <span>Perfil</span>
                    </button>
                </a>
            </div>
        </nav>
    );
}

export default NavBar;