import {Notification} from "./Notifications";
import type {TipoNotificacao} from "../../constants/notificacoesTypes";

interface Props{
    lista: {id: number; mensagem: string; tipo: TipoNotificacao; duracao: number}[];
    remover: (id: number)=>void;
}

export function NotificationContainer( {lista, remover}: Props){


    return(
        <div style={{
            /* position:"fixed", top:16, right:16,
            zIndex:9999, display: "flex",
            flexDirection:"column",
            gap:8, */
            width: '100%',
            display: 'flex',
            gap:10,
            padding:'0 16px',
            flexDirection:'column',
        }}>
            {lista.map(n=>(<Notification key={n.id}
            id={n.id}
            mensagem={n.mensagem}
            tipo={n.tipo}
            onFechar={remover}
            />
            ))}
        </div>
    );
}