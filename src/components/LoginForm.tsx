import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoKeyOutline } from "react-icons/io5";




function LoginForm() {
  return (
    <>

   
      <div className=" bg-black min-h-screen px-4 flex flex-col justify-center items-center text-white">
           
        <div className=" bg">
          <h1 className="text-[30px] pb-4">Login</h1>
        </div>
        <div className="bg-[#11162A] w-full  p-4 rounded-lg h-auto">
          <div className="">
            <form className="flex flex-col gap-2 ">

                <div className="relative  flex  flex-col gap-3" >
                    <HiOutlineMail size={26} className=" absolute left-3 top-4" />

                    <input
                className="border-2 border-[#6F6F6F]  w-full rounded-lg p-4 pl-12"
                type="text"
                id="email"
                name="email"
                placeholder="ex:webdevstar@gmail.com"
            
              />

                <div className="relative w-full">
                    <IoKeyOutline size={24}  className="absolute left-3 top-4"/>


                     <input
                className="border-2 border-[#6F6F6F] w-full rounded-lg p-4 pl-12"
                type="password"
                id="password"
                placeholder="*************"
              />

                
              
              <div>


              </div>
              </div>
              </div>
             
              <div className="flex justify-between pb-5 pt-3">
                <div className="flex gap-2 justify-center items-center">
                  <input className="size-4" type="checkbox" name="forget" id="forget" />
                  <label htmlFor="forget" className="text-[16px]">Lembrar-me</label>
                </div>

                <div className="recover">
                  <a className="hover:text-[#d9d3e17f]  " href="#">Repor palavra passe</a>
                </div>
              </div>

            </form>
          </div>
        </div>
        <div className="pb-10 pt-5 px-4 w-screen  justify-center items-center ">
          <input
            className="bg-[#6A00FF]  cursor-pointer hover:bg-[#6a00ff7f] transition  rounded-full p-4 w-full "
            type="button"
            value="Iniciar Sessão"
          />
        </div>

        <div className="flex gap-[2vw] w-full justify-center pb-8">
          <div className="bg-[#1B1B1E] flex p-4 rounded-full grid-cols-2 gap-15 items-center w-full   cursor-pointer hover:bg-[#2a2a2e] transition">
            <FcGoogle size={30} />
            <div>
              <p>Google</p>
            </div>
          </div>
          <div className="bg-[#1B1B1E] flex p-4 rounded-full grid-cols-2 gap-11 w-full  items-center  cursor-pointer hover:bg-[#2a2a2e] transition">
            <FaFacebook size={30} />
            <div>
              <p>Facebook</p>
            </div>
          </div>
        </div>

        <div className="no-account">
          <p>
            Ainda não tens conta?{" "}
            <a className="text-[#6A00FF] hover:text-[#d9d3e17f] transition" href="#">
              Criar Conta
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
