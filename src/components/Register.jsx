import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import * as auth from '../utils/Auth';
import '../styles/Register.css';

export const Register = () => {
  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      const { email, password } = formValue;
      auth.register( email, password ).then((res) => {
        navigate('/sign-in', {replace: true});
      }
    );
  } 

  return(
    <div className="register">
      <p className="register__welcome">Регистрация</p>
      <form onSubmit={handleSubmit} className="register__form">
        <input required id="email" name="email" type="text" value={formValue.email} onChange={handleChange} placeholder="Email" />
        <input required id="password" name="password" type="password" value={formValue.password} onChange={handleChange} placeholder="Пароль" />
        <div className="register__button-container">
          <button type="submit" className="register__link">Зарегистрироваться</button>
        </div>
      </form>
      <div className="register__signup">
        <p>Уже зарегистрированны?</p>
        <Link to="/register" className="signup__link">Войти</Link>
      </div>
    </div>
  )
}