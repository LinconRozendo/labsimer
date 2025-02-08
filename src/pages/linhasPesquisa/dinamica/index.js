import React from 'react';
import styles from '@/styles/adsorcao.module.css';



export default function SobreNos() {
    return (
        <div className={styles.divStructure}>
            <h1 className={styles.textTitle}> 
                Dinâmica dos Fluidos Computacional 
            </h1>

            <h1 className={styles.textDescribe} >
            Desenvolvimento de simulação numérica de fluídos em movimento. Utiliza ferramentas computacionais avançadas para analisar
             e prever o comportamento de líquidos e gases em diferentes condições. Aplicações incluem engenharia aeronáutica, automotiva,
              e processos industriais. 
                
                <br /><br />

        
            </h1>

            <div className={styles.divImages}>
                <div className={styles.images}>
                    <img
                        className={styles.imageLabSimer}
                        src="/dinamica.jpg"
                    />
                </div>
            </div>
            
        </div>
    )
}