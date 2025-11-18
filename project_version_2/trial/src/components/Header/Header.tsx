import './Header.scss';

interface HeaderProps {
    title: string;
}

function Header({ title }: HeaderProps) {
    return (
        <header className="webheader">
            <p className="indiHeaderTitle">{title}</p>
        </header>
    );
}




export default Header;