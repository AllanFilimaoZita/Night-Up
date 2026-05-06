import { useState, useCallback }  from "react";
import {TIPOS} from "../constants/notificacoesTypes";
import type {TipoNotificacao} from "../constants/notificacoesTypes";

interface Notificacao{
    id: number;
    mensagem: string;
    tipo: TipoNotificacao;
    duracao: number;
}
export function useNotifications(){
    const [lista, setLista]  = useState<Notificacao[]>([]);

    const notify= useCallback((
        mensagem: string,
        tipo: TipoNotificacao,
        duracao: number =9000) =>{
            if(!mensagem) return;
            if(!Object.values(TIPOS).includes(tipo)) return;
            const id = Date.now();

            setLista(prev =>[...prev,{id, mensagem, tipo, duracao}]);

            setTimeout(()=>{
                setLista(prev => prev.filter(n=>n.id !==id ));
            }, duracao);
        },[]);
        const remover = useCallback((id: number) => {
            setLista(prev => prev.filter(n => n.id !==id));
        },[]);
        return{lista, notify, remover };
    
}