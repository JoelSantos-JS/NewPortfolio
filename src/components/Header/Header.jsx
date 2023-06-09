import NavBar from './components/NavBar'
import Socials from './components/Socials'
import glasses from '../../assets/img/logos/glasses.svg'


function Header() {
  return (
    <header className='h-20 flex bg-black items-center fixed top-0 w-full z-10 text-white'>
        <div className='container mx-auto flex justify-between items-center h-full lg:justify-between'>
            <span className='w-1/4 hidden md-block lg:block text-4xl' >  Joel Santos</span>
            <img src={glasses} alt="" className='w-1/4 lg:hidden md-block lg:block' />
          <NavBar/>
          <Socials/>

        </div>
    </header>
  )
}

export default Header