import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import * as auth from '../utils/Auth';
import '../styles/Register.css';

export const Register = ({ onInfoTooltip, onResult, errorMessage }) => {
  const [formValue, setFormValue] = useState({
    password: '',
    email: '',
  })
  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;
    console.log(e.target.value)
    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { password, email } = formValue;
    auth.register( password, email ).then((res) => {
      if (res.error) {
        onInfoTooltip()
        onResult(false)
        errorMessage(res.error)
      } else {
        console.log('ok')
        onResult(true)
        onInfoTooltip()
        navigate('/sign-in', {replace: true});
      }
      }
    )
  }

  return(
    <div className="register">
      <p className="register__welcome">Регистрация</p>
      <form onSubmit={handleSubmit} className="register__form">
        <input required minLength="2" maxLength="30" id="email" name="email" type="email" value={formValue.email} onChange={handleChange} placeholder="Email" />
        <input required  minLength="6" maxLength="30" id="password" name="password" type="password" value={formValue.password} onChange={handleChange} placeholder="Пароль" />
        <div className="register__button-container">
          <button type="submit" className="register__link">Зарегистрироваться</button>
        </div>
      </form>
      <div className="register__signup">
        <p>Уже зарегистрированны?</p>
        <Link to="/sign-in" className="signup__link">Войти</Link>
      </div>
    </div>
  )
}