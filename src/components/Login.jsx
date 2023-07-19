import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

export class Login extends React.Component {
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
      <div className="login">
        <p className="login__welcome">Вход</p>
        <form onSubmit={this.handleSubmit} className="login__form">
          <input required id="username" name="username" type="text" value={this.state.username} onChange={this.handleChange} placeholder="Email" />
          <input required id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange} placeholder="Пароль" />
          <div className="login__button-container">
            <button type="submit" className="login__link">Войти</button>
          </div>
        </form>
      </div>
    )
  }
}