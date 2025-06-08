import ActionButton from "../Components/ActionButton";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css"

function Login(){
    const navegation = useNavigate();

    const handleLogin=(Inputpass, InputUser)=>{
      
           navegation("/Dashboard")
   
    };

    return(<>
    <form>
        <h1>Log in to Language Card</h1>

        <div className={styles.loginSubmit}>

            <div>

                <label>Username ou e-mail </label>
                <input type="text" placeholder="" id="user"></input>

            </div>

            <div> 

                <label>Senha </label>    
                <input type="text" placeholder="" id="pass"></input>

            </div>
            
            <ActionButton action={"Enviar"} type="submit" className={styles.submit} onClick={handleLogin}/>
        
        </div>

    </form>
    </>);
}

export default Login;