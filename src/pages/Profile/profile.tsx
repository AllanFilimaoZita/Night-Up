import '../../App.css';
import { CircleUser, Lock, Headphones, HelpCircle, MessageCircleMore, TriangleAlert } from "lucide-react";
import { FaRegBell, FaLanguage, FaAngleLeft } from "react-icons/fa";
import Perfil from '../../assets/perfil.png';

function Profile() {
    return (
        <div className="p-[10px] font-[Gill_Sans,_Calibri,_'Trebuchet_MS',_sans-serif]">

            <header className="flex items-center justify-between pb-[25px]">
                <div className="flex items-center gap-1">
                    <FaAngleLeft size={20} />
                    <a href="" className="no-underline text-black transition-colors duration-200 hover:text-[rgb(172,79,79)]">Voltar</a>
                </div>
                <h3 className="text-base font-semibold">Perfil</h3>
                <span></span>
            </header>

            <section className="flex items-center justify-start bg-[rgba(153,153,153,0.041)] rounded-lg border border-[rgba(0,0,0,0.123)] gap-5 p-[10px] pl-[25px]">
                <img src={Perfil} alt="foto" className="w-[70px] h-[70px] object-fill rounded-full outline outline-2 outline-[rgb(209,45,209)]" />
                <div className="info">
                    <h3 className="text-base font-semibold">Sheila Nina</h3>
                    <p className="text-sm">Sheilaninamanhica2.@gmail.com</p>
                </div>
            </section>

            <h4 className="p-[10px] text-sm font-semibold">Dados da conta</h4>
            <section className="bg-[rgba(153,153,153,0.055)] border border-[rgba(0,0,0,0.123)] rounded-lg p-[15px] flex flex-col gap-[15px]">

                <div className="flex gap-[15px] items-center transition-colors duration-200 hover:text-[rgb(172,79,79)] group">
                    <CircleUser size={30} />
                    <a href="" className="no-underline text-black transition-colors duration-200 group-hover:text-[rgb(172,79,79)]">Gerir Perfil</a>
                </div>
                <hr className="border border-[rgba(0,0,0,0.034)]" />

                <div className="flex gap-[15px] items-center transition-colors duration-200 hover:text-[rgb(172,79,79)] group">
                    <Lock size={30} />
                    <a href="" className="no-underline text-black transition-colors duration-200 group-hover:text-[rgb(172,79,79)]">Senha da Conta</a>
                </div>
                <hr className="border border-[rgba(0,0,0,0.034)]" />

                <div className="flex gap-[15px] items-center transition-colors duration-200 hover:text-[rgb(172,79,79)] group">
                    <FaRegBell size={30} />
                    <a href="" className="no-underline text-black transition-colors duration-200 group-hover:text-[rgb(172,79,79)]">Notificações</a>
                </div>
                <hr className="border border-[rgba(0,0,0,0.034)]" />

                <div className="flex gap-[15px] items-center transition-colors duration-200 hover:text-[rgb(172,79,79)] group">
                    <FaLanguage size={30} />
                    <a href="" className="no-underline text-black transition-colors duration-200 group-hover:text-[rgb(172,79,79)]">Idioma</a>
                </div>
                <hr className="border border-[rgba(0,0,0,0.034)]" />
            </section>

            <h4 className="p-[10px] text-sm font-semibold">Suporte (Help & Support)</h4>
            <section className="bg-[rgba(153,153,153,0.055)] border border-[rgba(0,0,0,0.123)] rounded-lg p-[15px] flex flex-col gap-[15px]">

                <div className="flex gap-[15px] items-center transition-colors duration-200 hover:text-[rgb(172,79,79)] group">
                    <Headphones size={30} />
                    <a href="" className="no-underline text-black transition-colors duration-200 group-hover:text-[rgb(172,79,79)]">Central de Ajuda</a>
                </div>
                <hr className="border border-[rgba(0,0,0,0.034)]" />

                <div className="flex gap-[15px] items-center transition-colors duration-200 hover:text-[rgb(172,79,79)] group">
                    <HelpCircle size={30} />
                    <a href="" className="no-underline text-black transition-colors duration-200 group-hover:text-[rgb(172,79,79)]">Perguntas frequentes</a>
                </div>
                <hr className="border border-[rgba(0,0,0,0.034)]" />

                <div className="flex gap-[15px] items-center transition-colors duration-200 hover:text-[rgb(172,79,79)] group">
                    <TriangleAlert size={30} />
                    <a href="" className="no-underline text-black transition-colors duration-200 group-hover:text-[rgb(172,79,79)]">Reportar problema</a>
                </div>
                <hr className="border border-[rgba(0,0,0,0.034)]" />

                <div className="flex gap-[15px] items-center transition-colors duration-200 hover:text-[rgb(172,79,79)] group">
                    <MessageCircleMore size={30} />
                    <a href="" className="no-underline text-black transition-colors duration-200 group-hover:text-[rgb(172,79,79)]">Feedback / Sugestões</a>
                </div>
                <hr className="border border-[rgba(0,0,0,0.034)]" />
            </section>

        </div>
    );
}

export default Profile;