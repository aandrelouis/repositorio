import styles from '../../styles/containers/Hello.module.css';
import Particles from "react-tsparticles";

export function Hello(){

    const particlesInit = (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };


     return(
        <div className={styles.container}>
 {/*            <Particles 
                 className={styles.particles}
                 params={{
                    "particles": {
                        "number": {
                            "value": 150,
                            "density": {
                                "enable": true,
                                "value_area": 1803.4120608655228
                            }
                        },
                        "color": {
                            "value": "#FFF"
                        },
                        "shape": {
                            "type": "circle",
                            "stroke": {
                                "width": 3,
                                "color": "#000000"
                            },
                            "polygon": {
                                "nb_sides": 4
                            },
                            "image": {
                                "src": "devIcons/d.svg",
                                "width": 100,
                                "height": 100
                            }
                        },
                        "opacity": {
                            "value": 0.4008530152163807,
                            "random": false,
                            "anim": {
                                "enable": false,
                                "speed": 1,
                                "opacity_min": 0.1,
                                "sync": false
                            }
                        },
                        "size": {
                            "value": 1.5,
                            "random": true,
                            "anim": {
                                "enable": false,
                                "speed": 40,
                                "size_min": 0.1,
                                "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 0,
                            "color": "#ffffff",
                            "opacity": 0.3687847739990702,
                            "width": 0.6413648243462091
                        },
                        "move": {
                            "enable": true,
                            "speed": 6,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                                "enable": false,
                                "rotateX": 600,
                                "rotateY": 1200
                            }
                        }
                    },
                    "interactivity": {
                        "detect_on": "window",
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            },
                            "onclick": {
                                "enable": false,
                                "mode": "bubble"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                                "distance": 400,
                                "line_linked": {
                                    "opacity": 1
                                }
                            },
                            "bubble": {
                                "distance": 400,
                                "size": 40,
                                "duration": 2,
                                "opacity": 8,
                                "speed": 3
                            },
                            "repulse": {
                                "distance": 100,
                                "duration": 0.4
                            },
                            "push": {
                                "particles_nb": 4
                            },
                            "remove": {
                                "particles_nb": 2
                            }
                        }
                    },
                    "retina_detect": true
                }}   
            /> */}

            <div className={styles.boxResume}>
                
                <div className={styles.boxTitle}>
                    <h3>Olá,eu sou </h3>
                    <h2 className={styles.nameDestaq}>André Louis</h2>
                </div>
                
                <p> Sou estudante de enhenharia da computação,
                    criei esse repositorio para falar sobre 
                    as coisa que tenho visto dentro da faculdade e aplicado
                </p>
            
                

            </div>

            <div className={styles.boxPhoto}>
                <img data-aos="fade-right" className={styles.Photo}  src="/perfil/perfil2.jpg" alt="andre louis" />
            </div>

       

        </div>
    ) 
}