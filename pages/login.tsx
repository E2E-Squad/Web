import {NextPage} from "next";
import Button from "../components/Atoms/Button/Button";
import React, {useState} from "react";
import {useRouter} from "next/router";

const Login: NextPage = () => {
    const router = useRouter();
    const [error, setError] = useState("")
    const [creds, setCreds] = useState({
        login: "",
        password: ""
    })
    const bindCreds = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target
        setCreds(prevState => ({...prevState, [id]: value}))
    }
    const login = () => {
        const user = {
            username: "batman",
            email: "batman@dc.com",
            password: "bat"
        }
        if ([user.email, user.username].includes(creds.login) && creds.password === user.password)
            router.replace('/profile')
        else
            setError("Identifiants erronés")
    }
    return (
        <>
            <div style={{display: "flex", flexDirection: "column", width: 500, margin: "auto"}}>
                <h1>Login</h1>
                {error.length > 0 &&
                    <span style={{color: "red"}}>{error}</span>
                }
                <input id={"login"} type={"text"} placeholder={"Email ou Pseudo"} onChange={bindCreds} />
                <input id={"password"} type={"password"} placeholder={"Mot de passe"} onChange={bindCreds} />
                <Button onClick={login}>Se connecter</Button>
            </div>
        </>
    )
}

export default Login;