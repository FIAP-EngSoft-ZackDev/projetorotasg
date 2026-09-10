import {Link} from 'react-router-dom'
import {Home, HomeIcon, Info, Phone} from 'lucide-react'

const NavBar = () => {
  return (
    <nav className='bg-blue-400 shadow-md'>                                                                 
      <div className='max-w-5xl mx-auto px-4'>
        <span className='text-xl font-bold text-white'>Projeto</span>
      </div>

      <div className='flex space-x-4 items-center'>
        <Link to="/" className='flex item-center px-3 py-2 font-medium text-white hover:text-blue-950'><Home size={15} />Home</Link>
        <Link to="/sobre" className='flex item-center px-3 py-2 font-medium text-white hover:text-blue-950'><Info size={15} />Sobre</Link>
        <Link to="/produto" className='flex item-center px-3 py-2 font-medium text-white hover:text-blue-950'>Produto</Link>
        <Link to="/contato" className='flex item-center px-3 py-2 font-medium text-white hover:text-blue-950'><Phone size={15} />Contato</Link>
      </div>
    </nav>
  )
}

export default NavBar