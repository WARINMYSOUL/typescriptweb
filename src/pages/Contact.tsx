export const Contact = () => {
    return (
        <div className="contact">
            <h1>Контакты</h1>
            <p>Если у вас есть вопросы, не стесняйтесь обращаться!</p>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Имя:</label>
                    <input type="text" id="name" placeholder="Ваше имя" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder="Ваш email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Сообщение:</label>
                    <textarea id="message" placeholder="Ваше сообщение" required></textarea>
                </div>
                <button type="submit">Отправить</button>
            </form>
        </div>
    );
};