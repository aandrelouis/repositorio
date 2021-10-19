import styles from '../../styles/components/ColabCard.module.css';
import Swal from 'sweetalert2'  
import {AiFillGithub } from 'react-icons/ai';

export function ColabCard(props){
    function handle(){
        Swal.fire({
            title: `${props.name}`,
            width: 800,
            html: `${props.desc}`+ "."+ `<a href=${props.link}><strong>Link Github</strong></a>`,
            text:`${props.desc}`,
            imageUrl: `Colabs/${props.name}.${props.type}`,
            imageWidth: 700,
            imageHeight: 400,
            imageAlt: 'Custom image',
          })
    }
    
    
    return(
        <div className={styles.container}>                   
                <div className={styles.box} onClick={handle}>
                    <div>
                        <AiFillGithub className={styles.boxGit} size={30}/>
                    </div>
                    <img className={styles.Photo} src={`Colabs/intro${props.name}.jpg`} alt="logo" />                
                </div>     

        </div>
    )
}