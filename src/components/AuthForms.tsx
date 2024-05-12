import React, { useState } from "react";

function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleAuth = () => {
    if (isRegistering) {
      // Здесь будет логика для регистрации
      console.log("Регистрация пользователя с email:", email, "и паролем:", password);
    } else {
      // Здесь будет логика для аутентификации
      console.log("Аутентификация пользователя с email:", email, "и паролем:", password);
    }
  };

  return (
    <div>
      <h2>{isRegistering ? "Регистрация" : "Вход"}</h2>
      <input
        type="email"
        placeholder="Введите ваш email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Введите пароль"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleAuth}>{isRegistering ? "Зарегистрироваться" : "Войти"}</button>
      <button onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? "Уже есть аккаунт? Войти" : "Нет аккаунта? Зарегистрироваться"}
      </button>
    </div>
  );
}

export default AuthForm;
