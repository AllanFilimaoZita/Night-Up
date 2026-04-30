// pages/Home/index.tsx

// React
import { useCallback, useState } from "react";

// Ícones
import { CiSearch } from "react-icons/ci";
import { PiSlidersHorizontalDuotone } from "react-icons/pi";

// Componentes
import EventCard, { type EventCardProps } from "../../components/EventCard";

// Assets
import capa1 from "../../assets/img/capa1.png";
import capa2 from "../../assets/img/capa2.png";
import capa3 from "../../assets/img/capa3.png";
import capa4 from "../../assets/img/capa4.png";

// Tipos
type Event = EventCardProps & { id: number };

// Dados mockados (mover para: src/data/events.ts)
const MOCK_EVENTS: Event[] = [
  {
    id: 1,
    image: capa1,
    title: "NOITE DO ADOÇO TSHUNAMI",
    location: "A Fazenda",
    price: "A partir de 800MT",
    date: "Sábado, 9 de maio de 2026",
  },
  {
    id: 2,
    image: capa2,
    title: "NOITE DO ADOÇO TSHUNAMI",
    location: "A Fazenda",
    price: "A partir de 800MT",
    date: "Sábado, 9 de maio de 2026",
  },
  {
    id: 3,
    image: capa3,
    title: "NOITE DO ADOÇO TSHUNAMI",
    location: "A Fazenda",
    price: "A partir de 800MT",
    date: "Sábado, 9 de maio de 2026",
  },
  {
    id: 4,
    image: capa4,
    title: "NOITE DO ADOÇO TSHUNAMI",
    location: "A Fazenda",
    price: "A partir de 800MT",
    date: "Sábado, 9 de maio de 2026",
  },
];

// Subcomponente: SearchBar
interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onFilterClick: () => void;
}

function SearchBar({ value, onChange, onFilterClick }: SearchBarProps) {
  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto max-w-2xl px-4 pb-4 pt-6">
        <div className="relative">
          <CiSearch
            size={24}
            aria-hidden="true"
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="search"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Procurar eventos..."
            aria-label="Procurar eventos"
            className="w-full rounded-2xl bg-gray-100 py-3.5 pl-12 pr-12 text-base focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button
            onClick={onFilterClick}
            aria-label="Abrir filtros"
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-gray-700"
          >
            <PiSlidersHorizontalDuotone size={24} aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}

// Subcomponente: SectionHeader
interface SectionHeaderProps {
  title: string;
  linkLabel: string;
  onLinkClick: () => void;
}

function SectionHeader({ title, linkLabel, onLinkClick }: SectionHeaderProps) {
  return (
    <div className="mb-5 mt-6 flex items-center justify-between">
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      <button
        onClick={onLinkClick}
        className="text-sm font-medium text-orange-600 hover:underline"
      >
        {linkLabel}
      </button>
    </div>
  );
}

// Componente principal
function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterClick = useCallback(() => {
    console.log("Abrir filtros");
  }, []);

  const handleViewAll = useCallback(() => {
    console.log("Ver todos os eventos");
  }, []);

  const filteredEvents = MOCK_EVENTS.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50 pb-12">
      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        onFilterClick={handleFilterClick}
      />

      <div className="mx-auto max-w-2xl px-4">
        <SectionHeader
          title="Explorar eventos"
          linkLabel="Ver todos"
          onLinkClick={handleViewAll}
        />

        <ul className="grid grid-cols-1 gap-4" aria-label="Lista de eventos">
          {filteredEvents.map((event) => (
            <li key={event.id}>
              <EventCard
                id={event.id}
                image={event.image}
                title={event.title}
                location={event.location}
                price={event.price}
                date={event.date}
              />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Home;