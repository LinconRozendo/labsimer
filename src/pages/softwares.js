import React from 'react';
import styles from '@/styles/software.module.css';



export default function Software() {

    const softwareList = [
        {
            nome: "WindFarm",
            quantidade: 1,
            funcao: "Planejamento de Recursos Eólicos",
            observacao: "Licença Provisória"
        },
        {
            nome: "Eolusoft",
            quantidade: 1,
            funcao: "Simulação de Processos Eólicos",
            observacao: "Licença Gratuita"
        },
        {
            nome: "Ansys Multiphysics",
            quantidade: 1,
            funcao: [
                "Simulação de Fenômenos de Transporte (Escoamento e Transferência de Calor)",
                "Análise Estrutural e Dinâmica dos Sólidos",
                "Visualização de Simulação"
            ],
            observacao: [
                "Licença Estudantil",
                "Licença Acadêmica Provisória",
                "Licença de Código Aberto"
            ]
        },
        {
            nome: "OpenFoam",
            quantidade: 1,
            funcao: [
                "Simulação de Fenômenos de Transporte (Escoamento e Transferência de Calor)",
                "Análise Estrutural e Dinâmica dos Sólidos",
                "Visualização de Simulação"
            ],
            observacao: "Licenças Provisórias"
        },
        {
            nome: "Grapher/Surfer Softwares",
            quantidade: "1/1",
            funcao: "Elaboração de Gráficos 2D, 3D e Curvas de Nível (Isolinhas)",
            observacao: "Licenças Provisórias"
        },
        {
            nome: "Visual Studio Community",
            quantidade: 10,
            funcao: "Ambiente de Linguagens de Programação",
            observacao: "Licença Gratuita"
        },
        {
            nome: "Intel Fortran Compiler 2023",
            quantidade: 2,
            funcao: "Linguagem de Programação para Cálculo Numérico",
            observacao: "Licenças Permanentes Adquiridas junto à UFRJ"
        },
        {
            nome: "Python Language",
            quantidade: 10,
            funcao: "Linguagem de Programação Atual de uso Geral",
            observacao: "Licença Gratuita"
        },
        {
            nome: "IMSL Package",
            quantidade: 2,
            funcao: "Subrotinas Científicas para Cálculo Numérico",
            observacao: "Licenças Permanentes Adquiridas junto à UFRJ"
        },
        {
            nome: "CorelDraw",
            quantidade: 1,
            funcao: "Elaboração/Edição de Figuras e Imagens",
            observacao: "Licença Permanente"
        },
        {
            nome: "CYPECAD",
            quantidade: 1,
            funcao: "Análise Estrutural",
            observacao: "Licença Provisória"
        },
        {
            nome: "ConvergeCFD",
            quantidade: 5,
            funcao: "Simulação de Fenômenos de Transporte (Escoamento e Transferência de Calor)",
            observacao: "Licença Acadêmica"
        }
    ];


    return (
        <div className={styles.divStructure}>
            <h1 className={styles.textTitle}> 
                Hardware & Software 
            </h1>

            <h1 className={styles.textDescribe} >
            Os recursos necessários para o desenvolvimento das atividades de pesquisa e 
            ensino previstas para o Laboratório de Simulação de Multifísica em Energia – LABSIMER se 
            caracterizam por equipamentos computacionais de alto desempenho, e softwares especificos para 
            simulações dos diversos fenômenos físicos presentes nos processos de geração, transporte, 
            armazenamento e uso de energia. 
            Os softwares fundamentais que são utilizados no laboratório estão listados abaixo. 
            Além desses equipamentos, o laboratório conta ainda  com outros instrumentos necessários 
            para a realização de experimentos (como Data Logger de Temperatura Novus, Anemômetros, entre 
            outros).
            </h1>


            <div className={styles.container}>
                <h1 className={styles.title}>Lista de Softwares</h1>
                <ul className={styles.list}>
                    {softwareList.map((software, index) => (
                        <li key={index} className={styles.listItem}>
                            <h2 className={styles.itemTitle}>{software.nome}</h2>
                            <p className={styles.itemText}>
                                <strong className={styles.itemStrong}>Quantidade:</strong> {software.quantidade}
                            </p>
                            <p className={styles.itemText}>
                                <strong className={styles.itemStrong}>Função:</strong> {Array.isArray(software.funcao) ? software.funcao.join(", ") : software.funcao}
                            </p>
                            <p className={styles.itemText}>
                                <strong className={styles.itemStrong}>Observação:</strong> {Array.isArray(software.observacao) ? software.observacao.join(", ") : software.observacao}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>

            
        </div>
    )
}