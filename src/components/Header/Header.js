import './header.scss'
import Logo from '../../assets/logo.png'
import Navbar from '../Navbar/Navbar'

export default function Header() {
  return (
    <header className='header'>
      <h1>
        <img src={Logo} alt="kasa, location d'appartements"></img>
      </h1>
      <Navbar />
    </header>
  )
}
