import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
    title: string;
}

function Header({ title }: HeaderProps) {
    return (
        <header className="webheader">
            <div>
                <button><FontAwesomeIcon icon={faHome} style={{ marginRight: "8px" }} />
                    Home</button>
            </div>
            <p className="indiHeaderTitle">{title}</p>
        </header>
    );
}




export default Header;