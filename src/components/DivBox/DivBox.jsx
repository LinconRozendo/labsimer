import React from 'react';
import styles from './DivBox.module.css';
import Link from 'next/link';


export function DivBoxHomeAboutUs() {
    return(
        <div className={styles.divHomeAboutUs} >
            <div className={styles.divStructure} >
                <div className={styles.divText} >
                    <h1 className={styles.textTitleP1}>
                        CONHEÇA O LABTAY
                    </h1>
                    <h1 className={styles.textTitleP2}> 
                        Construindo Futuros Sustentáveis 
                    </h1>
                    <h1 className={styles.textDescribe} >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                     labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                       in culpa qui officia deserunt mollit anim id est laborum.
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
                            src="/img1.jpeg"
                        />
                    </div>

                    <div className={styles.images}>
                        <img
                            className={styles.imageLabFilm}
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

