import React from 'react'
import styles from './Card.module.css'


function Card() {
  return (
    <>
    <div className={styles.bodycontainer}>
    <div className={styles.titlemain}>
        <h1 className={styles.maintitle}>Produkty</h1>
    </div>
    <div className={styles.container}>
    <div className={styles.card}>
        <img src="./src/assets/lepenky1.jpg" alt="greek salad" />
        <div className={styles.titleContainer}>
            <p className={styles.title}>Hladké a vlnité lepenky</p>
       </div>
        <p className={styles.description}>- výroba krabíc podľa FEFCO, ako aj atypických, z hladkých lepeniek a troj-, päť a sedemvrstvových vlnitých lepeniek <br />
        - výroba tvarovaných prírezov z hladkých a vlnitých lepeniek podľa predlohy zákazníka</p>
    </div>
    <div className={styles.card}>
        <img src="./src/assets/antikor1.jpg" alt="bruchetta" />
        <div className={styles.titleContainer}>
            <p className={styles.title}>Antikorózne materiály</p>
            
        </div>
        <p className={styles.description}>Ponúkame vysoko účinné materiály nemeckej firmy Branopac. Podľa požiadaviek zákazníka ponúkame VCI-vyparovacie inhibítory korózie na všetky druhy kovových výrobkov ( železo, zliatina, oceľ, meď, bronz, striebro ).</p>
    </div>
    <div className={styles.card}>
        <img src="./src/assets/pena.jpg" alt="lemon dessert" />
        <div className={styles.titleContainer}>
            <p className={styles.title}>Peny a profily</p>
            
        </div>
        <p className={styles.description}>	

Penové výplne, prírezy a profily (z PE a PP)

Obaly z penového polyetylénu a propylénu poskytujú vynikajúcu ochranu vyrobkov proti poškodeniu. Sú velmi pevné, pri opakovanom stlačení si zachovávajú svoj pôvodný tvar. Je možné i viacnásobné použitie.</p>
    </div>
    </div>
    </div>
    </>


    
  )
}

export default Card