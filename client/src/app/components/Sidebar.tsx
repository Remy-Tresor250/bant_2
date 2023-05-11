import React from 'react'
import styles from '../styles'
import Image from 'next/image'

const Sidebar = () => {
  return (
    <div className={`${styles.flexStart} sm:hidden mdsm:items-start xl:w-[340px] p-2 fixed h-[100%]`}>
        <div className={`${styles.flexCenter} w-14 h-14 hover-animation`}>
            <Image src="../logo2.svg" width={100} height={100} alt="logo"/>
        </div>

        <div className={``}>
            
        </div>
    </div>
  )
}

export default Sidebar