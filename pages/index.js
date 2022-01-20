import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useEffect } from 'react'
import Aos from 'aos';
import { Header } from '../containers/Header';
import { Hello } from '../containers/Hello';
import { Colab } from '../containers/Colab';
import { Personal } from '../containers/Personal';
import { Techs } from '../containers/Techs';
import { Contact } from '../containers/Contact';
import { Intro } from '../containers/Intro';
import React, { useRef } from 'react'

export default function Home() {
  
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  
  const home = useRef(null);
  const about = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);


  return (
    <div className={styles.container}>
      <Head>
        <title>André Louis</title>
        <meta name="description" content="site do André Louis" />
      </Head>
      
      <Intro pag0={home} pag2={projects} pag1={about} pag3={contact}/>
      <Hello referencia={about}/>
      <Techs />
      <Personal referencia={projects}/>
      <Colab />
      <Contact referencia={contact}/>
    </div>
  )
}
