import { IoFilter } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";
import { IoTicketOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";

import imagem from "../../assets/img/capa2.jpeg";
import capa3 from "../../assets/img/capa3.jpeg"
import capa1 from "../../assets/img/capa1.jpeg"
import capa4 from "../../assets/img/capa4.jpeg"

function Favorites() {
  return (
    <>
      <div className="p-3">
        <div className="">
          <div className="flex flex-col items-center pb-2">
            <h4 className="text-lg font-bold">Lista de Favoritos</h4>
          </div>
        </div>
        <div className="justify-between flex items-center gap-2git relative">
          <div className="absolute left-4 top-1/2 -translate-y-1/2">
            <CiSearch size={20} className="text-black" />
          </div>

          <div className="flex w-full">
            <input
              className="rounded-full p-2 pl-12 border border-[#E2E2E2] w-full"
              type="search"
              placeholder="Procurar eventos..."
            />
          </div>

          <div>
            <div className="rounded-lg p-3 border border-[#E2E2E2]">
              <IoFilter size={18} className="text-black" />
            </div>
          </div>
        </div>
      </div>

     <div className="w-screen h-screen flex flex-col items-center p-4 gap-4">

  {/* CARD */}
  <div className="relative w-full max-w-md rounded-lg shadow-md ">

    {/* botão coração */}
    <div className="absolute top-3 right-3 z-10">
      <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-2">
        <FaHeart className="text-red-600" />
      </div>
    </div>

    {/* imagem */}
    <div className="h-[200px] w-full">
      <img
        src={imagem}
        alt=""
        className="w-full h-full object-cover object-top"
      />
    </div>

    {/* conteúdo */}
    <div className="p-4 shadow-md">
      <h4 className="text-2xl font-medium pb-2">
        Noite do Tsumami
      </h4>

      <div className="flex flex-col gap-2">

        <div className="flex items-center gap-2">
          <CiLocationOn size={22} className="text-[#6A00FF]" />
          <span className="text-sm text-gray-600">
            Rua do Adoço, 123 - Centro
          </span>
        </div>

        <div className="flex items-center gap-2">
          <IoCalendarOutline size={22} className="text-[#6A00FF]" />
          <span className="text-sm text-gray-600">
            Sábado, 9 maio de 2026 | 21:30H
          </span>
        </div>

        <div className="flex items-center gap-2">
          <IoTicketOutline size={22} className="text-[#6A00FF]" />
          <span className="text-sm text-gray-600">
            A partir de 800MT
          </span>
        </div>

      </div>
    </div>

    

  </div>

  {/* CARD */}
  <div className="relative w-full max-w-md rounded-lg shadow-md ">

    {/* botão coração */}
    <div className="absolute top-3 right-3 z-10">
      <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-2">
        <FaHeart className="text-red-600" />
      </div>
    </div>

    {/* imagem */}
    <div className="h-[200px] w-full">
      <img
        src={capa1}
        alt=""
        className="w-full h-full object-cover object-top"
      />
    </div>

    {/* conteúdo */}
    <div className="p-4 shadow-md">
      <h4 className="text-2xl font-medium pb-2">
        Noite do Tsumami
      </h4>

      <div className="flex flex-col gap-2">

        <div className="flex items-center gap-2">
          <CiLocationOn size={22} className="text-[#6A00FF]" />
          <span className="text-sm text-gray-600">
            Rua do Adoço, 123 - Centro
          </span>
        </div>

        <div className="flex items-center gap-2">
          <IoCalendarOutline size={22} className="text-[#6A00FF]" />
          <span className="text-sm text-gray-600">
            Sábado, 9 maio de 2026 | 21:30H
          </span>
        </div>

        <div className="flex items-center gap-2">
          <IoTicketOutline size={22} className="text-[#6A00FF]" />
          <span className="text-sm text-gray-600">
            A partir de 800MT
          </span>
        </div>

      </div>
    </div>

    

    

  </div>

   {/* CARD */}
  <div className="relative w-full max-w-md rounded-lg shadow-md ">

    {/* botão coração */}
    <div className="absolute top-3 right-3 z-10">
      <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-2">
        <FaHeart className="text-red-600" />
      </div>
    </div>

    {/* imagem */}
    <div className="h-[200px] w-full">
      <img
        src={capa3}
        alt=""
        className="w-full h-full object-cover object-top"
      />
    </div>

    {/* conteúdo */}
    <div className="p-4 shadow-md">
      <h4 className="text-2xl font-medium pb-2">
        Noite do Tsumami
      </h4>

      <div className="flex flex-col gap-2">

        <div className="flex items-center gap-2">
          <CiLocationOn size={22} className="text-[#6A00FF]" />
          <span className="text-sm text-gray-600">
            Rua do Adoço, 123 - Centro
          </span>
        </div>

        <div className="flex items-center gap-2">
          <IoCalendarOutline size={22} className="text-[#6A00FF]" />
          <span className="text-sm text-gray-600">
            Sábado, 9 maio de 2026 | 21:30H
          </span>
        </div>

        <div className="flex items-center gap-2">
          <IoTicketOutline size={22} className="text-[#6A00FF]" />
          <span className="text-sm text-gray-600">
            A partir de 800MT
          </span>
        </div>

      </div>
    </div>

    

    

  </div>

   {/* CARD */}
  <div className="relative w-full max-w-md rounded-lg shadow-md ">

    {/* botão coração */}
    <div className="absolute top-3 right-3 z-10">
      <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-2">
        <FaHeart className="text-red-600" />
      </div>
    </div>

    {/* imagem */}
    <div className="h-[200px] w-full">
      <img
        src={imagem}
        alt=""
        className="w-full h-full object-cover object-top"
      />
    </div>

    {/* conteúdo */}
    <div className="p-4 shadow-md">
      <h4 className="text-2xl font-medium pb-2">
        Noite do Tsumami
      </h4>

      <div className="flex flex-col gap-2">

        <div className="flex items-center gap-2">
          <CiLocationOn size={22} className="text-[#6A00FF]" />
          <span className="text-sm text-gray-600">
            Rua do Adoço, 123 - Centro
          </span>
        </div>

        <div className="flex items-center gap-2">
          <IoCalendarOutline size={22} className="text-[#6A00FF]" />
          <span className="text-sm text-gray-600">
            Sábado, 9 maio de 2026 | 21:30H
          </span>
        </div>

        <div className="flex items-center gap-2">
          <IoTicketOutline size={22} className="text-[#6A00FF]" />
          <span className="text-sm text-gray-600">
            A partir de 800MT
          </span>
        </div>

      </div>
    </div>

    

    

  </div>

   {/* CARD */}
  <div className="relative w-full max-w-md rounded-lg shadow-md ">

    {/* botão coração */}
    <div className="absolute top-3 right-3 z-10">
      <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-2">
        <FaHeart className="text-red-600" />
      </div>
    </div>

    {/* imagem */}
    <div className="h-[200px] w-full">
      <img
        src={capa4}
        alt=""
        className="w-full h-full object-cover object-top"
      />
    </div>

    {/* conteúdo */}
    <div className="p-4 shadow-md">
      <h4 className="text-2xl font-medium pb-2">
        Noite do Tsumami
      </h4>

      <div className="flex flex-col gap-2">

        <div className="flex items-center gap-2">
          <CiLocationOn size={22} className="text-[#6A00FF]" />
          <span className="text-sm text-gray-600">
            Rua do Adoço, 123 - Centro
          </span>
        </div>

        <div className="flex items-center gap-2">
          <IoCalendarOutline size={22} className="text-[#6A00FF]" />
          <span className="text-sm text-gray-600">
            Sábado, 9 maio de 2026 | 21:30H
          </span>
        </div>

        <div className="flex items-center gap-2">
          <IoTicketOutline size={22} className="text-[#6A00FF]" />
          <span className="text-sm text-gray-600">
            A partir de 800MT
          </span>
        </div>

      </div>
    </div>

    

    

  </div>

</div>
    </>
  );
}

export default Favorites;
