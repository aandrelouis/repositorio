import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { useEffect } from 'react'
import Aos from 'aos';
import { Header } from '../containers/Header';
import { Hello } from '../containers/Hello';
import { Colab } from '../containers/Colab';
import { Personal } from '../containers/Personal';

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
      
      <Header />
      <Hello />
      <Colab />
      <Personal />



      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
