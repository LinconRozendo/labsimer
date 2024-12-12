import React from 'react';
import styles from './FooterBox.module.css';
import Link from 'next/link';

export function FooterBox() {
    return (
        <footer className={styles.footerBox}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem', width: '900px', margin: '0 auto', borderTop: '3px solid white' }}>
                {/* Links das Redes Sociais */}
                <Link href="https://twitter.com/labsimer" legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', margin: '10px 0.5rem 0 0.5rem' }}>
                        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg" alt="Twitter" style={{ width: '24px', height: '24px', filter: 'brightness(0) invert(1)' }} />
                    </a>
                </Link>
                <Link href="https://www.facebook.com/labsimer" legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', margin: '10px 0.5rem 0 0.5rem' }}>
                        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/facebook.svg" alt="Facebook" style={{ width: '24px', height: '24px', filter: 'brightness(0) invert(1)' }} />
                    </a>
                </Link>
                <Link href="https://www.linkedin.com/company/labsimer" legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', margin: '10px 0.5rem 0 0.5rem' }}>
                        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" alt="LinkedIn" style={{ width: '24px', height: '24px', filter: 'brightness(0) invert(1)' }} />
                    </a>
                </Link>
                {/* Adicionando o link do Instagram */}
                <Link href="https://www.instagram.com/labsimer_ufpb" legacyBehavior>
                    <a target="_blank" rel="noopener noreferrer" style={{ color: '#fff', textDecoration: 'none', margin: '10px 0.5rem 0 0.5rem' }}>
                        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/instagram.svg" alt="Instagram" style={{ width: '24px', height: '24px', filter: 'brightness(0) invert(1)' }} />
                    </a>
                </Link>
            </div>

            {/* Informações de Contato */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1rem', padding: '0 2rem' }}>
                <div style={{ textAlign: 'center' }}>
                    <p style={{ margin: 0, fontFamily: 'Roboto' }}>© 2024 LABSIMER - CEAR. Todos os direitos reservados.</p>
                </div>
                <div style={{ textAlign: 'right', fontFamily: 'Roboto' }}>
                    <p style={{ margin: 0 }}>Telefone: (83) 1234-5678</p>
                    <p style={{ margin: 0 }}>Ramal: 123</p>
                    <p style={{ margin: 0 }}>E-mail: contato@labsimer.com</p>
                </div>
            </div>
        </footer>
    );
}