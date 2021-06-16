import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { loginRequest } from '../actions';

import googleIcon from "../assets/static/google-icon.png"
import twitterIcon from "../assets/static/twitter-icon.png"

// Assets
import '../assets/styles/components/Login.scss'

const Login = props => {
    const history = useHistory()

    const [form, setForm] = useState({
      email: ''
    })

    const {email} = form

    const handleInput = e => {
        setForm({
          ...form,
          [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (email.trim() === '') {
          return '';
        }

        props.loginRequest(form)
        history.push('/')
    }

    return (
      <div className="App">
        <section className="login">
          <section className="login__container">
            <h2>Inicia sesión</h2>
            <form className="login__container--form" onSubmit={handleSubmit}>
              <input 
                className="input" 
                type="text" 
                name="email"
                placeholder="Correo"
                onChange={handleInput}
                value={email}
              />
              <input
                className="input"
                type="password"
                name="password"
                placeholder="Contraseña"
                onChange={handleInput}
              />
              <button className="button" type="submit">Iniciar sesión</button>
              <div className="login__container--remember-me">
                <label>
                  <input type="checkbox" id="cbox1" value="first_checkbox" />
                  Recuérdame
                </label>
                <Link to="/">Olvidé mi contraseña</Link>
              </div>
            </form>
            <section className="login__container--social-media">
              <div>
                <img src={googleIcon} /> Inicia sesión con Google
              </div>
              <div>
                <img src={twitterIcon} /> Inicia sesión con Twitter
              </div>
            </section>
            <p className="login__container--register">
              No tienes ninguna cuenta <Link to="register">Regístrate</Link>
            </p>
          </section>
        </section>
      </div>
    );
}

const mapDispatchToProps = {
  loginRequest,
}
 
export default connect(null, mapDispatchToProps)(Login)