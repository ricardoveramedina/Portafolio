import React, { Fragment } from 'react';
import BackgroundLayer from '../BackgroundLayer';
import Clouds from '../Clouds';
import './style.scss';

export default function ParallaxElements(props) {
  const { ParallaxLayer, urlAsset } = props;

  return (
    <Fragment>
      <BackgroundLayer ParallaxLayer={ParallaxLayer} />

      <ParallaxLayer
        offset={0}
        speed={0}
        factor={3}
        style={{
          backgroundImage: `url(${urlAsset('stars')})`,
          backgroundSize: 'cover',
        }}
      />

      <ParallaxLayer offset={2.1} speed={-0.3} className="satellite">
        <img alt="satellite4" src={urlAsset('satellite4')} />
      </ParallaxLayer>

      {/* Random Clouds  */}
      <Clouds ParallaxLayer={ParallaxLayer} urlAsset={urlAsset} />

      <ParallaxLayer offset={4.5} speed={-0.4} className="earth">
        <img src={urlAsset('earth')} alt="earth" />
      </ParallaxLayer>
    </Fragment>
  );
}
