import React from 'react'
import Head from 'next/head';
import styles from '@/styles/home.module.css'
import Image from 'next/image'


const about = () => {
  return (
    <div className={styles.about}>
      <h1>Welcome to our programming blog !</h1>
      <p className={styles.des}>Welcome fellow developers, coders, and tech enthusiasts! We're excited to bring you the latest insights, tips, and tutorials from the ever-evolving world of programming. Whether you're a seasoned pro or just starting your coding journey, our blog is here to help you stay informed and inspired.
</p>
<Image className={styles.aboutImg} src='/about.jpg' width={237} height={158}></Image>
    </div>
  )
}

export default about;