import React from 'react';
import styles from './DivBox.module.css';
import Link from 'next/link';


export function DivBoxHomeAboutUs() {
    return(
        <div className={styles.divHomeAboutUs} >
            <div className={styles.divStructure} >
                <div className={styles.divText} >
                    <h1 className={styles.textTitleP1}>
                        CONHEÇA O LABSIMER
                    </h1>
                    <h1 className={styles.textTitleP2}> 
                        Transformando Energia através da Simulação
                    </h1>
                    <h1 className={styles.textDescribe} >
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

                <div className={styles.divImages}>
                    <div className={styles.images}>
                        <img
                            className={styles.imageLabSimer}
                            src="/img3.jpg"
                        />
                    </div>
                </div>
            </div> 


            {/* Div da tela inicial - missão */}
            <div className={styles.divStructure} >

                <div className={styles.divImages}>
                    <div className={styles.divImagesVisao}>
                        <img
                            className={styles.imageVisao}
                            src="/img1.jpeg"
                        />
                    </div>
                </div>

                <div className={styles.divText} >
                    <h1 className={styles.textTitleP2Missao}> 
                        Missão
                    </h1>
                    <h1 className={styles.textDescribe} >
                    Contribuir para ampliação do conhecimento científico e técnico dos recursos e das tecnologias associadas
                     à produção/geração, transporte, armazenamento e uso otimizados de energia, em especial àquelas relacionadas
                      às fontes renováveis e alternativas, do setor acadêmico (graduação e pós-graduação), indústrias e empresas em geral.
                    </h1>
                    

                    {/*<Link className={styles.linkButton} href="/sobre-nos"> O Laboratório em Detalhes 
                        <img
                            className={styles.logoSearchIcon}
                            src="/science_icon.png"
                        />
                    </Link>*/}

                </div>
            </div>


            {/* Div da tela inicial - visão */}
            <div className={styles.divStructure} >

                <div className={styles.divText} >
                    <h1 className={styles.textTitleP2Missao}> 
                        Visão
                    </h1>
                    <h1 className={styles.textDescribe} >
                    Fortalecimento das atividades de ensino, pesquisa e extensão do DEER, especialmente, e do CEAR, de maneira mais
                     geral, na área de modelagem matemática e simulação de processos multifísicos que envolvam energia.
                    </h1>
                    

                    {/*<Link className={styles.linkButton} href="/sobre-nos"> O Laboratório em Detalhes 
                        <img
                            className={styles.logoSearchIcon}
                            src="/science_icon.png"
                        />
                    </Link>*/}

                </div>


                <div className={styles.divImages}>
                    <div className={styles.divImagesVisao}>
                        <img
                            className={styles.imageVisao}
                            src="/img1.jpeg"
                        />
                    </div>
                </div>


            </div>
            
             
        </div>

    )

}


export function DivBoxHomeNews({news}) {

    return(
        <div className={styles.divNews} >
            <div className={styles.divNewsStructure} >
                <div className={styles.divNewsTitle}>
                    <h1 className={styles.newsTitle}>
                        Últimas Notícias
                    </h1>
                </div>

                <div className={styles.divNewsLinks}>
                    {news.map((item, index) => (
                        <div key={index} className={styles.newsItem}>
                            <div className={styles.newsDate}>{item.date}</div>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                <img src={item.image} alt={item.title} className={styles.newsImage} />
                            </a>
                            <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.newsTitleLink}>
                                <div className={styles.newsLinksTitle}>{item.title}</div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

}

