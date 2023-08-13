import React from 'react'
import Link from 'next/link'
import styles from '@/styles/home.module.css'

const Navbar = () => {
  return (
    <nav className={styles.mainnav}>
        <ul>
        <Link href='/'><li>Home</li></Link>
          <Link href='/blogs'><li>blogs</li></Link>
          <Link href='/about'><li>about</li></Link>
          <Link href='/Contact'><li>contact</li></Link>
        </ul>
      </nav>
  )
}

export default Navbar