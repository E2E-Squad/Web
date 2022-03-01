import {NextPage} from "next";
import {useRouter} from "next/router";
import React, {useState} from "react";

const Register: NextPage = () => {
    const router = useRouter();
    const [error, setError] = useState("")
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        repeatPassword: "",
        idCard: null,
        familyRecBook: null
    })
    const bindData = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value, files, type} = e.target;
        setData(prevState => ({...prevState, [id]: type === "file" ? files?.[0] : value}));
    }
    const checkPwdMatch = () => {
        if (data.password !== data.repeatPassword)
            setError("Les mots de passe ne correspondent pas");
    }
    const register = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData();
        console.log(event)
    }
    return (
        <main style={{width: 500, margin: "auto"}}>
            <h1>Création de compte parent</h1>
            {error.length > 0 &&
                <span style={{color: "red"}}>{error}</span>
            }
            <form style={{display: "flex", flexDirection: "column"}} onSubmit={register}>
                <input
                    id={"firstname"}
                    value={data.firstname}
                    type={"text"}
                    placeholder={"Prénom"}
                    onChange={bindData}
                />
                <input
                    id={"lastname"}
                    value={data.lastname}
                    type={"text"}
                    placeholder={"Nom"}
                    onChange={bindData}
                />
                <input
                    id={"email"}
                    value={data.email}
                    type={"email"}
                    placeholder={"Email"}
                    onChange={bindData}
                />
                <input
                    id={"password"}
                    value={data.password}
                    type={"password"}
                    placeholder={"Mot de passe"}
                    onChange={bindData}
                />
                <input
                    id={"repeatPassword"}
                    value={data.repeatPassword}
                    type={"password"}
                    placeholder={"Répéter mot de passe"}
                    onChange={bindData}
                    onBlur={checkPwdMatch}
                />
                <label>
                    Carte d'identité
                    <input
                        id={"idCard"}
                        type={"file"}
                        onChange={bindData}
                    />
                </label>
                <label>
                    Livret de famille
                    <input
                        id={"familyRecBook"}
                        type={"file"}
                        onChange={bindData}
                    />
                </label>
                <button type={"submit"} className={"btn"}>S'enregistrer</button>
            </form>
        </main>
    )
}

export default Register;