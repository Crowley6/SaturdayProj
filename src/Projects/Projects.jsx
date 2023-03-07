import React from "react";
import './Projects.css';

const ProjectsMap = (props) => {
    return (
        <div className="Projects">
            <div className="ProjectsImg">{props.img}</div>
            <h1 className="ProjectsTextH1">{props.h1}</h1>
            <p className="ProjectsText">{props.name}</p>
            <a href="/Info"><button className="ProjectsButton" >Подробнее</button></a>
        </div>
    )
}

class Projects extends React.Component {
    render() {
        debugger
        let Projects = this.props.store.ProjectsData.Projects;
        let MapdProjects = Projects.map(mapd => <ProjectsMap img={mapd.img} h1={mapd.h1} name={mapd.name} />);
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
                        {MapdProjects}
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