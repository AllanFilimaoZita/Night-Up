import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MOCK_EVENTS } from "../../data/events";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";

function Payment() {
  const { id } = useParams();
  const navigate = useNavigate();
  const event = MOCK_EVENTS.find((e) => e.id === Number(id));

  const [paymentMethod, setPaymentMethod] = useState("");
  const [phone, setPhone] = useState("");

  if (!event) {
    return <p className="text-center mt-10">Evento não encontrado.</p>;
  }

  return (
    <>
      <Header />

      <div className="w-full min-h-screen bg-white pb-24">

        <div className="bg-gray-100 px-4 py-3 text-center">
          <p className="text-sm font-medium text-gray-700">
            Compra de bilhetes / <span className="font-bold">{event.title}</span>
          </p>
        </div>

        <div className="mx-auto max-w-[380px] px-4 pt-6 flex flex-col gap-6">

          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-bold text-gray-900">Resumo da compra</h2>
            <div className="flex flex-row gap-4 items-center">
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
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-lg font-bold text-gray-900">Método de Pagamento</h2>
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="w-full border border-gray-300 rounded-full px-4 py-3 text-sm text-gray-600 appearance-none focus:outline-none focus:ring-2 focus:ring-[#6A00FF]"
            >
              <option value="" disabled>Escolha seu Método de Pagamento</option>
              <option value="mpesa">M-Pesa</option>
              <option value="emola">e-Mola</option>
            </select>

            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+258 8* 910 6075"
              className="w-full border border-gray-300 rounded-full px-4 py-3 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#6A00FF]"
            />
          </div>

          <button
            onClick={() => navigate(`/confirmation/${id}`)}
            disabled={!paymentMethod || !phone}
            className="w-full bg-[#6A00FF] text-white py-4 rounded-full font-semibold text-base disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
            type="button"
          >
            Pagar agora
          </button>

        </div>
      </div>

      <NavBar />
    </>
  );
}

export default Payment;