import ActionButton from "../Components/ActionButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css"

function Login(){
    const navegation = useNavigate();

    const handleLogin=(e, Inputpass, InputUser)=>{
        e.preventDefault()
        
        if(user || pass){
            
            if(user == "admin" || pass == "admin"){
                navegation("/Dashboard");
            }else{
                e.target.reset();
                alert("Usuário ou senha inválidos");
            }

        }else {
            alert("Preencha todos os campos");
        }
    };

    const[user, setUser] =  useState();
    const[pass, setPass] =  useState();

    return(<>
    <form onSubmit={handleLogin}>
        <h1>Log in to Language Card</h1>

        <div className={styles.loginSubmit}>

            <div>

                <label htmlFor="user">Username ou e-mail </label>
                <input 
                type="text" 
                name="inputUser"
                id="user"
                onChange={(e)=> setUser(e.target.value)}/>

            </div>

            <div> 

                <label htmlFor="pass">Senha </label>    
                <input 
                type="password" 
                name="inputPass"
                id="pass"
                onChange={(e)=> setPass(e.target.value)}/>

            </div>
            
            <ActionButton action={"Enviar"} type="submit" className={styles.submit}/>
        
        </div>

    </form>
    </>);
}

export default Login;