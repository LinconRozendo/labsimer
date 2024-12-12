import React from 'react';
import styles from '@/styles/infraestrutura.module.css';



export default function SobreNos() {
    return (
        <div className={styles.divStructure}>
            <h1 className={styles.textTitle}> 
                INFRAESTRUTURA
            </h1>

            <h1 className={styles.textDescribe} >
                O Laboratório de Simulação de Multifísica em Energia – LABSIMER está alocado na sala física de número 3.21, 
                situada no 3º andar do novo prédio do CEAR.        
            </h1>

            <div className={styles.divImages}>
                <div className={styles.images}>
                    <img
                        className={styles.imageLabSimer}
                        src="/infraestrutura.jpg"
                    />
                </div>
            </div>
        </div>
    )
}