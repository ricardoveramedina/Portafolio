import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { config } from 'react-spring';
import Intro from '../Intro';
import About from '../About';
import Skills from '../Skills';
import Resume from '../Resume';
import ParallaxElements from '../ParallaxElements';

const urlAsset = (name) => `${process.env.PUBLIC_URL}/img/svg/${name}.svg`;
function App() {
  const parallax = useRef();
  return (
    <Parallax ref={parallax} pages={4.6} config={config.molasses}>
      {/* Elements creations with parallax */}
      <ParallaxElements ParallaxLayer={ParallaxLayer} urlAsset={urlAsset} />
      {/* sections */}
      <Intro ParallaxLayer={ParallaxLayer} parallax={parallax} />
      <About ParallaxLayer={ParallaxLayer} parallax={parallax} />
      <Skills
        ParallaxLayer={ParallaxLayer}
        urlAsset={urlAsset}
        parallax={parallax}
      />
      <Resume ParallaxLayer={ParallaxLayer} parallax={parallax} />
    </Parallax>
  );
}

export default App;
