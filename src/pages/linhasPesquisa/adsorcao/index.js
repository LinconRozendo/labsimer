import React from 'react';
import styles from '@/styles/adsorcao.module.css';



export default function SobreNos() {
    return (
        <div className={styles.divStructure}>
            <h1 className={styles.textTitle}> 
                Adsorção, Meios Porosos e Refrigeração 
            </h1>

            <h1 className={styles.textDescribe} >
                Investigação da capacidade dos materiais porosos de adsorver gases e líquidos. A aplicação principal: 
                melhoria de processos de refrigeração e sistemas de armazenamento de energia. São estudados novos materiais e 
                tecnologias para maximização da eficiência energética. 
                
                <br /><br />

        
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