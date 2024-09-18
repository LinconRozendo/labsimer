import React from 'react';
import styles from './FooterBox.module.css';
import Link from 'next/link';

export function FooterBox() {
    return (
        <footer className={styles.footerBox} >
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem', width: '900px', margin: '0 auto', borderTop: '3px solid white' }}>
                <Link href="https://twitter.com/Labfilm" legacyBehavior>
                    <a style={{ color: '#fff', textDecoration: 'none', margin: '10px 0.5rem 0 0.5rem' }}>
                        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/twitter.svg" alt="Twitter" style={{ width: '24px', height: '24px', filter: 'brightness(0) invert(1)' }} />
                    </a>
                </Link>
                <Link href="https://www.facebook.com/Labfilm" legacyBehavior>
                    <a style={{ color: '#fff', textDecoration: 'none', margin: '10px 0.5rem 0 0.5rem' }}>
                        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/facebook.svg" alt="Facebook" style={{ width: '24px', height: '24px', filter: 'brightness(0) invert(1)' }} />
                    </a>
                </Link>
                <Link href="https://www.linkedin.com/company/labfilm" legacyBehavior>
                    <a style={{ color: '#fff', textDecoration: 'none', margin: '10px 0.5rem 0 0.5rem' }}>
                        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg" alt="LinkedIn" style={{ width: '24px', height: '24px', filter: 'brightness(0) invert(1)' }} />
                    </a>
                </Link>
            </div>

            <div style={{ textAlign: 'center', marginTop: '1rem', padding: '0 1rem' }}>
                <p style={{ margin: 0, fontFamily: 'Roboto' }}>© 2024 LabFilm - CEAR. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}