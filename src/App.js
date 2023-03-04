import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import moduleCSS from './App.module.css';
import MainContainer from './Main/MainContainer';
import Platform from './Platform/Platform';
import Projects from './Projects/Projects';

let MRouters = (props) => {
  return (
    <a className={moduleCSS.RouterClick} href={props.url} >{props.name}</a>
  )
}

const App = (props) => {
  let MapRouters = props.store.MainData.RouterBtns.map(m => <MRouters url={m.url} name={m.name} flag={m.flag} />);

  return (
    <BrowserRouter>
      <div className='body'>
        <div className='body_header'>
          <div className='body_header_border'>
            <img className='body_header_border_img' width='40px' height='40px' />
            <div className='body_header_border_logo'></div>
            <div className='body_header_border_line'></div>
            <div className='body_header_border_name'>ENGINEER</div>
          </div>
          <div className='body_header_router'>
            <div>{
            }</div>
            {MapRouters}
          </div>
        </div>

        <Routes>
          <Route path='/Main' element={<MainContainer />} />,
          <Route path='/Projects' element={<Projects />} />
          <Route path='/Platform' element={<Platform />} />
          <Route path='/Info' />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
