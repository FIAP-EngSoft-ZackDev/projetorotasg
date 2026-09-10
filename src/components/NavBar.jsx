import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className='bg-blue-400 shadow-md'>                                                                 
      <div className='max-w-5xl mx-auto px-4'>
        <span className='text-xl font-bold text-white'>Projeto</span>
      </div>

      <div className='flex space-x-4 items-center'>
        <Link to="/" className='flex item-center px-3 py-2 font-medium text-white hover:text-blue-950'>Home</Link>
        <Link to="/sobre" className='flex item-center px-3 py-2 font-medium text-white hover:text-blue-950'>Sobre</Link>
        <Link to="/produto" className='flex item-center px-3 py-2 font-medium text-white hover:text-blue-950'>Produto</Link>
        <Link to="/contato" className='flex item-center px-3 py-2 font-medium text-white hover:text-blue-950'>Contato</Link>
      </div>
    </nav>
  )
}

export default NavBar