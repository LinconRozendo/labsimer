import React from 'react';
import styles from '@/styles/discente.module.css';

export default function Discentes() {
    const discentes = [
        { no: 1, nome: "Diego Paes de Andrade Peña", vinculo: "Doutorado/PPGEM", orientador: "João A. Lima" },
        { no: 2, nome: "Túlio Rafael Nascimento Porto", vinculo: "Doutorado/PPGEM", orientador: "João A. Lima" },
        { no: 3, nome: "Jakson Gomes de Oliveira Junior", vinculo: "Doutorado/PPGEM", orientador: "João A. Lima" },
        { no: 4, nome: "Pedro Alfredo Eugênio", vinculo: "Doutorado/PPGEM", orientador: "João A. Lima" },
        { no: 5, nome: "Helder Alves de Oliveira", vinculo: "Doutorado/PPGEM", orientador: "João A. Lima" },
        { no: 6, nome: "Mateus Barbosa Monteiro", vinculo: "Mestrado/PPGEM", orientador: "João A. Lima" },
        { no: 7, nome: "João Gabriel Chaves Dias Azuaga", vinculo: "PIBIC/UFPB", orientador: "João A. Lima" },
        { no: 8, nome: "Carlos Henrique Alencar Almeida", vinculo: "Doutorado/PPGEM", orientador: "Gilberto A.A. Moreira" },
        { no: 9, nome: "Renan Douglas Lopes Da Silva Cavalcante", vinculo: "Mestrado/PPGER", orientador: "Taynara G.S. Lago" },
        { no: 10, nome: "Gustavo Basílio Lima", vinculo: "Mestrado/PPGER", orientador: "Taynara G.S. Lago" },
        { no: 11, nome: "Heloisa David Albuquerque Diniz", vinculo: "PIBIC/UFPB", orientador: "Taynara G.S. Lago" },
        { no: 12, nome: "Lincon Rozendo da Silva", vinculo: "PIBIC/UFPB", orientador: "Taynara G.S. Lago" }
    ];

    return (
        <div className={styles.divStructure}>
            <h1 className={styles.textTitle}> 
                Discentes vinculados ao LABSIMER
            </h1>

            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>NOME</th>
                        <th>VÍNCULO</th>
                        <th>Prof. Orientador</th>
                    </tr>
                </thead>
                <tbody>
                    {discentes.map((discente, index) => (
                        <tr key={index}>
                            <td>{discente.no}</td>
                            <td>{discente.nome}</td>
                            <td>{discente.vinculo}</td>
                            <td>{discente.orientador}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}