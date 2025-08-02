import styles from './Card.module.css'
import ActionButton from './ActionButton';

function CardContent({onclose, word, significado}){
    return(
    
    <div className={styles.Card_container}>
        <div className={styles.Card_body}>
            <h3>{word}</h3>

            <div className={styles.paginado}>
            <h4> Significado</h4>
            <p className={styles.Cardtext}>{significado}</p>
            </div>
            
            <ActionButton action="X" onClick={onclose} className={styles.close}/>
        </div>
    </div>
    );
}
export default CardContent;