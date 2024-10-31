export const Contact = () => {
    return (
        <div className="container font-sans text-gray-800  max-w-lg mx-auto mb-5">
            <h1 className="text-4xl text-black mb-5 text-center">Контакты</h1>
            <p className="text-lg mb-5 text-center">
                Если у вас есть вопросы, не стесняйтесь обращаться!
            </p>
            <form className="bg-white p-5 rounded-lg shadow-md">
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-1">Имя:</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Ваше имя"
                        required
                        className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-1">Email:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Ваш email"
                        required
                        className="w-full p-2 border border-gray-300 rounded-md shadow-sm"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block mb-1">Сообщение:</label>
                    <textarea
                        id="message"
                        placeholder="Ваше сообщение"
                        required
                        className="w-full p-2 border border-gray-300 rounded-md shadow-sm min-h-[100px] resize-y"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full p-3 rounded-md bg-blue-500 text-white text-lg hover:bg-black transition-colors"
                >
                    Отправить
                </button>
            </form>
        </div>
    );
};
