import React from 'react'
import styles from './Testimonials.module.css'

function Testimonials() {
  return (
    <div className={styles.testimonial}>

        <h2>Naši partneri</h2>
        <div className={styles.testcontainer}>
            
            <div className={styles.testcard}>
                
                <img src="./assets/logoElarte.webp" alt="personicon"  width={50}/>
                
               
            </div>
            <div className={styles.testcard}>
                
                <img src="./assets/logoZda.png" alt="personicon" width={50}/>
                
               
            </div>
            <div className={styles.testcard}>
                
                <img src="./assets/logoRajo.png" alt="personicon" width={50}/>
                
              
            </div>
            <div className={styles.testcard}>
               
                <img src="./assets/logoSedita.svg" alt="personicon" width={50}/>
                
                
            </div>
            
           
        </div>
        
    </div>
  )
}

export default Testimonials