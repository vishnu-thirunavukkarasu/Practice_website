import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface HeaderProps {
    title: string;
}

function Header({ title }: HeaderProps) {
    return (
        <header className="webheader">
            <div>

            </div>
            <p className="indiHeaderTitle">{title}</p>
        </header>
    );
}




export default Header;