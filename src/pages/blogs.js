import React from 'react'
import styles from '@/styles/blogs.module.css'
import Link from 'next/link'

const blogs = () => {
  return (
    <main className={styles.main}>
    <div className="blogs">
          <div className="blog-item">
            <Link href={'/blogpost/learn-javascript'}>
            <h1>how to learn javascript?</h1></Link>
            <p>javascript is a language used for logic backend in web</p>
          </div>
          <div className="blog-item">
          <Link href={'/blogpost/learn-react-native'}>
            
            <h1>how to learn react-native?</h1></Link>
            <p>javascript is a language used for logic backend in web</p>
          </div>
          <div className="blog-item">

          <Link href={'/blogpost/learn-next.js'}>
            
            <h1>how to learn next.js</h1></Link>
            <p>javascript is a language used for logic backend in web</p>
          </div>
        </div>
        </main>
  )
}

export default blogs