import { CiSearch } from "react-icons/ci";
import { PiSlidersHorizontalDuotone } from "react-icons/pi";

function Home() {

    return (

        <main className="min-h-screen w-full bg-background">
            <header className="flex mx-auto px-8 py-12 mx-w-7xl justify-between">
                <div className="flex flex-row items-center gap-2">
                    <CiSearch size={30} /><input className="border-1 rounded-xl w-64 p-2" type="search" name="search" id="search" placeholder="Procurar Eventos..." />
                </div>
                <button className="bg-gray-100 p-2 rounded-lg border-solid border-1">
                    <PiSlidersHorizontalDuotone size={24} />
                </button>
            </header>

            <section>
                <div className="flex flex-row items-center justify-between mx-auto px-8 mx-w-7xl">
                    <h2 className="text-2xl font-bold">Explorar eventos</h2>

                    <a href="#" className="text-gray-500">
                        ver todos
                    </a>
                </div>

                <div>
                    
                </div>
            </section>
        </main>

    )

}

export default Home