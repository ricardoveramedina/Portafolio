import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import About from '../components/About';
import Skills from '../components/Skills';
import Resume from '../components/Resume';
import ParallaxElements from '../components/ParallaxElements';

const url = (name, wrap = false) =>
  `${
    wrap ? 'url(' : ''
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ')' : ''
  }`;
function App() {
  const parallax = useRef();
  return (
    <Parallax ref={parallax} pages={5.5}>
      {/* Elements creations with parallax */}
      <ParallaxElements ParallaxLayer={ParallaxLayer} url={url} />
      {/* sections */}

      <About ParallaxLayer={ParallaxLayer} url={url} parallax={parallax} />
      <Skills ParallaxLayer={ParallaxLayer} url={url} parallax={parallax} />
      <Resume ParallaxLayer={ParallaxLayer} url={url} parallax={parallax} />
    </Parallax>
  );
}

export default App;
