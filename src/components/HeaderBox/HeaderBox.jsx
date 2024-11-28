import React from 'react';
import styles from './HeaderBox.module.css';

export default function HeaderBox() {
  return (
    <header className={styles.headerBox}>
      
        <div className={styles.headerDiv}>

          {/*<img
            className={styles.logoLabFilm}
            src="/logolabfilm.png"
            
            alt={'Photo initial'}
            style={{
                 // alignItems: ''
                //width: user.imageSize,
                //height: user.imageSize
            }}
          />*/}
          

          <h1 className={styles.headerTitle}>
            LabTAY <br></br> Laboratório da Professora Taynara <br/>
            Centro de Energias Alternativas e Renováveis - CEAR
          </h1>

          {/*<img
            className={styles.logoCreditacao}
            src="/logocreditacao.jpeg"
            
            alt={'Photo initial'}
            style={{
                 // alignItems: ''
                //width: user.imageSize,
                //height: user.imageSize
            }}
          />*/}

        </div>
      
    </header>
    
  );
}
