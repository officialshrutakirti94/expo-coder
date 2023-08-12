import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>Expo coder</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Expo Coder</h1>
        <div className="blogs">
          <div className="blog-item">
            <Image className={styles.myImg} src='/home.jpg' width={237} height={158}></Image>
            <h1>how to learn javascript?</h1>
            <p>javascript is a language used for logic backend in web</p>
          </div>
        </div>

        <p className={styles.descriptiom}>
          A code blog for coder by a coder

        </p>

      </main>
      </div>
    </>
  )
}
