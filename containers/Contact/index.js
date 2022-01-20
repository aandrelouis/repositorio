import styles from '../../styles/containers/Contact.module.css';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { CgPin } from 'react-icons/cg';

export function Contact(props){    
    return(
        <div ref={props.referencia} className={styles.container}>
            <div className={styles.title}>
                <h1>Contato</h1>
            </div>
            
            <div className={styles.content}>

                <div className={styles.boxText}>
                    <div className={styles.boxIcon}>
                        <BsFillTelephoneFill size={25} className={styles.icon}/>
                        <h3>(27)98103-2716</h3>
                    </div>

                    <div className={styles.boxIcon}>
                        <AiOutlineMail  size={25} className={styles.icon} />
                        <h3>aandrelouis@gmail.com</h3>
                    </div>

                    <div className={styles.boxIcon}>
                        <CgPin  size={25}  className={styles.icon}/>
                        <h3>Vitória - ES</h3>
                    </div>
                </div>

                <div className={styles.boxInputs}>
                   <div className={styles.boxInputTop}>
                     <input placeholder="Email" className={styles.input} type="text"/>
                     <input placeholder="Assunto" className={styles.input} type="text"/>
                   </div>
                
                    <input placeholder="Descrição" className={styles.input} type="text"/>
                    <button className={styles.button}>enviar</button>
                </div>
            
            </div>

        </div>
    )
}