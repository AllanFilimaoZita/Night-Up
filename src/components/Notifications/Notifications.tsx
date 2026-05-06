import type {TipoNotificacao} from "../../constants/notificacoesTypes";
import { CheckCircle, AlertCircle, AlertTriangle, X } from "lucide-react";
import "./Notification.css";

interface NotificationsProps{
    id: number;
    mensagem:string;
    tipo:TipoNotificacao;
    onFechar:(id: number) => void;
}

const Configuracao ={
    SUCESSO: {
        cor: "#6B21EB", label: "SUCESSO",
        icone: <CheckCircle size={18} />,
    },
    ERRO: {
        cor: "#ef4444", label: "ERRO",
        icone: <AlertCircle size= {18}/>,
    },
    ALERTA: {
        cor: "#eab308", label: "ALERTA",
        icone: <AlertTriangle size={18} />,
    },
};

export function Notification({id, mensagem, tipo, onFechar }: NotificationsProps){
    const{cor, label, icone} = Configuracao[tipo as keyof typeof Configuracao];
    return(
        <div className="notifications" style={{borderLeft: `4px solid ${cor}`}}>
            <div className="notificacao_icone" style={{color: cor}}>{icone}</div>
        <div className="notification_conteudo">
            <span className="notification_label" style={{color: cor}}>{label}</span>
            <p className="notification_mensagem">{mensagem}</p>
        </div>
        <button className="notification_fechar" onClick={() =>  onFechar(id)}>
            <X size={14} color ="#999999"/>
        </button>
         </div>
    );
}