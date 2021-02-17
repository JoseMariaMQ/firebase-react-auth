import React from "react";

const Login = () => {
    return (
        <div className="row mt-5">
            <div className="col"></div>
            <div className="col">
                <form className="from-group">
                    <input className="form-control" placeholder="Introcude el Email" type="text"/>
                    <input className="form-control mt-4" placeholder="Introduce la Password" type="text"/>
                    <input className="btn btn-dark btn-block mt-4" value="Registrar Usuario" type="submit"/>
                </form>
            </div>
            <div className="col"></div>
        </div>
    )
}

export default Login