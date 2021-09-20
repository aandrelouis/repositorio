import styles from '../../styles/components/Icons.module.css';


export function Icons(props){
    return(
        <div className={styles.container}>                   
                <div className={styles.box}>
                    <img className={styles.Icon} src={`/devIcons/${props.icon}.svg`} alt={`${props.icon}`} />                
                </div>     

        </div>
    )
}