// Шапка сайта
import { Link } from 'react-router-dom'; 

export function Header({ location }) {

  console.log(location.pathname)
  return (
      <header className="header page__header-position">
        <div className="header__logo"></div>
        {location.pathname === "/sign-up" && <Link className="header__logo_sign-up" to="/sign-in">Войти</Link>}
        {location.pathname === "/sign-in" && <Link className="header__logo_sign-in" to="/sign-up">Регистрация</Link>}
        {location.pathname === "/main" && <div className="header__logo_main"> {/* Возможно сделать onClick={Функция выводящая пользователя из авторизации и to="на страницу авторизации"} */}
          <p>email@mail.ru</p>
          <Link>Выйти</Link>
        </div>}
      </header>
  );
}