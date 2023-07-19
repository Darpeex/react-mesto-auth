// Шапка сайта
import { Link } from 'react-router-dom'; 

export function Header({ location, userData, onSignOut }) {
  // console.log(location.pathname)
  // console.log(userData)
  function handleDeleteTocken() {
    onSignOut();
  }

  return (
      <header className="header page__header-position">
        <div className="header__logo"></div>
        {location.pathname === "/sign-up" && <Link className="header__logo_sign-up" to="/sign-in">Войти</Link>}
        {location.pathname === "/sign-in" && <Link className="header__logo_sign-in" to="/sign-up">Регистрация</Link>}
        {location.pathname === "/main" && <div className="header__logo_main"> {/* Возможно сделать onClick={Функция выводящая пользователя из авторизации и to="на страницу авторизации"} или просто удалить токен */}
          <p>{userData.email}</p> {/* Или просто передавать откуда-нибудь из FormValue */}
          <Link onClick={handleDeleteTocken}>Выйти</Link>
        </div>}
      </header>
  );
}