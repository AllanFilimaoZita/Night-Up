import './App.css'

function App() {

  return (
    <>
      <h1>Login</h1>

      <form className="form">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" />

        <button type="button">Entrar</button>
      </form>
    </>
  )
}

export default App
