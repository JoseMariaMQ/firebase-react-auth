import React, {useState} from "react";
import {auth} from "../firebaseconfig";

const Login = () => {

    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")

    const registrarUsuario = (e) => {
        e.preventDefault()
        try {
            auth.createUserWithEmailAndPassword(email, pass)
            alert("Usuario registrado")
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <div className="row mt-5">
            <div className="col"/>
            <div className="col">
                <form onSubmit={registrarUsuario} className="from-group">
                    <input onChange={(e) => {setEmail(e.target.value)}} className="form-control" placeholder="Introcude el Email" type="text"/>
                    <input onChange={(e) => {setPass(e.target.value)}} className="form-control mt-4" placeholder="Introduce la Password" type="password"/>
                    <input className="btn btn-dark btn-block mt-4" value="Registrar Usuario" type="submit"/>
                </form>
            </div>
            <div className="col"/>
        </div>
    )
}

export default Login