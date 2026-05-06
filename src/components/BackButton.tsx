import { IoIosArrowBack } from "react-icons/io";

function BackButton() {
    return (
        <div className="flex items-center absolute top-4 pl-1 text-white">
        <IoIosArrowBack  size={60} className="text-white rounded-full p-5" />
        <span className="text-white"><a href="#">Voltar</a></span>
        </div>
    );
    }
export default BackButton;