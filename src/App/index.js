import React, { useState, useRef, Fragment } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { config } from 'react-spring';
import { Route, Switch } from 'react-router-dom';
import ParallaxElements from '../components/ParallaxElements';
import Intro from '../domain/Intro';
import Overview from '../domain/Overview';
import Project from '../domain/Project';
import Skills from '../domain/Skills';
import Experience from '../domain/Experience';
import Education from '../domain/Education';
import ScrollParallax from '../utils/ScrollParallax';

import styles from './style.module.scss';

function App() {
  const parallax = useRef();

  return (
    //pages={4.6}
    <Switch>
      <Parallax
        ref={parallax}
        pages={5.9}
        config={config.molasses}
        //scrolling={false}
      >
        {/* Elements creations with parallax */}
        <ParallaxElements ParallaxLayer={ParallaxLayer} />
        {/* sections */}
        <div className={styles.main}>
          <Intro ParallaxLayer={ParallaxLayer} parallax={parallax} />
          <Overview ParallaxLayer={ParallaxLayer} parallax={parallax} />
          <Project ParallaxLayer={ParallaxLayer} parallax={parallax} />
          <Skills ParallaxLayer={ParallaxLayer} parallax={parallax} />
          <Experience ParallaxLayer={ParallaxLayer} parallax={parallax} />
          {/* <Education ParallaxLayer={ParallaxLayer} parallax={parallax} /> */}
        </div>

        <Fragment>
          <Route path="/">
            <ScrollParallax parallax={parallax} destination={0} />
          </Route>
          <Route path="/overview">
            <ScrollParallax parallax={parallax} destination={1} />
          </Route>
          <Route exact path="/project">
            <ScrollParallax parallax={parallax} destination={2} />
          </Route>
          <Route path="/skills">
            <ScrollParallax parallax={parallax} destination={3} />
          </Route>
          <Route path="/experience">
            <ScrollParallax parallax={parallax} destination={4} />
          </Route>
          <Route path="/education">
            <ScrollParallax parallax={parallax} destination={5} />
          </Route>
        </Fragment>
      </Parallax>
    </Switch>
  );
}

export default App;
