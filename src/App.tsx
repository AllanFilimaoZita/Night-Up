
import './App.css'
import './pages/profile.tsx'
import { CircleUser } from "lucide-react";
import { Lock } from "lucide-react";
import { FaRegBell } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa";
import Perfil from './assets/perfil.png';
import { FaAngleLeft } from "react-icons/fa";
import { Headphones, HelpCircle, MessageCircleMore } from "lucide-react";
import { TriangleAlert } from "lucide-react";




function profile () {

  return (
    <>

      <header>

        <div className="icon">
          <FaAngleLeft size={20} />
          <a href="">Voltar</a>
        </div>

        <h3>Perfil</h3>

        
        <span></span>


      </header>
        {/*  */}
      <section className='profile-info'>

        <img src={Perfil} alt="fto" />

        <div className="info">

          <h3>Sheila Nina</h3>
          <p>Sheilaninamanhica2.@gmail.com</p>


        </div>


      </section>
        {/*  */}



        {/*  */}


          <h4>Dados da conta</h4>
        <section className='Dados-conta'>

          <div className="dado">
            
              <CircleUser size={30} /><a href=""> Gerir Perfil</a>
              
              
              </div>
          <hr />

          
          <div className="dado"> <Lock size={30} /> <a href=""> Senha da Conta</a> </div>
          <hr />
          <div className="dado"> <FaRegBell size={30} /><a href="">Notificacoes</a></div>
          <hr />
          <div className="dado"> <FaLanguage size={30} /><a href="">Idioma</a></div>
          <hr />
      

  
        </section>
          {/*  */}
          {/*  */}
          <h4>Suporte (Help & Support)</h4>
        <section className='Suporte' >
          <div className="dado"><Headphones size={30} /> <a href="">Central de Ajuda</a></div>
          <hr />
          <div className="dado"><HelpCircle size={30} /><a href="">Perguntas frequentes</a>  </div>
          <hr />

          <div className="dado"><TriangleAlert size={30} /><a href="">Reportar problema</a></div>
          <hr />
          <div className="dado"> <MessageCircleMore size={30}/><a href="">Feedback / Sugestoes</a></div>
          <hr />


        </section>
          {/*  */}
      


  



      
      
    </>
  )
}

export default profile

