import React from "react";
import './Projects.css';

class Projects extends React.Component {
    render() {
        return (
            <div>
                <div className='ProjectsBody'>
                    <div className='ProjectsBodyTextH1'>Проекты на Arduino
                    </div>
                    <div className='ProjectsBodyText'>
                        Проект Ардуино – это всегда сочетание электронной схемы, <br />
                        некоторых связанных друг с другом аппаратных и механических <br />
                        устройств, системы питания и программного обеспечения <br />
                        Все проекты можно  разделить на несколько групп:
                    </div>
                    <div className='ProjectsBodyText2'>
                        <ul>
                            <li>Мигающие светодиоды – маячок, мигалка, светофор и другие.</li>
                            <li>Проекты с датчиками: от простейших аналоговых до цифровых, использующих разнообразные протоколы для обмена данными.</li>
                            <li>Устройства регистрации и отображения информации.</li>
                            <li>Машины и устройства с сервоприводами и шаговыми двигателями.</li>
                        </ul>
                    </div>
                    <div className='AllProjects'>
                        <div className='ProjectsFooter'>
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
        )
    }
}

export default Projects;