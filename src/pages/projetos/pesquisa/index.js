import React from 'react';
import styles from '@/styles/pesquisa.module.css';

export default function Pesquisa() {
    return (
        <div className={styles.divStructure}>
            <h1 className={styles.textTitle}> 
                Pesquisa (em andamento)
            </h1>

            <p className={styles.textDescribe}>
                As atividades de pesquisa desenvolvidas no LABSIMER são vinculadas a projetos de Iniciação Científica (PIBIC), a projetos
                de Pesquisa (PQ), a projetos de Pesquisa e Desenvolvimento (P&D), e a projetos de Pesquisa, Desenvolvimento e Inovação
                (PD&I), propostos de maneira individual e/ou em grupo, como os projetos atualmente em desenvolvimento pelo grupo,
                entre outros já desenvolvidos:
            </p>

            <ul className={styles.projectList}>
                <li>
                    <strong>1)</strong> Modelagem e Projeto de Aerogeradores de Eixo Vertical – PIBIC/FAPESQ (Prof. João Lima)
                </li>
                <li>
                    <strong>2)</strong> Modelagem e Projeto de Turbinas Eólicas de Eixo Vertical – PIBIC/UFPB (Prof. João Lima)
                </li>
                <li>
                    <strong>3)</strong> Desenvolvimento de Modelos Numéricos Aplicados à Energia Eólica Offshore – PIBIC/UFPB (Prof. Gilberto A.A. Moreira)
                </li>
                <li>
                    <strong>4)</strong> Projeto e Desenvolvimento Numérico e Experimental de um Sistema BIPVT (Building Integrated Photovoltaic/Thermal Systems)
                    Ventilado Naturalmente – P&D/FAPESQ (Prof. Taynara Geysa Silva do Lago)
                </li>
                <li>
                    <strong>5)</strong> Simulação Numérica da Influência da Dinâmica dos Ventos Sobre a Aceleração do Processo de Carbonatação em Torres
                    Tubulares de Concreto de Aerogeradores – PQ/Universal/CNPq (Prof. Márcio Rodrigo A. Souza)
                </li>
                <li>
                    <strong>6)</strong> Aplicação da Transformação Digital para Otimização da Operação de Unidades Geradoras a Ciclo Combinado Instaladas em
                    Área Isolada – PD&I (Prof. Ademar V. da Silva Neto)
                </li>
            </ul>

            <p className={styles.textDescribe}>
                Projetos de pesquisa com fomento de órgãos como CNPq, CAPES, Unidade Embrapii/CEAR, entre outros, estão sendo atualmente
                formatados objetivando o desenvolvimento científico do grupo de pesquisa, além da manutenção e atualização da infraestrutura
                laboratorial.
            </p>
        </div>
    );
}