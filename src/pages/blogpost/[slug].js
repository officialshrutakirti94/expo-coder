import React from 'react'
import  {useRouter } from 'next/router';
import Styles from '@/styles/blogpost.module.css'
 

const slug = () => {
    const router=useRouter();
    const {slug}=router.query
    console.log(router.query)
  return (
    <div className={Styles.container}>
      <h1>Title of the page {slug}</h1>
      <hr />
      <div className={Styles.main}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptates distinctio porro aperiam deleniti. Quia nam deleniti amet. Maiores impedit, vitae labore reprehenderit ipsa earum inventore minus alias adipisci excepturi!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam consequuntur alias enim non expedita iusto totam iure eaque aut ducimus esse omnis, dignissimos, accusamus quo quasi sit placeat laboriosam. Unde!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quas et deleniti minima unde eaque quae obcaecati facere, fugit architecto rem! Consequatur voluptates autem dolorum minus nemo. Cupiditate, quos libero.
      </div>
    </div>
    
  )
}

export default slug;