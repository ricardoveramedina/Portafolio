import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { config } from 'react-spring';
import Intro from '../Intro';
import About from '../About';
import Skills from '../Skills';
import Resume from '../Resume';
import ParallaxElements from '../ParallaxElements';

const url = (name, wrap = false) =>
  `${
    wrap ? 'url(' : ''
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ')' : ''
  }`;
function App() {
  const parallax = useRef();
  return (
    <Parallax ref={parallax} pages={4.6} config={config.molasses}>
      {/* Elements creations with parallax */}
      <ParallaxElements ParallaxLayer={ParallaxLayer} url={url} />
      {/* sections */}
      <Intro ParallaxLayer={ParallaxLayer} url={url} parallax={parallax} />
      <About ParallaxLayer={ParallaxLayer} url={url} parallax={parallax} />
      <Skills ParallaxLayer={ParallaxLayer} url={url} parallax={parallax} />
      <Resume ParallaxLayer={ParallaxLayer} url={url} parallax={parallax} />
    </Parallax>
  );
}

export default App;
