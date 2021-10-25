import styles from '../../styles/containers/Contact.module.css';


export function Contact(){    
    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Contato</h1>
            </div>
            
            <div className={styles.content}>

                <div className={styles.boxText}>
                    <h1>Informações</h1>
                    <h1>Email</h1>
                    <h1>Localização</h1>
                </div>

                <div className={styles.boxInputs}>
                   <div className={styles.boxInputTop}>
                     <input placeholder="Email" className={styles.input} type="text"/>
                     <input placeholder="Assunto" className={styles.input} type="text"/>
                   </div>
                
                    <input placeholder="Descrição" className={styles.input} type="text"/>
                    <button className={styles.Button}>enviar</button>
                </div>
            
            </div>

        </div>
    )
}