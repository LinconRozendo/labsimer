import React from "react";
import "@/styles/globals.css";
import HeaderBox from '@/components/HeaderBox/HeaderBox.jsx';
import NavBar from '@/components/NavBarBox/NavBarBox.jsx';
import {DivBoxHomeAboutUs, DivBoxHomeNews} from '@/components/DivBox/DivBox.jsx';
import {CarouselClients} from '@/components/Carousel/Carousel.jsx';
import {FooterBox} from '@/components/FooterBox/FooterBox.jsx';

export default function App({ Component, pageProps, router}) {

  const newsData = [
    {
        date: '2023/10/01',
        image: '/news_image1.png',
        title: 'Laboratório de Síntese e Caracterização de Filmes Finos – LabFilm/CEAR',
        link: 'https://example.com/news1',
    },
    {
        date: '2023/10/02',
        image: '/news_image2.png',
        title: 'Notícia 2',
        link: 'https://example.com/news2',
    },
    {
        date: '2023/10/03',
        image: '/news_image2.png',
        title: 'Notícia 3',
        link: 'https://example.com/news3',
    },
    {
        date: '2023/10/04',
        image: '/news_image1.png',
        title: 'Notícia 4',
        link: 'https://example.com/news4',
    },
    {
      date: '2023/10/01',
      image: '/news_image1.png',
      title: 'Notícia 1',
      link: 'https://example.com/news1',
  },
  {
      date: '2023/10/02',
      image: '/news_image2.png',
      title: 'Notícia 2',
      link: 'https://example.com/news2',
  },
  {
      date: '2023/10/03',
      image: '/news_image2.png',
      title: 'Notícia 3',
      link: 'https://example.com/news3',
  },
  {
      date: '2023/10/04',
      image: '/news_image1.png',
      title: 'Notícia 4',
      link: 'https://example.com/news4',
  },
  ];

  const clientsData = [
    {
        name: 'Cliente 1',
        logo: '/cear_logo.png',
    },
    {
        name: 'Cliente 2',
        logo: 'ufpb_logo.png',
    },
    {
        name: 'Cliente 4',
        logo: '/cear_logo.png',
    },
    {
        name: 'Cliente 5',
        logo: 'ufpb_logo.png',
    },
  ];

  const isHomePage = router.pathname === "/"; // Verifica se a rota atual é a página de início

  return (
    <div>
      <HeaderBox />
      <NavBar />
      {isHomePage && (
            <DivBoxHomeAboutUs />
        )}
      <Component {...pageProps} />
      <FooterBox />
    </div>
  )
}
