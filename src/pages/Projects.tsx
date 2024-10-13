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
        <div className="projects">
            <h2>Проекты</h2>
            <ul>
                {projects.map((project, index) => (
                    <li key={index} className="project-item">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">Посмотреть проект</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
