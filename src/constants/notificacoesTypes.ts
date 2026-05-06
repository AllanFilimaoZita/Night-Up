export const TIPOS ={
    SUCESSO: "SUCESSO",
    ERRO: "ERRO",
    ALERTA: "ALERTA",
} as const;
export type TipoNotificacao = typeof TIPOS[keyof typeof TIPOS];