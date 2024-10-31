export const Projects = () => {
    const projects = [
        {
            title: '2D-платформер',
            description: 'Разработанный с использованием Unity, 2D-платформер с увлекательными уровнями и механикой прыжков. Игра включает в себя различные уровни сложности и коллекцию бонусов.',
            link: 'https://example.com/platformer',
        },
        {
            title: 'Текстовая RPG-игра',
            description: 'Интерактивная текстовая RPG-игра, разработанная на C++. Игроки могут выбирать свои действия и взаимодействовать с окружением, что влияет на развитие сюжета.',
            link: 'https://example.com/text-rpg',
        },
        {
            title: 'VR "Живое наследие"',
            description: 'Интерактивная платформа виртуальной реальности, позволяющая пользователям общаться в 3D-пространстве, создавать аватары и участвовать в мероприятиях. Пользователи могут взаимодействовать с объектами, обмениваться сообщениями и проводить встречи в виртуальных комнатах.',
            link: 'https://example.com',
        },
    ];

    return (
        <div className="container font-sans text-gray-800 ">
            <h2 className="text-4xl text-black mb-5 text-center">Проекты</h2>
            <ul className="list-none p-0 max-w-3xl mx-auto">
                {projects.map((project, index) => (
                    <li
                        key={index}
                        className="bg-white p-5 mb-4 rounded-lg shadow-md transition-transform transform hover:-translate-y-1"
                    >
                        <h3 className="text-2xl mb-2">{project.title}</h3>
                        <p className="text-lg leading-relaxed mb-2">{project.description}</p>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 font-bold hover:underline"
                        >
                            Посмотреть проект
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
