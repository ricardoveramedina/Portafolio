import React, { useState, useRef, Fragment } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { config } from 'react-spring';
import ParallaxElements from '../components/ParallaxElements';
import Intro from '../domain/Intro';
import Overview from '../domain/Overview';
import Project from '../domain/Project';
import Skills from '../domain/Skills';
import Experience from '../domain/Experience';
import Education from '../domain/Education';

import styles from './style.module.scss';

function App() {
  const parallax = useRef();
  return (
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
    </Parallax>
  );
}

export default App;
