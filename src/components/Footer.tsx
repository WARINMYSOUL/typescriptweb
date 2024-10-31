import '../styles/components/Footer.scss';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3>Контактная информация</h3>
                <p>Email: <a href="mailto:lunev.avy@students.dvfu.ru">lunev.avy@students.dvfu.ru</a></p>
                <p>Телефон: <a href="tel:+89842979060">+89842979060</a></p>

                <h3>Социальные сети</h3>
                <ul className="social-links">
                    <li>
                        <a href="https://vk.com/myironcurtain" target="_blank" rel="noopener noreferrer">VK</a>
                    </li>
                    <li>
                        <a href="https://github.com/WARINMYSOUL" target="_blank" rel="noopener noreferrer">GitHub</a>
                    </li>
                    <li>
                        <a href="https://t.me/WaR_IN_MY_SOUL" target="_blank" rel="noopener noreferrer">Telegram</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};