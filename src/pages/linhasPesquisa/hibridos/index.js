import React from 'react';
import styles from '@/styles/adsorcao.module.css';



export default function SobreNos() {
    return (
        <div className={styles.divStructure}>
            <h1 className={styles.textTitle}> 
                Métodos Híbridos e Numéricos 
            </h1>

            <h1 className={styles.textDescribe} >
            Explora a combinação de técnicas analíticas e numéricas para resolver problemas complexos das engenharias. 
            Envolve o desenvolvimento de novos algoritmos e métodos de simulação combinando diferentes abordagens matemáticas.    
                
                <br /><br />

        
            </h1>

            <div className={styles.divImages}>
                <div className={styles.images}>
                    <img
                        className={styles.imageLabSimer}
                        src="/hibridos.png"
                    />
                </div>
            </div>
            
        </div>
    )
}