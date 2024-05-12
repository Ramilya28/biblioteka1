import React, { useState } from 'react';
import './index.css';

function HeaderFooter() {
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false);
  const [isRegisterFormVisible, setIsRegisterFormVisible] = useState(false);

  const handleLoginButtonClick = () => {
    setIsLoginFormVisible(true);
    setIsRegisterFormVisible(false); // Убедитесь, что форма регистрации скрыта при отображении формы входа
  };

  const handleRegisterButtonClick = () => {
    setIsRegisterFormVisible(true);
    setIsLoginFormVisible(false); // Убедитесь, что форма входа скрыта при отображении формы регистрации
  };

  return (
    <div className="HeaderFooter">
      <header className="Header">
        <div className="logo">Электронная библиотека Рамили и Аэлины</div>
        <div className="auth">
          <button onClick={handleLoginButtonClick}>Войти</button>
          <button onClick={handleRegisterButtonClick}>Зарегистрироваться</button>
        </div>
      </header>
      {isLoginFormVisible && (
        <div className="LoginForm">
          {/* Форма входа */}
          <form>
            {/* Элементы формы (поля для ввода email и пароля, кнопка отправки и т.д.) */}
          </form>
        </div>
      )}
      {isRegisterFormVisible && (
        <div className="RegisterForm">
          {/* Форма регистрации */}
          <form>
            {/* Элементы формы (поля для ввода email и пароля, кнопка отправки и т.д.) */}
          </form>
        </div>
      )}
      <main className="MainContent">
        <div className="search">Поиск по жанрам</div>
        <div className="libraryInfo">
          <h2>Добро пожаловать в нашу библиотеку!</h2>
          <p>Здесь вы найдете широкий выбор книг по разным жанрам.</p>
        </div>
      </main>
      <footer className="Footer">
        <div className="copyright">© 2024 Электронная библиотека Рамили и Аэлины</div>
      </footer>
    </div>
  );
}

export default HeaderFooter;
