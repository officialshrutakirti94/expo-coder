import React from 'react'
import  {useRouter } from 'next/router';
 

const slug = () => {
    const router=useRouter();
    console.log(router.query)
  return (

    <div>Dynamic route</div>
  )
}

export default slug;