import React from 'react'
import styles from './About.module.css'


function About() {
  return (
    <div className={styles.aboutcont}>
    <div className={styles.abouttext}>
      <div className={styles.smallwrapper}>
        <h1>O nás</h1>
        <p>Naša firma sa dlhodobo venuje výrobe obalov z kartonáže. Na základe našich bohatých skúseností a širokej škály našej ponuky dokážeme pokryť požiadavky malosériovej aj velkosériovej výroby, ako malých firiem, tak aj velkých medzinárodných výrobných kolosov. <br /> <br />

Našou prioritou je poskytnúť zákazníkom komplexné riešenia balenia ich výrobkov v požadovanej kvalite za čo najlepšie ceny. Úplne samozrejmé sú promptné poradenstvá a včasné dodávky tovaru ( just in time) našimi dopravnými prostriedkami po celom Slovensku, ako aj v zahraničí. <br /><br />

Ročne spracovávame až 1 000 ton lepeniek a kartonáže k úplnej spokojnosti našich zákazníkov. <br /><br />

Náš kolektív je Vám plne k dispozícii v oblasti balenia a ochrany Vašich výrobkov.</p>
        </div>
    </div>
    <div className={styles.aboutimage}>
        <img src="./src/assets/factoryai.png" />
    </div>
    </div>
  )
}

export default About