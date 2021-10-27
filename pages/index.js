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

export default function Home() {
  
  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  
  return (
    <div className={styles.container}>
      <Head>
        <title>André Louis</title>
        <meta name="description" content="site do André Louis" />
      </Head>
      
      <Intro />
      <Hello />
      <Techs />
      <Personal />
      <Colab />
      <Contact />
    </div>
  )
}
