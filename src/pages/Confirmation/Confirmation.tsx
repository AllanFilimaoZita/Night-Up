import { useParams, useNavigate } from "react-router-dom";
import { MOCK_EVENTS } from "../../data/events";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import { BsCheckCircle } from "react-icons/bs";
import { HiOutlineTicket } from "react-icons/hi";

function Confirmation() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = MOCK_EVENTS.find((e) => e.id === Number(id));

  if (!event) {
    return <p className="text-center mt-10">Evento não encontrado.</p>;
  }

  return (
    <>
      <Header />

      <div className="w-full min-h-screen bg-white pb-24 flex flex-col items-center justify-center px-4">

        <div className="mx-auto max-w-[380px] w-full flex flex-col items-center gap-6">

          {/* Ícone de sucesso */}
          <div className="flex flex-col items-center gap-3 text-center">
            <BsCheckCircle size={52} className="text-[#6A00FF]" />
            <h2 className="text-base font-bold uppercase">Compra Confirmada!</h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              O teu pedido foi feito com sucesso. Podes ver o teu bilhete na área{" "}
              <span className="font-semibold">"Meus Bilhetes"</span> dentro da app.
            </p>
          </div>

          {/* Resumo do bilhete */}
          <div className="w-full border border-gray-200 rounded-2xl p-4 flex flex-row gap-4 items-center">
            <img
              src={event.image}
              alt={event.title}
              className="w-24 h-24 rounded-xl object-cover shrink-0"
            />
            <div className="flex flex-col gap-1">
              <span className="text-sm font-semibold text-gray-700 uppercase">
                Normal Pré Venda
              </span>
              <span className="text-base font-bold text-gray-900">1,000.00 Mts</span>
              <span className="text-sm text-gray-500">02 Bilhetes</span>
              <span className="text-sm text-gray-700">
                Total: <span className="font-bold">2,000.00 Mts</span>
              </span>
            </div>
          </div>

          {/* Botão baixar ticket */}
          <button
            className="w-full bg-[#6A00FF] text-white py-4 rounded-full font-semibold text-base flex items-center justify-center gap-2"
            type="button"
          >
            <HiOutlineTicket size={20} />
            Baixar Ticket
          </button>

          {/* Link meus bilhetes */}
          <p className="text-sm text-gray-600">
            Ir aos Meus{" "}
            <button
              onClick={() => navigate("/tickets")}
              className="text-[#6A00FF] font-semibold"
              type="button"
            >
              Bilhetes
            </button>
          </p>

        </div>
      </div>

      <NavBar />
    </>
  );
}

export default Confirmation;