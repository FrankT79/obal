import React from 'react'
import styles from './Hero.module.css'
import { Link} from 'react-router-dom'

function Hero() {
  return (
    <div className={styles.container}>
        <div className={styles.textpart}>
            <h1 className={styles.lemon}>Váš spoľahlivý partner v oblasti balenia</h1>
            <h3 className={styles.chicago}>Odolné, ekologické a prispôsobiteľné obaly, ktoré plne vyhovujú Vašim potrebám!</h3>
            <Link to="/Reservation" className={styles.resbtn} >Vypýtajte si ponuku</Link>
        </div>
        <div className={styles.imagepart}>
            <img src="./src/assets/krabicevozik.jpg" alt="krabicevozik" />
        </div>
    </div>
  )
}

export default Hero