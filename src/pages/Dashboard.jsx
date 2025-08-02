import {useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css"


import CardContent from "../Components/Card";
import ActionButton from "../Components/ActionButton";


function Dashboard(){


     const listaPalavras= [
        { palavra: 'Ephemeral', significado: 'Duradouro por um curto período de tempo' },
        { palavra: 'Serendipity', significado: 'Descoberta feliz por acaso' },
        { palavra: 'Petrichor', significado: 'Cheiro da terra após a chuva' },
        ];

    const[card, setCard]= useState(null);
    const sortWord = () =>{
        const randomic = listaPalavras[Math.floor(Math.random()* listaPalavras.length)]
        setCard(randomic)
    };
    const[showDailyWord, setShowCard] = useState(true);
    
    const navigate = useNavigate();

    const handleLogout = () => {
    
    alert("Usuário deslogado");
    navigate("/"); // redireciona pra tela de login
    };

    return(
    <div className={styles.body}>
        <div  className={styles.Dashcontainer}>
            <header className={styles.DashHeader}>
                
            <h1> Dashboard</h1>
            
            <ActionButton action=" " onClick={handleLogout} className={styles.Logout}/>
            
            </header>

            <ActionButton action="Mostrar palavra" onClick={() => {
                sortWord();
                setShowCard(true);
             }} />


            {showDailyWord && card && (
        <CardContent
            onclose={() => setShowCard(false)}
            word={card.palavra}
            significado={card.significado}
        />
        )}

            
            {/*Seção que receberá o progresso do usário
                - categorizar as palavras de acordo com o alfabeto;
                - exibir um gráfico de processo;
                    --será preciso armazenar a data que as palavras foram enviadas ao usuário;
                
            */}
            
        </div>

    </div>
    );
}

export default Dashboard;