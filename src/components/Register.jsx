import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Register.css';

export class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(e){
    e.preventDefault();
    // здесь обрабатываем вход в систему
  }
  render(){
    return(
      <div className="register">
        <p className="register__welcome">Регистрация</p>
        <form onSubmit={this.handleSubmit} className="register__form">
          <input required id="username" name="username" type="text" value={this.state.username} onChange={this.handleChange} placeholder="Email" />
          <input required id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange} placeholder="Пароль" />
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
}