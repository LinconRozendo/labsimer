import React from 'react';
import styles from '@/styles/adsorcao.module.css';



export default function SobreNos() {
    return (
        <div className={styles.divStructure}>
            <h1 className={styles.textTitle}> 
                Métodos Inversos 
            </h1>

            <h1 className={styles.textDescribe} >
                Foca na determinação de parâmetros desconhecidos a partir de dados observados. Este método é aplicado em várias
                 áreas, como diagnóstico médico, geofísica e engenharia, permitindo a reconstrução de modelos a partir de medições
                  experimentais.  
                
                <br /><br />

        
            </h1>

            <div className={styles.divImages}>
                <div className={styles.images}>
                    <img
                        className={styles.imageLabSimer}
                        src="/inversos.png"
                    />
                </div>
            </div>
            
        </div>
    )
}