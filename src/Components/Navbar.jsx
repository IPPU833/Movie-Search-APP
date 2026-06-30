import { Link } from "react-router-dom"; 


function Navbar(){

    return(
        <>
          <nav className="navbar">
        <Link className="logo" to="/" data-discover="true">
          <h2>🎬 Movie Explorer</h2>
        </Link>
        <Link to="/" data-discover="true">Home</Link>
      </nav>
      </>

    )

}
export default Navbar; 