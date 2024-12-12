import React from 'react';
import styles from './HeaderBox.module.css';

export default function HeaderBox() {
  return (
    <header className={styles.headerBox}>
      
        <div className={styles.headerDiv}>
          
          <img
            className={styles.logoLabFilm}
            src="/logo_labsimer.jpg"
            
            alt={'Photo initial'}
            style={{
                 // alignItems: ''
                //width: user.imageSize,
                //height: user.imageSize
            }}
          />
          

          <h1 className={styles.headerTitle}>
            LABSIMER <br></br> Laboratório de Simulação de Multifísica em Energia <br/>
          </h1>

          <img
            className={styles.logoCreditacao}
            src="/cear_logo.png"
            
            alt={'Photo initial'}
            style={{
                 // alignItems: ''
                //width: user.imageSize,
                //height: user.imageSize
            }}
          />

          <img
            className={styles.logoCreditacao}
            src="/ufpb_logo.png"
            
            alt={'Photo initial'}
            style={{
                 // alignItems: ''
                //width: user.imageSize,
                //height: user.imageSize
            }}
          />

        </div>
      
    </header>
    
  );
}
