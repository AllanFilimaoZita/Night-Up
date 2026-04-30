import './App.css'
import './index.css'
import Header from './components/Header'
// import LoginForm from './pages/Login/LoginForm'
// import Eventdetails from './pages/Login/event-details'
import  NavBar  from "./components/NavBar";
import Home from './pages/Home/Home'


function App() {

  return (
    <>
      <Header></Header>
      <Home></Home>
      <NavBar></NavBar>
    </>
  )
}

export default App
