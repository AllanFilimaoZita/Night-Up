import React from 'react';
import { FaRegCalendarAlt } from "react-icons/fa";
import { HiOutlineTicket } from "react-icons/hi";
import { FiMapPin } from "react-icons/fi";

interface MasterClassCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  date: string;
  className?: string; // Para customizações adicionais
}

const MasterClassCard: React.FC<MasterClassCardProps> = ({
  image,
  title,
  location,
  price,
  date,
  className = "",
}) => {
  return (
    <div className={`max-w-md mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl ${className}`}>
      
      {/* === PARTE SUPERIOR - IMAGEM === */}
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-[380px] object-cover"
        />
      </div>

      {/* === PARTE INFERIOR - INFORMAÇÕES === */}
      <div className="p-6 space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 leading-tight">
          {title}
        </h2>

        <div className="space-y-5 text-gray-700">
          {/* Local + Preço na mesma linha */}
          <div className="flex justify-between items-start gap-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl text-gray-600"><FiMapPin /></span>
              <div>
                <p className="font-semibold">{location}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-3xl text-gray-600"><HiOutlineTicket /></span>
              <div>
                <p className="font-semibold">{price}</p>
              </div>
            </div>
          </div>

          {/* Data */}
          <div className="flex items-center gap-3">
            <span className="text-3xl text-gray-600"><FaRegCalendarAlt /></span>
            <div>
              <p className="font-semibold">{date}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterClassCard;