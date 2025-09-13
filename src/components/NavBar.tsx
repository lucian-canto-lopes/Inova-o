import { FaBars, FaMagnifyingGlass } from "react-icons/fa6";
import "../css/NavBar.css";

interface Props {
  toggleSideBar: () => void;
}

function NavBar({ toggleSideBar }: Props) {
  return (
    <div className="NavBar">
      <FaBars onClick={toggleSideBar} />
      <div className="search-bar">
        <input type="text" name="search-bar" id="search-bar" placeholder="Procurar..." />
        <FaMagnifyingGlass />
      </div>
      <div className="user-profile-icon">
        <img src={'/default-avatar-profile-icon.webp'} alt="Ícone de Usuário" />
      </div>
    </div>
  );
}

export default NavBar;