import React from 'react'
import {useRef, useState} from 'react'
import  styles from './Nav.module.css'
import { Link} from 'react-router-dom'


function Nav() {
  const[responsive, setResponsive] = useState("");


  

  const opencloseNav = ()=>{
   
      if (responsive === "")  setResponsive(styles.responsiveBar);
      else setResponsive("");
    }

  const closeNav = ()=>{
    setResponsive("");
  }

  return (
    
    <nav >
        <ul  className={responsive}>
          <button id={styles.closeNav} onClick={opencloseNav}><img src="./src/assets/x-icon2.svg" alt="X icon"  width={16} height={16} /></button>
          <Link to="/" className={styles.links} onClick={closeNav}>Domov</Link>
          <Link to="/about" className={styles.links} onClick={closeNav}>O nás</Link>
          <Link to="/menu" className={styles.links} onClick={closeNav}>Hladké a vlnité lepenky</Link>
          <Link to="/Reservation" className={styles.links} onClick={closeNav}>Antikorózne materiály</Link>
          <Link to="/order_online" className={styles.links} onClick={closeNav}>Peny a profily</Link>
          <Link to="/login" className={styles.links} onClick={closeNav}>Kontakt</Link>
            
        </ul>
        <button id={styles.openNav} onClick={opencloseNav}><img src="./src/assets/menu-icon.svg" alt="menu icon"  width={16} height={16} color='green' /></button>
    </nav>
    
   
  )
}

export default Nav
