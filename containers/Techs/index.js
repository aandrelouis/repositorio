import styles from '../../styles/containers/Techs.module.css';
import {Icons } from '../../components/Icons/index';

export function Techs(){

    return(
        <div className={styles.container}>
            <div  className={styles.title}>
                <h1>Tecnologias</h1>
            </div>
            
            <div className={styles.boxTechs}>
                <Icons  icon={"javascript-original"}/>
                <Icons  icon={"c-original"}/>
                <Icons  icon={"git-original"}/>
                <Icons  icon={"nextjs-original"}/>
                <Icons  icon={"react-original"}/>
                <Icons  icon={"python-original"}/>
                <Icons  icon={"c++-original"}/>
                <Icons  icon={"java-original"}/>
                <Icons  icon={"docker-original"}/>
                <Icons  icon={"nodejsFinal"}/>
            </div>

        </div>
    )
}