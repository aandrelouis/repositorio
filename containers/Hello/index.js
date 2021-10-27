import styles from '../../styles/containers/Hello.module.css';
import Particles from "react-tsparticles";
import { FiInstagram } from 'react-icons/fi';
import { AiFillLinkedin,AiFillGithub } from 'react-icons/ai';



export function Hello(){
     return(
        <div className={styles.container}>
            <div className={styles.boxResume}>
                <div className={styles.boxTitle}>
                    <h3>Olá,eu sou </h3>
                    <h2 className={styles.nameDestaq}>André Louis</h2>
                </div>
                
                <p> Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                  
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