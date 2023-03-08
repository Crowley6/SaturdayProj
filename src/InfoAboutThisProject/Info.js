import React, { Component } from 'react';
import './Info.css';
import jpg1 from '../Pictures/lowsales.png';
import srtl1 from '../Pictures/strl1.svg';
import { Carousel } from 'react-responsive-carousel';

const Info = () => {
    return (
        <div>
            <div className='infoHead'>
                <h1 className='infoHeadH1'>
                    Проект № _ . Бегущий огонек
                </h1>
                <div className='ismain'>
                    <img className='is1' src={srtl1} alt='Картина' />
                    <div></div>
                    <div></div>
                    <img className='is2' src={srtl1} alt='Картина' />
                </div>

                <div className='infoHeadImg'>
                    <div className='iimain'>
                        <Carousel className='Carousel'>

                            {/* маппишь, и все, пример есть в projects.jsx  */}
                            <div><img src="" alt='aaa' /></div>
                            <div><img src="" alt='aaa' /></div>
                            <div><img src="" alt='aaa' /></div>
                                    
                        </Carousel>
                    </div>
                </div>
                <div className='infoHeadLNF'>
                    Выполнили проект :<br />
                    ФИО
                </div>
            </div>

            <div className='InfoAboutProject'>
                <div className='infoAbout'>
                    <h1 className='infoAboutH1'>Схема соединения</h1>
                    <img className='infoAboutImg' src={'1.jpg'} alt='Проект не отображается' />
                    <div className='InfoAboutModules'>
                        <div className='IAM1'>Основой для программирования и создание схемы  проекта  реализованы на платформе <span>TinkerCad</span></div>
                        <div className='IAM2'>
                            Используемые модули:
                            контроллер Arduino UNO
                            плата для прототипирования
                            резистор 10 Ом
                            светодиод 7 шт
                            провода папа-папа
                        </div>
                    </div>
                </div>
                <div className='infoAboutWasCreated'>
                    <div className='infoAWCCode'>
                        <h1 className='infoAWCH1'>Код проекта</h1>
                        <iframe src={'Project.html'} title='Код проекта'></iframe>
                    </div>
                    <div className='infoAWCText'>
                        Видеоролик как работает модуль, можно посмотреть тут:
                    </div>
                    <div className='infoAWCVideo'>
                        <video controls="controls" poster={jpg1}>
                            <source src='1.mp4' />
                        </video>
                        <div className='infoFooter'>
                            <div></div>
                            <div className='FooterText'>
                                <div>© 2022 Программная Инженерия</div>
                                <div>
                                    <div className='telegram'></div>
                                    <div className='youtube'></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )
}
export default Info;