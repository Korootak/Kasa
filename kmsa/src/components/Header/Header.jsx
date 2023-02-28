import { Link } from 'react-router-dom';
import './header.css';
function Header() {
  return (
    <header>
       <div>
        <img  height={68} width={210} src={require('../../assets/logored.png')} alt="logo" />
       </div>
       <div>
          <ul className="nav-bar">
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/regardsto">A Propos</Link></li>
          </ul>
       </div> 
    </header>
  );
}

export default Header;
