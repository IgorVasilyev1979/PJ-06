import React from 'react';
import { SearchedVariantsAmount } from './components/searched-variants-amount';
import Carousel from "react-multi-carousel";
import { Card } from './components/card';

const CustomLeftArrow = ({ onClick }) => (
    <i onClick={() => onClick()} className="custom-left-arrow" />
  );

const CustomRightArrow = ({ onClick }) => (
    <i onClick={() => onClick()} className="custom-right-arrow" />
  );

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
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

const SearchOutput = () => {
    return (
        <>
            <section className='search-out-section1'>
                <div className='search-out-section1-header-text'>Ищем. Скоро будут результаты</div>
                <div className='search-out-section1-desc-text'>Поиск может занять некоторое время, просим сохранять терпение.</div>
                <div className='search-out-section1-img'></div>
            </section> 
            <section className='search-out-section2'>
                <div className='search-out-section2-header-text'>Общая сводка</div>
                <SearchedVariantsAmount amount={4221}/>
                <div className='search-out-section2-carousel-container'>
                    <div className='search-out-section2-carousel-header'>
                        <div className='search-out-section2-carousel-header-period'>Период</div>
                        <div className='search-out-section2-carousel-header-summ'>Всего</div>
                        <div className='search-out-section2-carousel-header-risks'>Риски</div>
                    </div>
                    <div className='search-out-section2-carousel'>
                        <Carousel
                            swipeable={false}
                            draggable={false}
                            showDots={false}
                            responsive={responsive}
                            ssr={false} // means to render carousel on server-side.
                            infinite={false}
                            autoPlay={false}
                            customTransition="transform 300ms ease-in-out"
                            transitionDuration={300}
                            //containerClass="react-multi-carousel-list"
                            customLeftArrow={<CustomLeftArrow />}
                            customRightArrow={<CustomRightArrow />}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            dotListClass="custom-dot-list-style"
                        >
                            <div>
                                <div className='search-out-section2-carousel-item'>
                                    <div className='search-out-section2-carousel-item-data'>
                                        <div className='search-out-section2-carousel-item-data-period'>10.09.2021</div>
                                        <div className='search-out-section2-carousel-item-data-summ'>5</div>
                                        <div className='search-out-section2-carousel-item-data-risks'>0</div>
                                    </div>
                                    <div className='search-out-section2-carousel-item-divider'></div>
                                </div>
                            </div>
                            <div>
                                <div className='search-out-section2-carousel-item'>
                                    <div className='search-out-section2-carousel-item-data'>
                                        <div className='search-out-section2-carousel-item-data-period'>13.09.2021</div>
                                        <div className='search-out-section2-carousel-item-data-summ'>2</div>
                                        <div className='search-out-section2-carousel-item-data-risks'>0</div>
                                    </div>
                                    <div className='search-out-section2-carousel-item-divider'></div>
                                </div>
                            </div>
                            <div>
                                <div className='search-out-section2-carousel-item'>
                                    <div className='search-out-section2-carousel-item-data'>
                                        <div className='search-out-section2-carousel-item-data-period'>17.09.2021</div>
                                        <div className='search-out-section2-carousel-item-data-summ'>6</div>
                                        <div className='search-out-section2-carousel-item-data-risks'>0</div>
                                    </div>
                                    <div className='search-out-section2-carousel-item-divider'></div>
                                </div>
                            </div>
                            <div>
                                <div className='search-out-section2-carousel-item'>
                                    <div className='search-out-section2-carousel-item-data'>
                                        <div className='search-out-section2-carousel-item-data-period'>20.09.2021</div>
                                        <div className='search-out-section2-carousel-item-data-summ'>8</div>
                                        <div className='search-out-section2-carousel-item-data-risks'>2</div>
                                    </div>
                                    <div className='search-out-section2-carousel-item-divider'></div>
                                </div>
                            </div>
                            <div>
                                <div className='search-out-section2-carousel-item'>
                                    <div className='search-out-section2-carousel-item-data'>
                                        <div className='search-out-section2-carousel-item-data-period'>12.10.2021</div>
                                        <div className='search-out-section2-carousel-item-data-summ'>1</div>
                                        <div className='search-out-section2-carousel-item-data-risks'>0</div>
                                    </div>
                                    <div className='search-out-section2-carousel-item-divider'></div>
                                </div>
                            </div>
                            <div>
                                <div className='search-out-section2-carousel-item'>
                                    <div className='search-out-section2-carousel-item-data'>
                                        <div className='search-out-section2-carousel-item-data-period'>15.10.2021</div>
                                        <div className='search-out-section2-carousel-item-data-summ'>10</div>
                                        <div className='search-out-section2-carousel-item-data-risks'>2</div>
                                    </div>
                                    <div className='search-out-section2-carousel-item-divider'></div>
                                </div>
                            </div>
                            <div>
                                <div className='search-out-section2-carousel-item'>
                                    <div className='search-out-section2-carousel-item-data'>
                                        <div className='search-out-section2-carousel-item-data-period'>16.10.2021</div>
                                        <div className='search-out-section2-carousel-item-data-summ'>4</div>
                                        <div className='search-out-section2-carousel-item-data-risks'>0</div>
                                    </div>
                                    <div className='search-out-section2-carousel-item-divider'></div>
                                </div>
                            </div>
                            <div>
                                <div className='search-out-section2-carousel-item'>
                                    <div className='search-out-section2-carousel-item-data'>
                                        <div className='search-out-section2-carousel-item-data-period'>17.10.2021</div>
                                        <div className='search-out-section2-carousel-item-data-summ'>3</div>
                                        <div className='search-out-section2-carousel-item-data-risks'>0</div>
                                    </div>
                                    <div className='search-out-section2-carousel-item-divider'></div>
                                </div>
                            </div>
                            <div>
                                <div className='search-out-section2-carousel-item'>
                                    <div className='search-out-section2-carousel-item-data'>
                                        <div className='search-out-section2-carousel-item-data-period'>18.10.2021</div>
                                        <div className='search-out-section2-carousel-item-data-summ'>3</div>
                                        <div className='search-out-section2-carousel-item-data-risks'>0</div>
                                    </div>
                                    <div className='search-out-section2-carousel-item-divider'></div>
                                </div>
                            </div>
                            <div>
                                <div className='search-out-section2-carousel-item'>
                                    <div className='search-out-section2-carousel-item-data'>
                                        <div className='search-out-section2-carousel-item-data-period'>19.10.2021</div>
                                        <div className='search-out-section2-carousel-item-data-summ'>3</div>
                                        <div className='search-out-section2-carousel-item-data-risks'>0</div>
                                    </div>
                                    <div className='search-out-section2-carousel-item-divider'></div>
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </section>
            <section className='search-out-section3'>
                <div className='search-out-section3-header'>Список документов</div>
                <div className='search-out-section3-cards-container'>
                    <Card />
                    <Card />
                </div>
                <button className='search-out-section3-view-more'>Показать больше</button>
            </section>
        </>
    )
}
export { SearchOutput }