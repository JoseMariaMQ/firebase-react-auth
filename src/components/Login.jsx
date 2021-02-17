import React, {useState} from "react";
import {auth} from "../firebaseconfig";
import {useHistory} from 'react-router-dom'

const Login = () => {

    const historial = useHistory()
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const  [msgError, serMsgError] = useState(null)

    const registrarUsuario = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, pass)
            .then(r => {
                historial.push('/')
            })
            .catch (e => {
                if (e.code === 'auth/invalid-email') serMsgError('Formato de Email incorrecto')
                if (e.code === 'auth/weak-password') serMsgError('La password debe tener 6 mínimo caracteres')
            })
    }

    const loginUsuario = (e) => {
        auth.signInWithEmailAndPassword(email, pass)
            .then((r) => {
                historial.push('/')
            })
            .catch((err) => {
                if (err.code === 'auth/wrong-password') serMsgError('Password incorrecta')
            })
    }

    return (
        <div className="row mt-5">
            <div className="col"/>
            <div className="col">
                <form onSubmit={registrarUsuario} className="form-group mb-4">
                    <input onChange={(e) => {setEmail(e.target.value)}} className="form-control" placeholder="Introcude el Email" type="email"/>
                    <input onChange={(e) => {setPass(e.target.value)}} className="form-control mt-4" placeholder="Introduce la Password" type="password"/>
                    <input className="btn btn-dark btn-block mt-4" value="Registrar Usuario" type="submit"/>
                </form>
                <button onClick={loginUsuario} className="btn btn-success btn-block mb-4">Iniciar Sesión</button>
                {
                    msgError != null ?
                        (
                            <div className="alert-danger text-center">{msgError}</div>
                        ) :
                        (
                            <span></span>
                        )
                }
            </div>
            <div className="col"/>
        </div>
    )
}

export default Login