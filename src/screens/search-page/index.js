import React from 'react';
import { CustomCheckbox } from './components/custom-checkbox';
import { SearchButton } from './components/search-button';

const Search = () => {
    return (
        <>
            <section className='search-section1'>
                <div className='search-section1-header-text'>Найдите необходимые данные в пару кликов.</div>
                <div className='search-section1-desc-text'>Задайте параметры поиска. Чем больше заполните, тем точнее поиск</div>
                <div className='search-section1-img-container'>
                    <div className='search-section1-img-document'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="91" height="112" viewBox="0 0 91 112" fill="none">
                            <path d="M54.4343 110.298L3.81699 83.6075C2.98487 83.1696 2.24738 82.5718 1.64683 81.8483C1.04628 81.1247 0.594479 80.2898 0.317337 79.3912C0.0401951 78.4927 -0.0568325 77.5483 0.031823 76.6122C0.120479 75.6761 0.393066 74.7667 0.83396 73.9362L37.8235 3.81925C38.7144 2.14096 40.2334 0.883497 42.0485 0.321609C43.8636 -0.240279 45.8273 -0.0609113 47.5106 0.820519L79.6802 17.7767L91 56.509L64.1213 107.299C63.2304 108.977 61.7115 110.235 59.8964 110.797C58.0813 111.359 56.1176 111.179 54.4343 110.298Z" fill="#029491"/>
                            <g opacity="0.3">
                                <path d="M79.6803 17.7761L69.2554 37.4955C68.4342 39.0601 68.2656 40.8861 68.7862 42.5746C69.3069 44.2631 70.4746 45.677 72.0343 46.5074L91.0001 56.5084L79.6803 17.7761Z" fill="white"/>
                            </g>
                            <g opacity="0.2">
                                <path d="M68.5477 39.3643C67.7699 40.8641 67.5281 42.5847 67.8622 44.2409C68.1962 45.897 69.0862 47.3893 70.3846 48.4704L70.9341 48.9257C73.1792 50.6841 87.9374 62.1923 88.2043 61.8155C88.4712 61.4387 90.9989 56.5088 90.9989 56.5088L72.0331 46.5078C72.0331 46.5078 67.3231 43.8388 68.5477 39.3643Z" fill="black"/>
                            </g>
                            <path d="M65.3769 34.4503C65.2356 34.7015 59.8975 32.1424 53.4291 28.7198C46.9606 25.2971 41.8266 22.3455 41.9993 22.0786C42.1721 21.8117 47.4944 24.3865 53.9629 27.8091C60.4313 31.2318 65.5496 34.1991 65.3769 34.4503Z" fill="#FAFAFA"/>
                            <path d="M74.6097 53.6515C74.4841 53.9027 65.7391 49.5538 55.0944 43.9331C44.4497 38.3125 35.9402 33.4925 36.0658 33.2413C36.1914 32.9901 44.9364 37.3391 55.5811 42.9597C66.2258 48.5804 74.751 53.3375 74.6097 53.6515Z" fill="#FAFAFA"/>
                            <path d="M73.1646 64.7361C73.039 64.9873 63.5247 60.2301 51.9223 54.0914C40.3199 47.9526 31.0097 42.8029 31.151 42.5517C31.2923 42.3005 40.8066 47.0577 52.409 53.1808C64.0114 59.3038 73.3059 64.4849 73.1646 64.7361Z" fill="#FAFAFA"/>
                            <path d="M68.5348 73.5122C68.3935 73.7634 58.8792 69.0062 47.2767 62.8832C35.6743 56.7601 26.3798 51.5791 26.5211 51.3279C26.6624 51.0767 36.161 55.8338 47.7634 61.9569C59.3659 68.0799 68.6918 73.261 68.5348 73.5122Z" fill="#FAFAFA"/>
                            <path d="M63.886 82.3042C63.7604 82.5554 54.2461 77.7982 42.6437 71.6594C31.0413 65.5207 21.7468 60.371 21.8724 60.1198C21.998 59.8686 31.528 64.6415 43.1304 70.7488C54.7328 76.8562 63.9802 82.053 63.886 82.3042Z" fill="#FAFAFA"/>
                            <path d="M59.2711 91.0803C59.1298 91.3315 49.6155 86.5744 38.0288 80.4513C26.442 74.3282 17.1161 69.1472 17.2574 68.896C17.3987 68.6448 26.8973 73.4019 38.4998 79.525C50.1022 85.6481 59.3967 90.8291 59.2711 91.0803Z" fill="#FAFAFA"/>
                        </svg>
                    </div>
                    <div className='search-section1-img-folders'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="141" height="69" viewBox="0 0 141 69" fill="none">
                            <path d="M3.84009 60.2402C2.66599 60.0718 1.60675 59.4443 0.895086 58.4954C0.183421 57.5465 -0.122455 56.3539 0.0446616 55.1796L5.57858 16.6746C5.75268 15.7065 6.30331 14.8469 7.10983 14.284C7.91636 13.721 8.91308 13.5006 9.88178 13.6709L13.4965 14.1959C14.203 14.305 14.9259 14.2164 15.5852 13.9399C16.2444 13.6635 16.8143 13.2099 17.2317 12.6295L18.2386 11.1579C18.656 10.5775 19.2259 10.124 19.8851 9.84749C20.5444 9.57103 21.2673 9.48241 21.9738 9.59149L39.1866 12.0616C39.834 12.1477 40.4493 12.3955 40.9757 12.782C41.5022 13.1686 41.9228 13.6815 42.1989 14.2734L42.853 15.7365C43.1282 16.3273 43.5476 16.8394 44.0724 17.2259C44.5972 17.6124 45.2107 17.8608 45.8566 17.9483L67.7599 21.0983C68.7364 21.2065 69.6301 21.6977 70.2449 22.4641C70.8596 23.2305 71.1452 24.2096 71.039 25.1863L65.3759 64.5606C65.2926 65.1417 65.0956 65.7007 64.7961 66.2055C64.4966 66.7104 64.1006 67.1513 63.6306 67.503C63.1606 67.8547 62.6259 68.1103 62.057 68.2552C61.4882 68.4001 60.8963 68.4314 60.3153 68.3475L3.84009 60.2402Z" fill="#455A64"/>
                            <g opacity="0.3">
                                <path d="M3.84009 60.2402C2.66599 60.0718 1.60675 59.4443 0.895086 58.4954C0.183421 57.5465 -0.122455 56.3539 0.0446616 55.1796L5.57858 16.6746C5.75268 15.7065 6.30331 14.8469 7.10983 14.284C7.91636 13.721 8.91308 13.5006 9.88178 13.6709L13.4965 14.1959C14.203 14.305 14.9259 14.2164 15.5852 13.9399C16.2444 13.6635 16.8143 13.2099 17.2317 12.6295L18.2386 11.1579C18.656 10.5775 19.2259 10.124 19.8851 9.84749C20.5444 9.57103 21.2673 9.48241 21.9738 9.59149L39.1866 12.0616C39.834 12.1477 40.4493 12.3955 40.9757 12.782C41.5022 13.1686 41.9228 13.6815 42.1989 14.2734L42.853 15.7365C43.1282 16.3273 43.5476 16.8394 44.0724 17.2259C44.5972 17.6124 45.2107 17.8608 45.8566 17.9483L67.7599 21.0983C68.7364 21.2065 69.6301 21.6977 70.2449 22.4641C70.8596 23.2305 71.1452 24.2096 71.039 25.1863L65.3759 64.5606C65.2926 65.1417 65.0956 65.7007 64.7961 66.2055C64.4966 66.7104 64.1006 67.1513 63.6306 67.503C63.1606 67.8547 62.6259 68.1103 62.057 68.2552C61.4882 68.4001 60.8963 68.4314 60.3153 68.3475L3.84009 60.2402Z" fill="black"/>
                            </g>
                            <path d="M43.6615 17.6472L29.7363 15.6075L28.8241 13.103C28.5106 12.2852 27.9821 11.5672 27.2944 11.0248C26.6066 10.4825 25.7851 10.136 24.9167 10.0219L11.3014 8.06826C10.1848 7.86958 9.03483 8.11979 8.10167 8.76446C7.16852 9.40913 6.5276 10.3961 6.3183 11.5108L6.09453 13.103L0.0700547 54.9044C-0.0679587 56.1883 0.30679 57.4749 1.11272 58.4839C1.91866 59.4929 3.09051 60.1427 4.37325 60.292L59.7211 68.3131C60.9944 68.5361 62.3041 68.2456 63.3638 67.5053C64.4235 66.765 65.1468 65.6351 65.3755 64.3628L71.0557 24.8766C71.1178 24.4576 71.0963 24.0306 70.9925 23.6199C70.8888 23.2093 70.7048 22.8233 70.4512 22.4841C70.1976 22.1449 69.8794 21.8593 69.5149 21.6436C69.1504 21.4279 68.7469 21.2865 68.3275 21.2275L43.6615 17.6472Z" fill="#455A64"/>
                            <path d="M54.8462 34.8257L21.9209 30.0928L19.9298 43.9444L52.8551 48.6773L54.8462 34.8257Z" fill="white"/>
                            <path d="M48.8775 40.2132C48.8775 40.3337 43.7825 39.7054 37.5342 38.8104C31.286 37.9153 26.234 37.0891 26.2599 36.96C26.2857 36.8309 31.3549 37.4678 37.6031 38.3628C43.8514 39.2579 48.8947 40.0927 48.8775 40.2132Z" fill="#263238"/>
                            <path d="M48.4564 43.1651C48.4564 43.2856 43.3614 42.6573 37.1131 41.7623C30.8649 40.8672 25.8129 40.041 25.8301 39.9119C25.8473 39.7828 30.9251 40.4197 37.1734 41.3147C43.4216 42.2098 48.4736 43.0446 48.4564 43.1651Z" fill="#263238"/>
                            <path d="M103.753 43.1309C103.391 43.2676 103.005 43.3315 102.618 43.3189C102.231 43.3063 101.851 43.2176 101.498 43.0577C101.146 42.8978 100.828 42.6699 100.564 42.3871C100.299 42.1043 100.093 41.7722 99.9575 41.4097L90.8347 17.5699C90.7303 17.2682 90.6864 16.9488 90.7056 16.6301C90.7248 16.3113 90.8067 15.9995 90.9466 15.7125C91.0865 15.4255 91.2817 15.1689 91.5209 14.9574C91.7602 14.746 92.0388 14.5838 92.3409 14.4802L94.5785 13.6196C95.0165 13.453 95.4009 13.1703 95.6905 12.8019C95.98 12.4335 96.1639 11.9932 96.2223 11.5282L96.3256 10.3664C96.3784 9.89952 96.5602 9.45659 96.8505 9.08722C97.1409 8.71784 97.5283 8.4366 97.9694 8.27498L108.607 4.19555C109.007 4.04096 109.439 3.98834 109.864 4.04243C110.289 4.09652 110.694 4.25561 111.043 4.50537L111.903 5.13365C112.251 5.38195 112.654 5.54023 113.078 5.5943C113.501 5.64838 113.932 5.59656 114.33 5.44349L127.894 0.279646C128.49 0.030377 129.16 0.0271478 129.759 0.270663C130.357 0.514178 130.834 0.984617 131.087 1.5792L140.416 25.9612C140.554 26.3233 140.619 26.7091 140.607 27.0963C140.595 27.4836 140.506 27.8646 140.346 28.2174C140.186 28.5703 139.958 28.888 139.675 29.1521C139.391 29.4163 139.058 29.6217 138.695 29.7566L103.753 43.1309Z" fill="#029491"/>
                            <g opacity="0.3">
                                <path d="M103.752 43.1307C103.39 43.2674 103.004 43.3312 102.617 43.3187C102.23 43.3061 101.85 43.2173 101.497 43.0574C101.145 42.8976 100.827 42.6697 100.563 42.3869C100.298 42.1041 100.092 41.7719 99.9565 41.4094L90.8338 17.5697C90.7293 17.2679 90.6854 16.9486 90.7046 16.6298C90.7238 16.3111 90.8057 15.9993 90.9456 15.7123C91.0855 15.4252 91.2807 15.1686 91.5199 14.9572C91.7592 14.7457 92.0378 14.5836 92.3399 14.48L94.5775 13.6193C95.0155 13.4527 95.3999 13.1701 95.6895 12.8016C95.9791 12.4332 96.1629 11.9929 96.2213 11.528L96.3246 10.3661C96.3774 9.89928 96.5592 9.45635 96.8495 9.08697C97.1399 8.7176 97.5273 8.43635 97.9684 8.27474L108.606 4.19531C109.006 4.04072 109.438 3.98809 109.863 4.04218C110.288 4.09628 110.693 4.25537 111.042 4.50513L111.902 5.1334C112.25 5.38171 112.653 5.53999 113.077 5.59406C113.5 5.64813 113.931 5.59632 114.329 5.44325L127.893 0.279401C128.489 0.0301328 129.159 0.0269037 129.758 0.270419C130.356 0.513934 130.833 0.984373 131.086 1.57895L140.415 25.9609C140.553 26.323 140.618 26.7088 140.606 27.0961C140.594 27.4833 140.505 27.8643 140.345 28.2172C140.185 28.57 139.957 28.8877 139.674 29.1519C139.39 29.4161 139.057 29.6215 138.694 29.7564L103.752 43.1307Z" fill="black"/>
                            </g>
                            <path d="M112.979 5.97684L104.372 9.2645L103.047 8.11983C102.608 7.74921 102.077 7.50527 101.509 7.41428C100.942 7.3233 100.361 7.38869 99.8283 7.60344L91.394 10.8308C90.6912 11.0804 90.1157 11.5979 89.7932 12.2703C89.4707 12.9427 89.4274 13.7155 89.6728 14.4197L90.0514 15.4008L99.9574 41.2889C100.29 42.071 100.917 42.6904 101.704 43.0126C102.49 43.3349 103.372 43.334 104.157 43.0102L138.419 29.894C139.224 29.6164 139.885 29.0308 140.258 28.2658C140.631 27.5009 140.685 26.6192 140.408 25.8146L131.044 1.35521C130.842 0.831398 130.44 0.409295 129.927 0.181726C129.413 -0.045842 128.831 -0.0602424 128.307 0.141699L112.979 5.97684Z" fill="#029491"/>
                            <path d="M124.878 12.2353L104.487 20.0422L107.771 28.6182L128.162 20.8112L124.878 12.2353Z" fill="white"/>
                            <path d="M123.176 17.2515C120.928 18.3555 118.614 19.3212 116.248 20.1432C113.94 21.11 111.574 21.9349 109.165 22.6132C111.403 21.5193 113.702 20.5539 116.05 19.7215C118.375 18.7577 120.754 17.9329 123.176 17.2515Z" fill="#263238"/>
                            <path d="M123.875 19.0845C121.637 20.1769 119.338 21.1395 116.99 21.9676C114.657 22.9275 112.269 23.7466 109.838 24.4205C112.086 23.3164 114.4 22.3507 116.766 21.5287C119.084 20.5712 121.458 19.7549 123.875 19.0845Z" fill="#263238"/>
                        </svg>
                    </div>    
                </div>
                <div className='search-section1-form-img-container'>
                    <form className='search-section1-form'>
                        <div className='search-section1-form-column1'>
                            <label className='search-section1-inn-label' htmlFor="inn">
                                ИНН компании*
                            </label>
                            <input className='search-section1-inn-input' type="text" name="inn" placeholder="10 цифр" />
                            <label className='search-section1-tone-label' htmlFor="tone">
                                Тональность*
                            </label>
                            <select className='search-section1-tone-input' name="tone">
                                <option value="any">Любая</option>
                                <option value="pos">Позитивная</option>
                                <option value="neg">Негативная</option>
                            </select>
                            <label className='search-section1-amount-label' htmlFor="amount">
                                Количество документов в выдаче*
                            </label>
                            <input className='search-section1-amount-input' type="text" name="amount" placeholder="От 1 до 1000" />
                            <label className='search-section1-range-label' htmlFor="startDate">
                                Диапазон поиска*
                            </label>
                            <div className='search-section1-range-input-container'>
                                <input className='search-section1-range-input1' type="text" name="startDate" placeholder="Дата начала" onFocus={(e)=> {e.currentTarget.type = "date"; }} />    
                                <input className='search-section1-range-input2' type="text" name="finishDate" placeholder="Дата конца" onFocus={(e)=> {e.currentTarget.type = "date"; }} />    
                            </div>
                        </div>
                        <div className='search-section1-form-column2'>
                            <CustomCheckbox name="max_comp" checkLabel="Признак максимальной полноты"/>
                            <CustomCheckbox name="bis_cont" checkLabel="Упоминания в бизнес-контексте"/>
                            <CustomCheckbox name="main_role" checkLabel="Главная роль в публикации"/>
                            <CustomCheckbox name="risk_fact" checkLabel="Публикации только с риск-факторами"/>
                            <CustomCheckbox name="tech_news" checkLabel="Включать технические новости рынков"/>
                            <CustomCheckbox name="ann_cal" checkLabel="Включать анонсы и календари"/>
                            <CustomCheckbox name="enb_news" checkLabel="Включать сводки новостей"/>
                            <SearchButton active={true}/>
                            <div className='search-section1-form-column2-legend-text'>* Обязательные к заполнению поля</div>
                        </div>
                    </form>
                    <div className='search-section1-back-img'></div>
                </div>
                
            </section>
        </>
    )
}
export { Search }