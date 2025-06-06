import styles from './Card.module.css'
import ActionButton from './ActionButton';
function CardContent({onclose}){
    return(
    
    <div className={styles.Card_container}>
        <div className={styles.Card_body}>
            <h3>Palavra</h3>

            <div className={styles.paginado}>
            <h4> Significado</h4>
            <p className={styles.Cardtext}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus, felis sit amet porta aliquam, augue arcu convallis lectus, ut lacinia nunc tortor nec augue. Pellentesque facilisis malesuada tortor in finibus. </p>
            </div>
            
            <ActionButton action="Fechar" onClick={onclose}/>
        </div>
    </div>
    );
}
export default CardContent;