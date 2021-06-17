import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { registerRequest } from '../actions'
import { connect } from 'react-redux';


import '../assets/styles/components/Register.scss'

const Register = props => {
    const [form, setValues] = useState({
        email: '',
        name: '',
        password: ''
    })

    const {email, name, password} = form

    const handleInput = e => {
        setValues({
            ...form,
            [e.target.name]: event.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if(email.trim() === '' || name.trim() === '' || password.trim() === ''){
            return null
        }
        props.registerRequest(form);
        props.history.push('/')
    }
    return (
      <section className="register">
        <section className="register__container">
          <h2>Regístrate</h2>
          <form className="register__container--form" onSubmit={handleSubmit}>
            <input 
                className="input" 
                type="text" 
                placeholder="Nombre" 
                name="name"
                onChange={handleInput}
            />
            <input 
                className="input" 
                type="text" 
                placeholder="Correo" 
                name="email"
                onChange={handleInput}
            />
            <input 
                className="input" 
                type="password" 
                placeholder="Contraseña" 
                name="password"
                onChange={handleInput}
            />
            <button className="button" type="submit">Registrarme</button>
          </form>
          <Link to="/login">Iniciar sesión</Link>
        </section>
      </section>
    );
}

const mapDispatchToProps = {
    registerRequest,
  }
 

export default connect(null, mapDispatchToProps)(Register)