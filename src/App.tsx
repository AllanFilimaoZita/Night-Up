import './App.css'
import { NotificationContainer } from "./components/Notifications/NotificationContainer";
import { useNotifications } from "./hooks/useNotification";
/* import "./Notificattio.css"; */  

function App() {
  const {lista, notify, remover}= useNotifications()

  return (
    <>
    <div style={{
        minHeight:'100vh',
        background: '#0A0A0A',
        padding:'16px 24px',
        maxWidth:390,
        margin:'0 auto',
        
      }}>

        const estilo={
        }
        <h1 style={{color:'#ffffff', fontWeight: 'bold', fontSize:'28px'}}>Night-Up</h1>
        <h2 style={{color: '#888888', marginTop: '32px', textAlign: 'center', textTransform:'uppercase', fontSize:'14'}}>Notificações</h2>
        <NotificationContainer lista={lista} remover={remover} />
        <div className='Notificação' style={{display: 'flex', flexDirection:'column', gap:12, maxWidth: 360, marginTop:'98px'}}>
          <button onClick={() => notify("A tua inscrição foi confirmada.", "SUCESSO")}>Inscrição</button>
          <button onClick={() => notify("O seu pagamento foi realizado com sucesso.", "SUCESSO")}>Pagamento</button>
          <button onClick={() => notify("Não tem permissão para realizar esssa acção", "ERRO")}>Erro</button>
          <button onClick={() => notify("Login obrigatório.", "ALERTA")}>Alerta</button>
        </div>
    </div>
  
      
    </>
  )
}

export default App
