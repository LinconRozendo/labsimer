import React from 'react';
import styles from '@/styles/adsorcao.module.css';



export default function SobreNos() {
    return (
        <div className={styles.divStructure}>
            <h1 className={styles.textTitle}> 
                Mecânica dos Sólidos Computacional
            </h1>

            <h1 className={styles.textDescribe} >
            Estuda a resistência e deformação de materiais sólidos sob diversas condições de carga. Usa métodos numéricos
             para simular e prever o comportamento de estruturas e materiais, ajudando no desenvolvimento de produtos mais
              seguros e duráveis.  
                
                <br /><br />

        
            </h1>

            <div className={styles.divImages}>
                <div className={styles.images}>
                    <img
                        className={styles.imageLabSimer}
                        src="/mecanica.jpg"
                    />
                </div>
            </div>
            
        </div>
    )
}