import React from 'react';
import styles from '@/styles/infraestrutura.module.css';

const labSimerData = [
    {
        item: 1,
        descricao: <><strong>Workstation Intel® Core™</strong> - Alto Desempenho: Processador Enterprise 16-1300H, 2.6GHz 5.4GHz Turbo, 14C/20 Threads, 24MB Cache, Windows® 11 Pro, Memória 64 GB DDR5 ECC, SSD NVMe M 2 1TB</>,
        quantidade: 1,
        funcao: "Simulações de Elevado Custo Computacional (Compartilhado/Remoto)"
    },
    {
        item: 2,
        descricao: <><strong>Workstation Dell Precision T5820</strong> - Alto Desempenho: Processador Intel Xeon W-2135 3.7GHz-4.5GHz Turbo, 6C/12 Threads, 8.25 MB Cache - Windows® 10 Pro, Memória 64 GB DDR4 2666 MHz ECC, HD 1TB</>,
        quantidade: 1,
        funcao: "Simulações de Elevado Custo Computacional (Compartilhado/Remoto)"
    },
    {
        item: 3,
        descricao: <><strong>Workstation HPC darkFlash</strong> - Alto Desempenho: 2 Processadores Intel Xeon E5-268V W2, 2,4 GHz 4 GHz Turbo, 8C/16 Threads, 25 MB Cache, Windows® 10, Memória 256 GB DDR3 1866 MHz ECC, SSD NVMe 4 TB</>,
        quantidade: 1,
        funcao: "Simulações de Elevado Custo Computacional e Múltiplos Processadores (Compartilhado/Remoto)"
    },
    {
        item: 4,
        descricao: <><strong>Workstation Dell PowerEdge T420</strong> - Alto Desempenho: 2 Processadores Xeon E5-2470 v2, 2,4 GHz-3.2 GHz Turbo, 10C/20 Threads, 25 MB Cache, Windows® 10, Memória 128 GB DDR3 1866 MHz ECC, SSD NVMe 4 TB</>,
        quantidade: 2,
        funcao: "Simulações de Elevado Custo Computacional e Múltiplos Processadores (Compartilhado/Remoto)"
    },
    {
        item: 5,
        descricao: <><strong>Workstation Dell Precision T3610</strong> - Alto Desempenho: Processador Intel Xeon E5-286V v2, 3,3 GHz-4.0 GHz Turbo, 8C/16 Threads, 25 MB Cache, Windows® 10, Memória 128 GB DDR3 1866 MHz ECC, SSD NVMe 2 TB</>,
        quantidade: 1,
        funcao: "Simulações de Elevado Custo Computacional (Compartilhado/Remoto)"
    },
    {
        item: 6,
        descricao: <><strong>Workstation darkFlash</strong> - Desempenho intermediário: Processador Intel Xeon E5-1620 v2, 3,7 GHz-3.9 GHz Turbo, 4G/8 Threads, 10 MB Cache, Windows® 10, Memória 64 GB DDR3 1866 MHz ECC, SSD NVMe 1 TB</>,
        quantidade: 1,
        funcao: "Simulações de Custo Computacional Intermediário (Compartilhado)"
    },
    {
        item: 7,
        descricao: <><strong>Workstation Dell PowerEdge T110 II</strong> - Desempenho intermediário: Processador Xeon E3-1220 v2, 3,1 GHz-3.5 GHz Turbo, 4G/4 Threads, 8 MB Cache, Windows® 10 Pro, Memória 64 GB DDR3 1600 MHz ECC, SSD 1 TB</>,
        quantidade: 1,
        funcao: "Simulações de Custo Computacional Intermediário (Compartilhado)"
    },
    {
        item: 8,
        descricao: <><strong>Desktop Dell Optilex</strong>: Processador Core i7, Windows® 10, Memória 64 GB DDR3L 1600 MHz, SSD 1 TB</>,
        quantidade: 1,
        funcao: "Simulações de Baixo Custo Computacional (Compartilhado)"
    },
    {
        item: 9,
        descricao: <><strong>Desktop HP EliteDesk 705 G3 Mini</strong>: Core i5, Windows® 10, Memória 16 GB DDR3L 1600 MHz, SSD 500 GB</>,
        quantidade: 1,
        funcao: "Compartilhado"
    },
    {
        item: 10,
        descricao: <><strong>Notebook Dell Inspiron 3421</strong>: Processador Core i5 337U, 1.8 GHz-2.7 GHz Turbo, 2C/4Threads, 3 MB Cache, Windows® 11, Memória 16 GB DDR3L 1600 MHz, SSD 500 GB</>,
        quantidade: 2,
        funcao: "Uso Pessoal"
    },
    {
        item: 11,
        descricao: <><b>Notebook Gamer Lenovo IdealPad Gaming 3i</b>: Core i5-10300H, 2.5 GHz, 4.5 GHz Turbo, 8C/8Threads, 8 MB Cache, Windows® 11, Memória 32 GB, SSD 512 GB</>,
        quantidade: 3,
        funcao: "Uso Pessoal"
    },
    {
        item: 12,
        descricao: <><strong>Impressora Multifuncional Colorida e/ou Preto & Branco</strong></>,
        quantidade: 2,
        funcao: "Compartilhado"
    }
];


export default function Estrutura() {
    return (
        <div className={styles.divStructure}>
            <h1 className={styles.textTitle}> 
                Infraestrutura
            </h1>

            <h1 className={styles.textDescribe} >
                O Laboratório de Simulação de Multifísica em Energia – LABSIMER está alocado na sala física de número 3.21, 
                situada no 3º andar do novo prédio do CEAR.        
            </h1>

            <div className={styles.divImages}>
                <div className={styles.images}>
                    <img
                        className={styles.imageLabSimer}
                        src="/infraestrutura.jpg"
                    />
                </div>
            </div>

            <h1 className={styles.textDescribe} >
            O Laboratório de Simulação de Multifísica em Energia – LABSIMER se 
            caracteriza por equipamentos computacionais de alto desempenho, e softwares especificos para 
            simulações dos diversos fenômenos físicos presentes nos processos de geração, transporte, 
            armazenamento e uso de energia. 
            A infra-estrutura laboratorial do LABSIMER é assim descrita abaixo.        
            </h1>
            

            <div className={styles.container}>
                <h1 className={styles.title}>Estrutura do LABSIMER</h1>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>ITEM</th>
                            <th>DESCRIÇÃO</th>
                            <th>FUNÇÃO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {labSimerData.map((row, index) => (
                            <tr key={index}>
                                <td>{row.item}</td>
                                <td>{row.descricao}</td>
                                <td>{row.funcao}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    )
}