import React from 'react';
import styles from '@/styles/lideranca.module.css';



export default function Lideranca() {
    return (
        <div className={styles.divInitial}>
            <h1 className={styles.textTitle}> 
                Time de Liderança
            </h1>

            <div className={styles.divStructure} >

                <div className={styles.divImages}>
                    <div className={styles.images}>
                        <img
                            className={styles.imageLabSimer}
                            src="/joao_alves.png"
                        />
                    </div>
                </div>


                <div className={styles.divText} >
                    <h1 className={styles.textTitleP2}> 
                        João Alves de Lima
                    </h1>
                    <h1 className={styles.textTitleP1}>
                        Fenômenos de Transporte Dinâmica dos Fluidos Computacional Métodos Híbridos e Numéricos
                    </h1>
                    
                    
                    {/*<h1 className={styles.textDescribe} >
                    O Laboratório de Simulação de Multifísica em Energia – LABSIMER, vinculado ao Departamento de Engenharia de Energias 
                    Renovávies – DEER, desenvolve atividades de pesquisa do Grupo de Pesquisa MULTISIM: Modelagem e Simulação Computacional
                     em Multifísica, também vinculado ao DEER e cadastrado no CNPq desde 2014.

                    <br /><br />
                    O grupo de pesquisa é dedicado ao estudo e desenvolvimento de simulações computacionais de problemas de multifísica
                     associados aos processos otimizados de geração, distribuição, armazenamento e uso de energia (engenharia térmica; 
                     fenômenos de transporte: transferência de calor e mecânica dos fluidos; dinâmica dos sólidos). Localizado no endereço
                      http://www.dgp.cnpq.br/dgp/espelhogrupo/0433073486283582, o grupo busca inovar e aprimorar técnicas de modelagem e 
                      simulação para resolver problemas complexos em engenharia e ciências físicas. Com um time de 8 pesquisadores lotados 
                      no DEER e mais de 30 pessoas envolvidas, o grupo MULTISIM trabalha em colaboração com instituições acadêmicas e 
                      industriais para desenvolver soluções inovadoras. Os pesquisadores do grupo possuem expertise em áreas como mecânica, 
                      métodos numéricos, fluidos, calor e magneto hidrodinâmica, permitindo uma abordagem interdisciplinar e integrada para 
                      a resolução de problemas multifísicos.

                    
                    </h1>

                    {/*<Link className={styles.linkButton} href="/sobre-nos"> O Laboratório em Detalhes 
                        <img
                            className={styles.logoSearchIcon}
                            src="/science_icon.png"
                        />
                    </Link>*/}

                </div>

                
            </div>

            <div className={styles.divStructureText} >            
                <h1 className={styles.textDescribe} >
                    Possui graduação em Engenharia Mecânica pela Universidade Federal da Paraíba (1992), mestrado em Engenharia Mecânica
                    pela Universidade Federal do Rio de Janeiro (1995) e doutorado em Engenharia Mecânica pela Universidade Federal da 
                    Paraíba (2000). Professor Titular do Departamento de Engenharia de Energias Renováveis - DEER - do Centro de Energias
                    Alternativas e Renováveis - CEAR, da Universidade Federal da Paraíba - UFPB. Tem experiência na área de Engenharia 
                    Mecânica, com ênfase em Dinâmica dos Fluidos Computacional. Sua principal linha de ação está voltada à Simulação 
                    Computacional da Interação Fluido/Estrutura em Bombas de Cavidades Progressivas, à Simulação Computacional Híbrida
                    de Escoamentos Submetidos a Campos Magnéticos e à Análise de Escoamentos Turbulentos via Transformação Integral e 
                    Modelos Diferenciais de Turbulência. 

                    <br /><br />
                </h1>
            </div>

            
            
        </div>
    )
}