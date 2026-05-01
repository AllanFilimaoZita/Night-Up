import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import imagem from "../../assets/img/capa2.jpeg";
import cover from "../../assets/img/img.png";
import brand from "../../assets/img/brand.jpeg";
import Contador from "../../components/Contador";

import { CiLocationOn } from "react-icons/ci";
import { IoCalendarOutline } from "react-icons/io5";
import { GoInfo } from "react-icons/go";

function EventDetails() {
  return (
    <>
      <Header />
      <NavBar />

      <div className=" w-screen h-screen flex flex-col items-center justify-start">
        <div className=" w-full w-screen h-[300px] ">
          <img
            className="w-full h-full object-cover object-top"
            src={imagem}
            alt=""
            title="capa do evento"
          />
        </div>

        <div className=" fixed left-0 over -full max-w-[380px] h-auto bg-white rounded-2xl relative -top-20 p-6 flex flex-col gap-2">
          <h4 className="uppercase text-xl font-medium">
            Noite do adoço Tshunami
          </h4>

          <div className="flex flex-col gap-1">
            <div className="flex">
              <CiLocationOn size={28} className="text-[#6A00FF] " />
              <span className="text-sm text-black-500">
                Rua do Adoço, 123 - Centro
              </span>
            </div>

            <div className="flex">
              <IoCalendarOutline size={28} className="text-[#6A00FF]" />
              <span className="text-sm text-black-500">
                Sabado,9 maio de 2026 | 21:30H
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <h5 className="text-black font-semibold ">Descrição do evento</h5>

            <p className="text-justify font-light text-sm">
              Conduzida por Stélio Mondlane, também conhecido
              como TheDrummerBeast, esta aula especial irá abordar técnicas
              essenciais, coordenação, criatividade rítmica, performance ao vivo
              e dicas práticas para evolução no instrumento.
            </p>
          </div>
          <div>
            <div>
              <h4 className="text-black font-semibold pb-3">
                Artistas Convidados
              </h4>
            </div>
            <div className="flex flex-row gap-2">
              <div className="">
                <img
                  className=" w-15 h-15 rounded-full"
                  src={cover}
                  alt="Kabza de Small "
                />
                <span className="text-xs">Kabza de Small</span>
              </div>
              <div className="">
                <img
                  className=" w-15 h-15 rounded-full"
                  src={cover}
                  alt="Kabza de Small "
                />
                <span className="text-xs">Kabza de Small</span>
              </div>
              <div className="">
                <img
                  className=" w-15 h-15 rounded-full"
                  src={cover}
                  alt="Kabza de Small "
                />
                <span className="text-xs text-center">Kabza de Small</span>
              </div>
              <div className="">
                <img
                  className=" w-15 h-15 rounded-full"
                  src={cover}
                  alt="Kabza de Small "
                />
                <span className="text-sm/6">Kabza de Small</span>
              </div>
            </div>

            <div>
              <div className="flex flex-col pt-5">
                <h4 className="text-black font-semibold pb-3">
                  Patrocinadores
                </h4>
              </div>

              <div className="flex flx-row gap-2">
                <div>
                  <img className="w-15 h-15 rounded-full" src={brand} alt="" />
                  <span className="text-xs">Vodacom</span>
                </div>

                <div>
                  <img className="w-15 h-15 rounded-full" src={brand} alt="" />
                  <span className="text-xs">Vodacom</span>
                </div>

                <div>
                  <img className="w-15 h-15 rounded-full" src={brand} alt="" />
                  <span className="text-xs">Vodacom</span>
                </div>

                <div>
                  <img className="w-15 h-15 rounded-full" src={brand} alt="" />
                  <span className="text-xs">Vodacom</span>
                </div>

                <div>
                  <img className="w-15 h-15 rounded-full" src={brand} alt="" />
                  <span className="text-xs">Vodacom</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full pt-5">
            <h4 className="text-black font-bold ">Bilhetes</h4>

            <div className="flex flex-col gap-4  p-2 ">
              
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

          <div className="flex w-full pb-5 ">
            <button className="bg-[#6A00FF] p-2 text-white w-full rounded-2xl " type="button">
              Comprar Bilhete
            </button>
          </div>



          <div className="flex flex-col">
            <div>
              <h4 className="text-black font-bold">Comentarios</h4>
            </div>

            <div className="bg-[#f9f7f7] flex flex-row gap-2 p-3 rounded-lg">
              <div className="itens-start">
                <img
                  className="w-20 h-15 rounded-full border border-[#6a00ff]"
                  src={cover}
                  alt=""
                />
              </div>

              <div className="w-full flex flex-col ">
                <div className="flex flex-row justify-between">
                  <div>
                    <h5 className="text-sm text-[#6a00ff]">Sheila Nhamtumbo</h5>
                  </div>

                  <div>
                    <span className="text-xs text-gray- font-light">
                      24.06.2026
                    </span>
                  </div>

                  <div>
                    <span>...</span>
                  </div>
                </div>

                <div>
                  <span className="text-xs">⭐⭐⭐⭐⭐⭐⭐⭐</span>
                </div>

                <div>
                  <p className="text-xs">
                    Adorei o evento, foi uma experiência incrível! A organização
                    estava impecável!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EventDetails;
