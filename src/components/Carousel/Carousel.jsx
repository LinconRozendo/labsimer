import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './Carousel.module.css';

export function CarouselClients({ clients }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className={styles.carouselContainer}>
            <h2 className={styles.carouselTitle}>Parceiros do LabTAY</h2>
            <Slider {...settings} className={styles.carouselSlider} >
                {clients.map((client, index) => (
                    <div key={index} className={styles.clientItem}>
                        <img src={client.logo}  className={styles.clientLogo} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}