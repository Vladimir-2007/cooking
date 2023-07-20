import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'
import SearchBar from '../SearchBar/SearchBar'
import './Navbar.css'

const Navbar = () => {

   const { color } = useTheme()

   return (
      <div className='navbar' style={ { background: color } }>
         <nav >
            <Link to='/' className='brand'>Cooking Svem</Link>
            <SearchBar />
            <Link to='/create'>Create Recipe</Link>
         </nav>
      </div>
   )
}

export default Navbar