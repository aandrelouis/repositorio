import styles from '../../styles/containers/Intro.module.css';
import Particles from "react-tsparticles";
import { FiInstagram } from 'react-icons/fi';
import { AiFillLinkedin,AiFillGithub } from 'react-icons/ai';



export function Intro(){
     return(
        <div className={styles.container}>
            <div className={styles.boxResume}>
                    <h1>André Louis</h1>
                    <h3>Desenvolvedor <strong>Frontend</strong> e  <strong>Mobile</strong> </h3>
            </div>

            <div className={styles.boxPhoto}>
                <img data-aos="fade-right" className={styles.Photo}  src="/Intro/intro.svg" alt="andre louis" />
            </div>
        </div>
    ) 
}