import styles from '../../styles/containers/Hello.module.css';
import Particles from "react-tsparticles";
import { FiInstagram } from 'react-icons/fi';
import { AiFillLinkedin,AiFillGithub } from 'react-icons/ai';



export function Hello(props){
     return(
        <div ref={props.referencia} className={styles.container}>
            <div className={styles.boxResume}>
                <div className={styles.boxTitle}>
                    <h2 className={styles.nameDestaq}>André Louis Souza Ribeiro</h2>
                </div>
                
                <h3>Técnico em Informática - CETEPES<br/> 
                   Bacharel em engenharia da computação(incompleto) - UFES</h3>

                <p> 
                  Fiz esse portfolio para mostrar alguns projetos que desenvolvi durante a graduação e algumas tecnologias 
                  na qual adquiri conhecimento.
                </p>

                <div className={styles.boxIcons}>
                    <a href="https://www.instagram.com/andre_louiss/?hl=pt-br">
                        <FiInstagram className={styles.Icon} size={40}/>
                    </a>
                    <a href="https://github.com/aandrelouis">
                        <AiFillGithub className={styles.Icon} size={40} />
                    </a>
                    <a href="https://www.linkedin.com/in/andre-louis-0362421a7/">
                        <AiFillLinkedin className={styles.Icon} size={40}/>
                    </a>
                </div>
            </div>

            <div className={styles.boxPhoto}>
                <img data-aos="fade-right" className={styles.Photo}  src="/perfil/perfil2.jpg" alt="andre louis" />
            </div>
        </div>
    ) 
}