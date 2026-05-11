import capa1 from "../assets/img/capa1.png";
import capa2 from "../assets/img/capa2.png";
import capa3 from "../assets/img/capa3.png";
import capa4 from "../assets/img/capa4.png";

export interface Event {
  id: number;
  image: string;
  title: string;
  location: string;
  price: string;
  date: string;
}

export const MOCK_EVENTS: Event[] = [
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
    title: "MASTER CLASS",
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