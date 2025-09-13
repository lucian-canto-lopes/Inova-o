import { FaChevronDown } from "react-icons/fa";
import '../css/SideBar.css';

interface Props {
  isCollapsed: boolean;
}

function SideBar({ isCollapsed }: Props) {
  return (
    <div className={`SideBar ${isCollapsed ? 'sidebar--collapsed' : ''}`}>
      <div>
        <div className="SB-Title">
          <h1>Dimensões</h1>
          <FaChevronDown />
        </div>
        <ul>
          <li>Disciplinas</li>
          <li>Negócios</li>
          <li>Eventos</li>
          <li>Motores</li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;