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
      <nav className={styles.mainnav}>
        <ul>
        <Link href='/home'><li>Home</li></Link>
          <Link href='/blogs'><li>blogs</li></Link>
          <Link href='/about'><li>about</li></Link>
          <Link href='/contact'><li>contact</li></Link>
        </ul>
      </nav>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Expo Coder</h1>
        <div className="blogs">
          <div className="blog-item">
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
