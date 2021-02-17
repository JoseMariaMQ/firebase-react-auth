import React, {useState} from "react";
import {auth} from "../firebaseconfig";

const Login = () => {

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const  [msgError, serMsgError] = useState(null)

    const registrarUsuario = (e) => {
        e.preventDefault()
        auth.createUserWithEmailAndPassword(email, pass)
            .then(r => alert("Usuario registrado"))
            .catch (e => {
                if (e.code === 'auth/invalid-email') serMsgError('Formato de Email incorrecto')
                if (e.code === 'auth/weak-password') serMsgError('La password debe tener 6 mínimo caracteres')
            })
    }

    return (
        <div className="row mt-5">
            <div className="col"/>
            <div className="col">
                <form onSubmit={registrarUsuario} className="from-group mb-4">
                    <input onChange={(e) => {setEmail(e.target.value)}} className="form-control" placeholder="Introcude el Email" type="email"/>
                    <input onChange={(e) => {setPass(e.target.value)}} className="form-control mt-4" placeholder="Introduce la Password" type="password"/>
                    <input className="btn btn-dark btn-block mt-4" value="Registrar Usuario" type="submit"/>
                </form>
                {
                    msgError != null ?
                        (
                            <div>{msgError}</div>
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