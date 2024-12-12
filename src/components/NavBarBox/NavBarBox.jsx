import Link from 'next/link';
import { useState } from 'react';
import styles from './NavBarBox.module.css';

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState({
    Projetos: false,
    LinhasPesquisa: false,
    Equipe: false,
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
          onMouseEnter={() => handleMouseEnter('Projetos')}
          onMouseLeave={() => handleMouseLeave('Projetos')}
        >
          <Link className={styles.linkItem} href="/projetos">Projetos</Link>
          <ul className={`${styles.dropdown} ${dropdownOpen.Projetos ? styles.open : ''}`}>
            <li className={styles.navSubMenu}><Link href="/projetos/ensino">Pesquisa</Link></li>
            <li className={styles.navSubMenu}><Link href="/projetos/extensao">Extensão</Link></li>
          </ul>

        </li>


        <li
          onMouseEnter={() => handleMouseEnter('LinhasPesquisa')}
          onMouseLeave={() => handleMouseLeave('LinhasPesquisa')}
        >
          <Link className={styles.linkItem} href="/linhas-pesquisa">Linhas de Pesquisa</Link>
          <ul className={`${styles.dropdown} ${dropdownOpen.LinhasPesquisa ? styles.open : ''}`}>
            <li className={styles.navSubMenu}><Link href="/LinhasPesquisa/ensino">Adsorção, Meios Porosos e Refrigeração</Link></li>
            <li className={styles.navSubMenu}><Link href="/LinhasPesquisa/ensino">Dinâmica dos Fluidos Computacional</Link></li>
            <li className={styles.navSubMenu}><Link href="/LinhasPesquisa/ensino">Mecânica dos Sólidos Computacional</Link></li>
            <li className={styles.navSubMenu}><Link href="/LinhasPesquisa/ensino">Métodos Híbridos e Numéricos</Link></li>
            <li className={styles.navSubMenu}><Link href="/LinhasPesquisa/ensino">Métodos Inversos</Link></li>
          </ul>

        </li>

        <li
          onMouseEnter={() => handleMouseEnter('Equipe')}
          onMouseLeave={() => handleMouseLeave('Equipe')}
        >
          <Link className={styles.linkItem} href="/equipe">Equipe</Link>
          <ul className={`${styles.dropdown} ${dropdownOpen.Equipe ? styles.open : ''}`}>
            <li className={styles.navSubMenu}><Link href="/equipe/time-lideranca">Time de Liderança</Link></li>
            <li className={styles.navSubMenu}><Link href="/equipe/colaboradores">Colaboradores/Pesquisadores</Link></li>
            <li className={styles.navSubMenu}><Link href="/equipe/discentes">Pesquisadores Discentes</Link></li>
          </ul>
        </li>

        <li><Link className={styles.linkItem} href="/infraestrutura">Infraestrutura</Link></li>
        <li><Link className={styles.linkItem} href="/softwares">Softwares</Link></li>
        <li><Link className={styles.linkItem} href="/publicacoes">Publicações</Link></li>
        <li><Link className={styles.linkItem} href="/contato">Contato</Link></li>
        
        
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