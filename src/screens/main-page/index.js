import React from 'react';
import Carousel from "react-multi-carousel";
//import "react-multi-carousel/lib/styles.css";
import { TariffCardBeginner } from './components/tariff-card-beginner';
import { TariffCardBusiness } from './components/tariff-card-business';
import { TariffCardPro } from './components/tariff-card-pro';

const CustomLeftArrow = ({ onClick }) => (
    <i onClick={() => onClick()} className="custom-left-arrow" />
  );

const CustomRightArrow = ({ onClick }) => (
    <i onClick={() => onClick()} className="custom-right-arrow" />
  );

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Main = () => {
    return (
        <>
            <section className='main-section1'>
                <div className='main-section1-header'>сервис по поиску публикаций<br/>о компании<br/>по его ИНН</div>
                <div className='main-section1-text'>Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.</div>
                <button className='main-section1-button'>Запросить данные</button>
            </section>
            <section className='main-section2'>
                <div className='main-section2-header'>Почему именно мы</div>
                <div className='main-section2-carousel'>
                    <Carousel 
                        swipeable={false}
                        draggable={false}
                        showDots={false}
                        responsive={responsive}
                        ssr={false} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={false}
                        customLeftArrow={<CustomLeftArrow />}
                        customRightArrow={<CustomRightArrow />}
                        customTransition="transform 300ms ease-in-out"
                        transitionDuration={300}
                        containerClass="react-multi-carousel-list"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListClass="custom-dot-list-style"
                    >
                        <div>
                            <div className='main-section2-carousel-card'>
                                <div className='main-section2-carousel-card-img1'></div>
                                <div className='main-section2-carousel-card-text'>
                                    Высокая и оперативная скорость обработки заявки
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='main-section2-carousel-card'>
                                <div className='main-section2-carousel-card-img2'></div>
                                <div className='main-section2-carousel-card-text'>
                                    Огромная комплексная база данных, обеспечивающая объективный ответ на запрос
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='main-section2-carousel-card'>
                                <div className='main-section2-carousel-card-img3'></div>
                                <div className='main-section2-carousel-card-text'>
                                    Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству
                                </div>
                            </div>
                        </div>
                    </Carousel>
                </div>
                <div className='main-section2-imgs-contaner'>
                    <div className='main-section2-img1'></div>
                    <div className='main-section2-img2'></div>
                </div>
            </section>
            <section className='main-section3'>
                <div className='main-section3-header'>
                    наши тарифы
                </div>
                <div className='main-section3-tariff-cards-container'>
                    <TariffCardBeginner currentUserTariff='Beginner'/>
                    <TariffCardPro currentUserTariff='Beginner'/>
                    <TariffCardBusiness currentUserTariff='Beginner'/>
                </div>
            </section>
        </>
    )
}
export { Main }