import {Link} from 'react-router-dom';
import '../styles/components/Header.scss';

export const Header = () => {
    return (
        <header className={'header'}>
            <nav className={'nav'}>
                <ul className={'ul'}>
                    <li className={'li'}>
                        <Link className={'link'} to="/">Главная</Link>
                    </li>
                    <li className={'li'}>
                        <Link className={'link'} to="/about">Обо мне</Link>
                    </li>
                    <li className={'li'}>
                        <Link className={'link'} to="/skills">Навыки</Link>
                    </li>
                    <li className={'li'}>
                        <Link className={'link'} to="/projects">Проекты</Link>
                    </li>
                    <li className={'li'}>
                        <Link className={'link'} to="/contact">Контакты</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};