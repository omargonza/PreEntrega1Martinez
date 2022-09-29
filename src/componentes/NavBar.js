import CarWidget from "./CarWidget"
import Mgverde from "./Mgverde"

function NavBar(){
    return(
        
        <>
        <header>
        <a href="#">      
              <Mgverde/>     
        </a>
        <ul>
            <li>
                <a href="#">INICIO</a>
            </li>
            <li>
                <a href="#">PRODUCTOS</a>
            </li>       
        </ul>
        <CarWidget/>
        <span className="carrito">0</span>
        </header>
        </>

        
    )
}
export default NavBar;