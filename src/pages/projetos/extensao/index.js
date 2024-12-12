import React from 'react';
import styles from '@/styles/extensao.module.css';



export default function SobreNos() {
    return (
        <div className={styles.divStructure}>
            <h1 className={styles.textTitle}> 
                Extensão (em andamento):
            </h1>

            <h1 className={styles.textDescribe} >
                O Projeto de Extensão “Usina Escola: Formação de Competências de Tecnologias solares” (PJ1430-2024/PROBEX), 
                coordenado pela Profa. Taynara Lago, tem como principal objetivo difusão de conhecimento de novas formas de 
                utilização de energia limpa, com ênfase em tecnologias solares, para as escolas públicas do Estado da Paraíba e 
                para os alunos do curso de Engenharia de Energias Renováveis. A apresentação dessas tecnologias contribui para 
                conscientizar os alunos e a sociedade civil sobre a eficiência energética. 
                
                <br /><br />
        
            </h1>

            <div className={styles.divImages}>
                <div className={styles.images}>
                    <img
                        className={styles.imageLabSimer}
                        src="/usina_escola.jpeg"
                    />
                </div>
            </div>

            
        </div>
    )
}