// components/EventCard/index.tsx

// Ícones
import { FaRegCalendarAlt } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { HiOutlineTicket } from "react-icons/hi";

// Tipos
export interface EventCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  date: string;
  className?: string;
}

// Subcomponente: linha de metadado (ícone + texto)
interface EventMetaItemProps {
  icon: React.ReactNode;
  label: string;
  ariaLabel: string;
}

function EventMetaItem({ icon, label, ariaLabel }: EventMetaItemProps) {
  return (
    <div className="flex items-center gap-3" aria-label={ariaLabel}>
      <span className="text-gray-500" aria-hidden="true">
        {icon}
      </span>
      <p className="text-sm font-semibold text-gray-700">{label}</p>
    </div>
  );
}

// Componente principal
function EventCard({
  image,
  title,
  location,
  price,
  date,
  className = "",
}: EventCardProps) {
  return (
    <article
      className={`mx-auto max-w-md overflow-hidden rounded-3xl bg-white shadow-2xl ${className}`}
    >
      <img
        src={image}
        alt={title}
        className="h-[210px] w-full object-cover p-4 sm:h-[192px] sm:p-5"
      />

      <div className="space-y-6 p-10">
        <h2 className="text-xl font-bold leading-tight text-gray-900">
          {title}
        </h2>

        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <EventMetaItem
              icon={<FiMapPin size={24} />}
              label={location}
              ariaLabel={`Local: ${location}`}
            />
            <EventMetaItem
              icon={<HiOutlineTicket size={24} />}
              label={price}
              ariaLabel={`Preço: ${price}`}
            />
          </div>

          <EventMetaItem
            icon={<FaRegCalendarAlt size={24} />}
            label={date}
            ariaLabel={`Data: ${date}`}
          />
        </div>
      </div>
    </article>
  );
}

export default EventCard;