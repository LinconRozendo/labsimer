import React from 'react';
import styles from '@/styles/colaboradores.module.css';

export default function Colaboradores() {
    const colaboradores = [
        {
            nome: "Prof. José Maurício A.M. Gurgel",
            especialidade: "Sistemas Térmicos, Refrigeração e Ar Condicionado, Condicionamento por Adsorção",
            instituicao: "DEER/CEAR/UFPB"
        },
        {
            nome: "Prof. Zaqueu Ernesto da Silva",
            especialidade: "Sistemas Térmicos, Radiação Térmica, Métodos Inversos",
            instituicao: "DEER/CEAR/UFPB"
        },
        {
            nome: "Profa. Cristiane Kelly Ferreira da Silva",
            especialidade: "Transferência de Calor, Métodos Híbridos",
            instituicao: "DEER/CEAR/UFPB"
        },
        {
            nome: "Prof. Fabiano Cordeiro Cavalcanti",
            especialidade: "Transferência de Calor, Análise Estrutural, Dinâmicas dos Sólidos",
            instituicao: "DEER/CEAR/UFPB"
        },
        {
            nome: "Prof. Raimundo Aprigio M. Júnior",
            especialidade: "Análise Estrutural, Dinâmicas dos Sólidos",
            instituicao: "DEER/CEAR/UFPB"
        },
        {
            nome: "Prof. Diego Paes de A. Peña",
            especialidade: "Fenômenos de Transporte, Dinâmica dos Sólidos",
            instituicao: "DEM/CT/UFPB"
        },
        {
            nome: "Prof. Paulo Henrique Dias dos Santos",
            especialidade: "Engenharia de Petróleo, Dinâmica dos Fluidos Computacional",
            instituicao: "DEM/CT/UFPB"
        },
        {
            nome: "Prof. Jalison Charles dos Santos",
            especialidade: "Fenômenos de Transporte, Engenharia Térmica",
            instituicao: "URCA/CE"
        },
        {
            nome: "Prof. Tony Herbert F. de Andrade",
            especialidade: "Engenharia de Petróleo, Dinâmica dos Fluidos Computacional",
            instituicao: "UFCG/PB"
        },
        {
            nome: "Prof. Victor Wagner F. de Azevedo",
            especialidade: "Fenômenos de Transporte",
            instituicao: "UFERSA/RN"
        }
    ];

    return (
        <div className={styles.divStructure}>
            <h1 className={styles.textTitle}> 
                Pesquisadores/Colaboradores do LABSIMER
            </h1>

            <h1 className={styles.textDescribe} >
            
                Em face do caráter multidisciplinar dos processos associados à geração, transmissão, armazenamento e uso de
                 energia, os pesquisadores integrantes do Laboratório de Simulação de Multifísica em Energia, LABSIMER, possuem
                  formação nas áreas de mecânica dos fluidos, fenômentos de transporte, engenharia térmica, análise estrutural e 
                  outras áreas afins. O laboratório conta, atualmente, com os seguintes pesquisadores/colaboradores/discentes

            </h1>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>NOME</th>
                        <th>ESPECIALIDADE</th>
                        <th>INSTITUIÇÃO</th>
                    </tr>
                </thead>
                <tbody>
                    {colaboradores.map((colaborador, index) => (
                        <tr key={index}>
                            <td>{colaborador.nome}</td>
                            <td>{colaborador.especialidade}</td>
                            <td>{colaborador.instituicao}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}