import { useParams, useNavigate } from "react-router-dom";
import { MOCK_EVENTS } from "../../data/events";

import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import cover from "../../assets/img/img.png";
import brand from "../../assets/img/brand.jpeg";
import Contador from "../../components/Contador";

import { CiLocationOn } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";
import { GoInfo } from "react-icons/go";

function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = MOCK_EVENTS.find((e) => e.id === Number(id));

  if (!event) {
    return <p className="text-center mt-10">Evento não encontrado.</p>;
  }

  return (
    <>
      <Header />

      <div className="w-screen min-h-screen flex flex-col items-center justify-start pb-24">

        {/* Imagem de capa com botão voltar */}
        <div className="relative w-full h-[300px]">
          <button
            onClick={() => navigate(-1)}
            className="absolute top-4 left-4 z-10 bg-white rounded-full p-2 shadow-md text-gray-700"
            aria-label="Voltar"
          >
            ←
          </button>
          <img
            className="w-full h-full object-cover object-top"
            src={event.image}
            alt={event.title}
            title="capa do evento"
          />
        </div>

        <div className="w-full max-w-[380px] bg-white rounded-2xl relative -top-10 mx-4 p-6 flex flex-col gap-4 shadow-lg">

          <h4 className="uppercase text-xl font-medium">{event.title}</h4>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <CiLocationOn size={28} className="text-[#6A00FF] shrink-0" />
              <span className="text-sm text-gray-700">{event.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <IoCalendarOutline size={28} className="text-[#6A00FF] shrink-0" />
              <span className="text-sm text-gray-700">{event.date}</span>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <h5 className="text-black font-semibold">Descrição do evento</h5>
            <p className="text-justify font-light text-sm">
              Conduzida por Stélio Mondlane, também conhecido como TheDrummerBeast,
              esta aula especial irá abordar técnicas essenciais, coordenação,
              criatividade rítmica, performance ao vivo e dicas práticas para
              evolução no instrumento.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-black font-semibold">Artistas Convidados</h4>
            <div className="flex flex-row gap-4">
              {["Kabza de Small", "Kabza de Small", "Kabza de Small", "Kabza de Small"].map((nome, i) => (
                <div key={i} className="flex flex-col items-center w-14">
                  <img className="w-12 h-12 rounded-full object-cover" src={cover} alt={nome} />
                  <span className="text-xs text-center mt-1 leading-tight">{nome}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-black font-semibold">Patrocinadores</h4>
            <div className="flex flex-row gap-4">
              {["Vodacom", "Vodacom", "Vodacom", "Vodacom", "Vodacom"].map((nome, i) => (
                <div key={i} className="flex flex-col items-center w-14">
                  <img className="w-12 h-12 rounded-full object-cover" src={brand} alt={nome} />
                  <span className="text-xs text-center mt-1">{nome}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-black font-bold">Bilhetes</h4>
            <div className="flex flex-col gap-4 p-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <GoInfo size={22} className="text-[#cecece]" />
                  <div className="flex flex-col">
                    <span className="font-medium">Pré-venda VIP</span>
                    <span className="text-sm text-gray-500">1,000.00 MT</span>
                  </div>
                </div>
                <Contador />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <GoInfo size={22} className="text-[#cecece]" />
                  <div className="flex flex-col">
                    <span className="font-medium">Pré-venda Normal</span>
                    <span className="text-sm text-gray-500">500.00 MT</span>
                  </div>
                </div>
                <Contador />
              </div>
            </div>
          </div>

          <button
            onClick={() => navigate(`/payment/${id}`)}
            className="bg-[#6A00FF] p-3 text-white w-full rounded-2xl font-medium"
            type="button"
          >
            Comprar Bilhete
          </button>

          <div className="flex flex-col gap-3">
            <h4 className="text-black font-bold">Comentários</h4>
            <div className="bg-[#f9f7f7] flex flex-row gap-2 p-3 rounded-lg">
              <div className="shrink-0">
                <img
                  className="w-12 h-12 rounded-full border border-[#6a00ff] object-cover"
                  src={cover}
                  alt="Sheila Nhamtumbo"
                />
              </div>
              <div className="w-full flex flex-col gap-1">
                <div className="flex flex-row justify-between items-center">
                  <h5 className="text-sm text-[#6a00ff]">Sheila Nhamtumbo</h5>
                  <span className="text-xs text-gray-400 font-light">24.06.2026</span>
                  <span className="text-gray-400">...</span>
                </div>
                <span className="text-xs">⭐⭐⭐⭐⭐</span>
                <p className="text-xs">
                  Adorei o evento, foi uma experiência incrível! A organização estava impecável!
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <NavBar />
    </>
  );
}

export default EventDetails;