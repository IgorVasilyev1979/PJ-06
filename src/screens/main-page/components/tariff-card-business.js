import React from 'react';

const TariffCardBusiness = ({ currentUserTariff }) => {
    let ms3c = 'main-section3-card'
    let ms3cb = 'main-section3-card-badge'
    let ms3cbut = 'main-section3-card-button'
    let buttonText = 'Подробнее'
    if (currentUserTariff === 'Business') { 
        ms3c = ms3c + '-selected' 
        ms3cb = ms3cb + '-selected'
        ms3cbut = ms3cbut + '-selected'
        buttonText = 'Перейти в личный кабинет'
    }
    return (
        <>
            <div className={ms3c}>
                <div className='main-section3-card-header-business'>
                    <div className='main-section3-card-header-icon-business'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="81" viewBox="0 0 96 81" fill="none">
                            <path d="M89.7033 14.9271C94.2325 18.3403 97.4144 23.9166 95.3648 27.5895C93.8307 30.3046 76.0912 65.6497 67.0449 71.7658C56.4118 78.9655 13.0675 80.045 12.1827 80.0897C9.86533 80.2033 1.07474 67.2812 0.307693 58.9857C-0.366013 51.7535 3.09989 44.6066 3.33528 43.5636C3.57067 42.5205 25.4904 46.4045 25.4904 46.4045L42.3898 67.3542L89.7033 14.9271Z" fill="#3B3B4D"/>
                            <path d="M2.08156 43.1739C-5.58892 64.7892 10.2269 77.8534 12.7188 77.6707C41.0508 75.7592 55.2514 74.3185 61.6272 71.372C68.0031 68.4256 97.7475 31.7696 93.5632 20.5115C90.2799 11.6316 69.0907 0 69.0907 0C69.0907 0 55.6288 39.9839 46.9397 40.406C38.2505 40.8281 3.6806 38.673 2.08156 43.1739Z" fill="#545466"/>
                            <path d="M69.7559 4.69968C75.3078 10.1055 91.0059 18.3564 90.8598 22.2322C90.3688 33.88 67.0286 64.7729 65.7623 62.5327C64.4961 60.2924 50.673 41.7087 52.4344 40.1625C57.7104 35.4831 69.7559 4.69968 69.7559 4.69968Z" fill="white"/>
                            <path d="M47.0975 43.186C51.509 55.3857 60.4904 63.5675 58.9725 65.5075C57.4547 67.4474 29.013 73.1333 27.1543 71.1325C25.2955 69.1317 14.707 43.9774 15.5998 43.1291C16.4927 42.2809 47.0975 43.186 47.0975 43.186Z" fill="#3B3B4D"/>
                            <path d="M15.9085 52.5773C17.3005 59.1763 21.2453 63.9044 19.6301 65.1138C18.0148 66.3233 9.04562 68.1577 8.18523 67.3095C7.32484 66.4613 3.60327 56.7575 5.17795 53.1049C5.83542 51.5546 14.7599 47.1227 15.9085 52.5773Z" fill="#3B3B4D"/>
                        </svg>
                    </div>
                    <div className='main-section3-card-header-text-business'>Business</div>
                    <div className='main-section3-card-header-desc-business'>Для корпоративных клиентов</div>
                </div>
                <div className={ms3cb}>Текущий тариф</div>
                <div className='main-section3-card-price-container'>
                    <div className='main-section3-card-price'>2 379 ₽</div>
                    <div className='main-section3-card-old-price'>3 700 ₽</div>
                </div>
                <div className='main-section3-card-price-desc'>или 150 ₽/мес. при рассрочке на 24 мес.</div>
                <div className='main-section3-card-tariff-features-list-header'>В тариф входит:</div>
                <ul className='main-section3-card-tariff-features-list'>
                    <li className='main-section3-card-tariff-features-list-li'>Все пункты тарифа Pro</li>
                    <li className='main-section3-card-tariff-features-list-li'>Безлимитное количество запросов</li>
                    <li className='main-section3-card-tariff-features-list-li'>Приоритетная поддержка</li>
                </ul>
                <button className={ms3cbut}>{ buttonText }</button>
            </div>
        </>
    )
}
export { TariffCardBusiness }