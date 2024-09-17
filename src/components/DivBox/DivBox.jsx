import React from 'react';
import styles from './DivBox.module.css';
import Link from 'next/link';


export function DivBoxHomeAboutUs() {
    return(
        <div className={styles.divHomeAboutUs} >
            <div className={styles.divStructure} >
                <div className={styles.divText} >
                    <h1 className={styles.textTitleP1}>
                        CONHEÇA O LABFILM
                    </h1>
                    <h1 className={styles.textTitleP2}> 
                        Construindo Futuros Sustentáveis, Camada por Camada 
                    </h1>
                    <h1 className={styles.textDescribe} >
                        Criado para disponibilizar suporte multiusuário para a comunidade científica do Centro de
                        Energias Alternativas e Renováveis, da Universidade Federal da Paraíba e Instituições públicas e
                        privadas de cunho educacional, empresarial e industrial voltados para o desenvolvimento científico e 
                        tecnológico regional, disponibiliza infraestrutura laboratorial de ponta para projetos de pesquisa, desenvolvimento
                        e inovação nos setores de energia e caracterização de materiais.
                    </h1>

                    <Link className={styles.linkButton} href="/sobre-nos"> O Laboratório em Detalhes 
                        <img
                            className={styles.logoSearchIcon}
                            src="/science_icon.png"
                        />
                    </Link>

                </div>

                <div className={styles.divImages}>
                    <div className={styles.images}>
                        <img
                            className={styles.imageLabFilm}
                            src="/labfilm_img1.png"
                        />
                    </div>

                    <div className={styles.images}>
                        <img
                            className={styles.imageLabFilm}
                            src="/labfilm_img2.png"
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

