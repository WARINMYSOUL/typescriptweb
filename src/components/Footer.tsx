export const Footer = () => {
    return (
        <footer className="container bg-gray-800 text-white p-5 text-center w-full rounded-lg">
            <div className="mb-5">
                <h3 className="mb-3 text-cyan-400">Контактная информация</h3>
                <p className="inline-block mr-4">
                    Email: <a href="mailto:lunev.avy@students.dvfu.ru"
                              className="text-white hover:text-cyan-400 hover:underline">lunev.avy@students.dvfu.ru</a>
                </p>
                <p className="inline-block">
                    Телефон: <a href="tel:+89842979060"
                                className="text-white hover:text-cyan-400 hover:underline">+89842979060</a>
                </p>
            </div>

            <div>
                <h3 className="mb-3 text-cyan-400">Социальные сети</h3>
                <ul className="flex justify-center space-x-5">
                    <li>
                        <a href="https://vk.com/myironcurtain" target="_blank" rel="noopener noreferrer"
                           className="text-white hover:text-cyan-400 hover:underline">VK</a>
                    </li>
                    <li>
                        <a href="https://github.com/WARINMYSOUL" target="_blank" rel="noopener noreferrer"
                           className="text-white hover:text-cyan-400 hover:underline">GitHub</a>
                    </li>
                    <li>
                        <a href="https://t.me/WaR_IN_MY_SOUL" target="_blank" rel="noopener noreferrer"
                           className="text-white hover:text-cyan-400 hover:underline">Telegram</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};
