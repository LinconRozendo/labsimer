import React from 'react';
import styles from '@/styles/pesquisa.module.css';



export default function SobreNos() {
    return (
        <div className={styles.divStructure}>
            <h1 className={styles.textTitle}> 
                Pesquisa (em andamento):
            </h1>

            <h1 className={styles.textDescribe} >
                As atividades de pesquisa desenvolvidas no LABSIMER são vinculadas a projetos de Iniciação Científica (PIBIC), a projetos
                 de Pesquisa (PQ), a projetos de Pesquisa e Desenvolimento (P&D), e a projetos de Pesquisa, Desenvolvimento e Inovação
                  (PD&I), propostos de maneira individual e/ou em grupo, como os projetos atualmente em desenvolvimento pelo grupo,
                   entre outros já desenvolvidos: 
                
                <br /><br />

                1) Modelagem e Projeto de Aerogeradores de Eixo Vertical – PIBIC/FAPESQ (Prof. João Lima) 

                <br /><br />

                2) Modelagem e Projeto de Turbinas Eólicas de Eixo Vertical – PIBIC/UFPB (Prof. João Lima) 

                <br /><br />

                3) Desenvolvimento de Modelos Numéricos Aplicados à Energia Eólica Offshore – PIBIC/UFPB (Prof. Gilberto A.A. Moreira) 
                
                <br /><br />

                4) Projeto e Desenvolvimento Numérico e Experimental de um Sistema BIPVT (Building Integrated Photovoltaic/Thermal Systems) 
                Ventilado Naturalmente – P&D/FAPESQ (Prof. Taynara Geysa Silva do Lago)

                <br /><br />

                5) Simulação Numérica da Influência da Dinâmica dos Ventos Sobre a Aceleração do Processo de Carbonatação em Torres
                 Tubulares de Concreto de Aerogeradores – PQ/Universal/CNPq (Prof. Márcio Rodrigo A. Souza) 

                 <br /><br />

                6) Aplicação da Transformação Digital para Otimização da Operação de Unidades Geradoras a Ciclo Combinado Instaladas em
                 Área Isolada – PD&I (Prof. Ademar V. da Silva Neto) 

                <br /><br />

                Projetos de pesquisa com fomento de órgãos como CNPq, CAPES, Unidade Embrapii/CEAR, entre outros, estão sendo atualmente
                 formatados objetivando o desenvolvimento científico do grupo de pesquisa, além da manutenção e atualização da infraestrutura
                  laboratorial.
        
            </h1>

            
        </div>
    )
}