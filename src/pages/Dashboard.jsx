import {useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css"
import Catalogo from "../Components/CatalogoPalavras";
import CardContent from "../Components/Card";
import ActionButton from "../Components/ActionButton";


function Dashboard(){
    // Hook para navegação
    const navigate = useNavigate();

// Estado para armazenar a lista de palavras
     const [listaPalavras, setListaPalavras] = useState([]);

    fetch('http://localhost:3001/palavras', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((response) => response.json())
    .then((data) => {  
        setListaPalavras(data);
    })
    .catch((error) => { console.log(error) });



    // Função para selecionar uma palavra aleatória
    const sortWord = () =>{
        const randomic = listaPalavras[Math.floor(Math.random()* listaPalavras.length)]
        setCard(randomic)
    };

    // Estado para controlar a exibição do card
    const[card, setCard]= useState(false);
    // Estado para controlar a exibição do card
    const[showDailyWord, setShowCard] = useState(true);
    

    // Função para deslogar o usuário
    const handleLogout = () => {
    
    alert("Usuário deslogado");
    navigate("/"); // redireciona pra tela de login
    };
    
// Renderização do componente
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

            
        
            <Catalogo palavras={listaPalavras}/>
        
            
        </div>

    </div>
    );
}

export default Dashboard;