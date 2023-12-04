import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
        return (
            <div className='search-out-section3-card'>
                <div className='search-out-section3-card-data-source-container'>
                    <div className='search-out-section3-card-data'>13.09.2021</div>
                    <Link to='#' className='search-out-section3-card-source'>Комсомольская правда KP.RU</Link>
                </div>
                <div className='search-out-section3-card-header'>Скиллфэктори - лучшая онлайн-школа для будущих айтишников</div>
                <div className='search-out-section3-card-tag'>Технические новости</div>
                <div className='search-out-section3-card-img'></div>
                <div className='search-out-section3-card-text'>
                    SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.
                    <br/>
                    <br/>
                    Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.
                </div>
                <div className='search-out-section3-card-button'>
                    <Link to='#' className='search-out-section3-card-button-text'>Читать в источнике</Link>    
                </div>
                <div className='search-out-section3-card-words'>2 543 слова</div>
            </div>
        )    
}
export { Card }