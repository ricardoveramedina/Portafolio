import React, { Fragment, useRef } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { config } from 'react-spring';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ParallaxElements from '../../components/ParallaxElements';
import Intro from '../Intro';
import Overview from '../Overview';
import Project from '../Project';
import Skills from '../Skills';
import Experience from '../Experience';
import Education from '../Education';
import ProjectDescription from '../Project/Description';
import styles from './style.module.scss';

function App() {
  const parallax = useRef();
  return (
    //pages={4.6}
    <Router>
      <Fragment>
        <Parallax ref={parallax} pages={6} config={config.molasses}>
          {/* Elements creations with parallax */}
          <ParallaxElements ParallaxLayer={ParallaxLayer} />
          {/* sections */}
          <div className={styles.main}>
            <Intro ParallaxLayer={ParallaxLayer} parallax={parallax} />
            <Overview ParallaxLayer={ParallaxLayer} parallax={parallax} />
            <Project ParallaxLayer={ParallaxLayer} parallax={parallax} />
            {/*  <ProjectDescription
              ParallaxLayer={ParallaxLayer}
              parallax={parallax}
            /> */}
            <Skills ParallaxLayer={ParallaxLayer} parallax={parallax} />
            <Experience ParallaxLayer={ParallaxLayer} parallax={parallax} />
            <Education ParallaxLayer={ParallaxLayer} parallax={parallax} />
          </div>
        </Parallax>
      </Fragment>
      <Switch>
        {/*         <Route path="/project/description">
          <ProjectDescription
            ParallaxLayer={ParallaxLayer}
            parallax={parallax}
          />
        </Route> */}
      </Switch>
    </Router>
  );
}
/* 
<Router history={appHistory} onUpdate={() => window.scrollTo(0, 0)}>
<Route path="/" component={ Detail } />
</Router>, */

export default App;
