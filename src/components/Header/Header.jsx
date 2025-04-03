import React from 'react'
import Nav from '../Nav/Nav'
import styles from './Header.module.css'

function Header() {
  return (
    <header>
<img src="./assets/logoKartobal.svg" alt="logo kartobal" className={styles.headerlogo}/>
<Nav></Nav>

</header>
  )
}

export default Header
