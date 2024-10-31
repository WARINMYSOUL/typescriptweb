import {Link} from 'react-router-dom';

export const Header = () => {
    return (
        <header className="container bg-gray-800 p-7 text-white text-center rounded-lg mb-5">
            <nav className="flex justify-center">
                <ul className="flex list-none p-0 m-0">
                    <li className="mr-8">
                        <Link
                            className="text-white no-underline transition-all duration-300 text-lg hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50"
                            to="/"
                        >
                            Главная
                        </Link>
                    </li>
                    <li className="mr-8">
                        <Link
                            className="text-white no-underline transition-all duration-300 text-lg hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50"
                            to="/about"
                        >
                            Обо мне
                        </Link>
                    </li>
                    <li className="mr-8">
                        <Link
                            className="text-white no-underline transition-all duration-300 text-lg hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50"
                            to="/skills"
                        >
                            Навыки
                        </Link>
                    </li>
                    <li className="mr-8">
                        <Link
                            className="text-white no-underline transition-all duration-300 text-lg hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50"
                            to="/projects"
                        >
                            Проекты
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="text-white no-underline transition-all duration-300 text-lg hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/50"
                            to="/contact"
                        >
                            Контакты
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
