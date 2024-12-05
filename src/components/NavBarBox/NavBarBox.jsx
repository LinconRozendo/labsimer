import Link from 'next/link';
import { useState } from 'react';
import styles from './NavBarBox.module.css';

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState({
    Produtos: false,
    Serviços: false,
  });

  const [searchOpen, setSearchOpen] = useState(false);

  const handleMouseEnter = (item) => {
    setDropdownOpen((prev) => ({ ...prev, [item]: true }));
  };

  const handleMouseLeave = (item) => {
    setDropdownOpen((prev) => ({ ...prev, [item]: false }));
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <nav className={styles.navBar}>
      <ul className={styles.navList}>
        <li
          onMouseEnter={() => handleMouseEnter('Serviços')}
          onMouseLeave={() => handleMouseLeave('Serviços')}
        >
          <Link className={styles.linkItem} href="/projetos">Projetos</Link>
          <ul className={`${styles.dropdown} ${dropdownOpen.Serviços ? styles.open : ''}`}>
            <li><Link href="/projetos/ensino">Pesquisa</Link></li>
            <li><Link href="/projetos/ensino">Extensão</Link></li>
          </ul>
        </li>
        <li><Link className={styles.linkItem} href="/Linhas de Pesquisa">Linhas de Pesquisa</Link></li>
        <li><Link className={styles.linkItem} href="/software">Software</Link></li>
        <li><Link className={styles.linkItem} href="/infraestrutura">Infraestrutura</Link></li>
        <li><Link className={styles.linkItem} href="/equipe-tecnica">Publicações</Link></li>
        <li><Link className={styles.linkItem} href="/sobre-nos">Equipe</Link></li>
        <li className={styles.searchContainer}>
          <button onClick={toggleSearch} className={styles.searchIcon}>
            <img
              className={styles.logoSearchIcon}
              src="/search_icon_black.png"
              alt={'Ícone de Pesquisa'}
            />
          </button>
          <div className={`${styles.searchBar} ${searchOpen ? styles.searchBarOpen : ''}`}>
            <input type="text" placeholder="Pesquisar..." className={styles.searchInput} />
            <button onClick={toggleSearch} className={styles.closeButton}>X</button>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;