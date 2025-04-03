import React from 'react'
import styles from './Footer.module.css'
import { Link} from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className={styles.bigbox}>
        <div>
            <h2 className={styles.logo}>Kartobal</h2>
            
          </div>
        <div>
            <h3>Linky</h3>
          
            <ul className={styles.linksBar}>
            <Link to="/" className={styles.links} >Domov</Link>
          <Link to="/about" className={styles.links} >O nás</Link>
          <Link to="/menu" className={styles.links} >Hladké a vlnité lepenky</Link>
          <Link to="/Reservation" className={styles.links} >Antikorózne materiály</Link>
          <Link to="/order_online" className={styles.links} >Peny a profily</Link>
          <Link to="/login" className={styles.links} >Kontakt</Link>
            </ul>
        </div>
      </div>

      <div className={styles.bigbox}>
      <div>
        <h3>Kontakt</h3>
        <div className={styles.adContainer}>
           <div>
            <p>Kartobal spol. s r.o.</p>
            <p>Sládkovičova 6</p>
            <p>943 01  Štúrovo</p>
          </div>
        </div>
      </div>
      <div className={styles.slinks}>
        <h3>Sociálne siete</h3>
       <a href="https://meta.com"> <img src="./assets/facebookIcon.png" alt="facebook icon" /></a>
       <a href="https://instagram.com"><img src="./assets/instaIcon.png" alt="instagram icon" /></a>
       <a href="https://pinterest.com"><img src="./assets/pinterestIcon.png" alt="pinterest icon" /></a>
       <a href="https://youtube.com"><img src="./assets/youtubeicon.png" alt="youtube icon" /></a>
        
        
        
      </div>
      </div>
      </footer>

  )
}

export default Footer