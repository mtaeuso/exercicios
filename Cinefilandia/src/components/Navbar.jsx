import { Link, Outlet } from 'react-router-dom'
import {BiCameraMovie, BiSearchAlt2} from 'react-icons/bi'


const Navbar  = () => {
    
    return (

    <nav id="navbar"> 
     <h2> 
       <Link to="/"> <BiCameraMovie /> Cinefilandia</Link>
     </h2>

    <form>
        <input type="text" placeholder="Procure aqui"/>
        <button type="submit"> <BiSearchAlt2 /> </button>
    </form>

    <Outlet />
  </nav>

    );
};

export default Navbar;