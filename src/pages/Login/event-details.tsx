import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import capa2 from "../../assets/img/capa2.jpeg";

function EventDetails() {
  return (
    <>
      <Header />

      <div className="w-screen h-screen bg-white fiexed justify-center items-center">

        <div className="h-1/3 ">
          <img
            className="h-full w-full object-top object-cover"
            src={capa2}
            alt="capa01"
          />
        </div>


        <div className="border-2 w-[95%] justify-center items-center flex flex-row h-screen overflow-y-scroll fixed top-60 left-0 p-3 bg-white">

            <div className="z-50 absolute ">

                <h1>Noite do adoço</h1>

            </div>




        </div>
      </div>
    </>
  );
}

export default EventDetails;
