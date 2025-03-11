import React from 'react';
import styles from '@/styles/publicacoes.module.css'; // Importando o CSS específico

export default function Publicacoes() {
    // Dados dos professores e suas publicações
    const publicacoesProfessores = [
        {
            nome: "Prof. João Alves de Lima",
            publicacoes: [
                {
                    titulo: "GOMES, MICHELLI MAYARA DE MEDEIROS; CAVALCANTE, RENAN DOUGLAS LOPES DA SILVA; ANDO JUNIOR, OSWALDO HIDEO; PERO, CLAUDIO DEL; LIMA, JOÃO ALVES DE; LAGO, TAYNARA GEYSA SILVA DO. The Effect of Facade Orientation on the Electrical Performance of a BIPV System: A Case Study in João Pessoa, Brazil. Energies, v. 18, p. 829, 2025.",
                    doi: "http://dx.doi.org/10.3390/en18040829"
                },
                {
                    titulo: "OLIVEIRA, J. V. L.; SILVA, Zaqueu Ernesto da; LIMA, J. A.; NAVEIRA-COTTA, C. P.; COTTA, RENATO M. Conduction-Radiation Heat Transfer in a Gray Semi-Transparent Medium: Combining Integral Transforms and Discrete Ordinate Method. High Temperatures-High Pressures, v. 53, p. 113-143, 2024.",
                    doi: "http://dx.doi.org/10.32908/hthp.v53.JSF06"
                },
                {
                    titulo: "LIMA, J.A.; SILVA, Zaqueu Ernesto da; OLIVEIRA, J. V. L. Conduction-Radiation Heat Transfer in Non-Gray Semi-Transparent Planar Media: Combining Integral Transforms and Discrete Ordinate Method. JOURNAL OF QUANTITATIVE SPECTROSCOPY & RADIATIVE TRANSFER, v. 325, p. 109087, 2024.",
                    doi: "http://dx.doi.org/10.1016/j.jqsrt.2024.109087"
                }
            ]
        },
        {
            nome: "Prof. Gilberto Augusto A. Moreira",
            publicacoes: [
                {
                    titulo: "MOREIRA, GILBERTO A.A.; CAVALCANTI, F. C.; GUILHERME, A. L.; SANTOS, P. Investigation of the influence of ground roughness on airflow in the atmospheric boundary layer using OpenFOAM. In: 27th International Congress of Mechanical Engineering, 2023, Florianópolis.",
                    doi: "http://dx.doi.org/10.26678/ABCM.COBEM2023.COB2023-0151"
                },
                {
                    titulo: "ALMEIDA, C. H. A.; VERONESE, J. P.; SILVESTRE, A. D.; SOUTO, C. R.; MOREIRA, GILBERTO A.A. Solid State Thermoelectric Generator (SSTEG) - A Renewable Passive Heat Source. In: International Conference on Science, Engineering & Technology, 2022, New York.",
                    doi: "http://dx.doi.org/10.26678/ABCM.COBEM2023.COB2023-0135"
                },
                {
                    titulo: "GUILHERME, A. L.; MOREIRA, G. A. A.; LIMA, J. A. Two-dimensional CFD Analysis of the H-Darrieus Wind Turbine using OpenFOAM. In: 26th International Congress of Mechanical Engineering, 2021, VIRTUAL CONFERENCE.",
                    doi: "http://dx.doi.org/10.26678/ABCM.COBEM2021.COB2021-2041"
                }
            ]
        },
        {
            nome: "Profa. Taynara Geysa Silva do Lago",
            publicacoes: [
                {
                    titulo: "LIMA, Gustavo B.; PADILHA, B. R. P.; LAGO, TAYNARA G. S. MODELAGEM DE UMA PLANTA DE POTÊNCIA DE CICLO COMBINADO UTILIZANDO TESPY (BIBLIOTECA DE CÓDIGO ABERTO). In: XII Congresso Nacional de Engenharia Mecânica - CONEM 2024, 2024, NATAL.",
                    doi: "http://dx.doi.org/10.26678/ABCM.CONEM2024.CON24-1442"
                },
                {
                    titulo: "CAVALCANTE, R. D. L. S.; GOMES, M. M. M.; REBOUCAS, H. V. N.; SANTOS, M. E. T.; LAGO, TAYNARA G. S. DESENVOLVIMENTO E ANÁLISE DE DESEMPENHO DE UM PROTÓTIPO DE FORNO SOLAR FUN PANEL. In: XII Congresso Nacional de Engenharia Mecânica - CONEM 2024, 2024, NATAL.",
                    doi: "http://dx.doi.org/10.26678/ABCM.CONEM2024.CON24-0768"
                },
                {
                    titulo: "SILVA, D. N. C. E.; DANTAS, J.; ANDO JUNIOR, O. H.; LAGO, T. G. S. A evolução sustentável: avanços nas tecnologias renováveis impulsionados pelo carvão como fonte de energia emergente. In: XII Congresso Nacional de Engenharia Mecânica - CONEM 2024, 2024, NATAL.",
                    doi: "http://dx.doi.org/10.26678/ABCM.CONEM2024.CON24-1117"
                }
            ]
        },
        {
            nome: "Prof. Márcio Rodrigo de Araújo Souza",
            publicacoes: [
                {
                    titulo: "SOUZA, G. L.; LYRA, P.R.M.; SILVA, P. C. G.; CONTRERAS, F. R. L.; SOUZA, M. R. A.; CAVALCANTE, T. M.; CARVALHO, D.K.E. Numerical Simulation of Oil and Water Displacement in Petroleum Reservoirs Using a Non-Linear Two-Point Flux Approximation Method Coupled to a Modified Flow Oriented Formulation Using a Sequntial Implicit Procedure. In: CILAMCE 2021, 2021, Rio de Janeiro.",
                    doi: null // Sem DOI disponível
                },
                {
                    titulo: "LEANDRO, L. B. C.; SILVA NETO, J. F.; SOUZA, M.R.A.; CAVALCANTI, F. C.; SILVA, K. C. G. ANALYSIS OF THE FEASIBILITY OF A PARABOLIC HEAT CONDUCTION MODEL FOR SELECTIVE SURFACES THERMAL BEHAVIOR. In: International Congress of Mechanical Engineering - COBEM 2019, 2019, Uberlândia.",
                    doi: null // Sem DOI disponível
                },
                {
                    titulo: "CONTRERAS, F. R. L.; SOUZA, M. R. A.; LYRA, P. R. M.; CARVALHO, D. K. E. A Non-Orthodox MPFA Method Coupled to a High Order Modified Flow Oriented Scheme for the Simulation of Two-Phase Flows in Heterogeneous and Anisotropic Reservoirs. In: SPE Reservoir Simulation Conference, 2017, Montgomery.",
                    doi: null // Sem DOI disponível
                }
            ]
        }
    ];

    return (
        <div className={styles.divInitial}>
            <h1 className={styles.textTitle}>
                Publicações Científicas
            </h1>

            {/* Lista de publicações por professor */}
            {publicacoesProfessores.map((professor, index) => (
                <div key={index} className={styles.divStructure}>
                    <div className={styles.divText}>
                        <h2 className={styles.textTitleP2}>
                            {professor.nome}
                        </h2>
                        <ul className={styles.listaPublicacoes}>
                            {professor.publicacoes.map((pub, idx) => (
                                <li key={idx} className={styles.itemPublicacao}>
                                    <p>{pub.titulo}</p>
                                    {pub.doi && (
                                        <a
                                            href={pub.doi}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.linkDOI}
                                        >
                                            <i className="fas fa-file-pdf"></i> DOI
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
}