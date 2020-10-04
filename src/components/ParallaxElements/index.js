import React, { Fragment } from 'react';
import BackgroundLayer from '../BackgroundLayer';
import Clouds from '../Clouds';
import './style.scss';

export default function ParallaxElements(props) {
  const { ParallaxLayer, url } = props;

  return (
    <Fragment>
      <BackgroundLayer ParallaxLayer={ParallaxLayer} />

      <ParallaxLayer
        offset={0}
        speed={0}
        factor={3}
        style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }}
      />

      <ParallaxLayer offset={1.1} speed={-0.3} className="satellite">
        <img alt="satellite4" src={url('satellite4')} />
      </ParallaxLayer>

      {/* Random Clouds  */}
      <Clouds ParallaxLayer={ParallaxLayer} url={url} />

      <ParallaxLayer offset={3.6} speed={-0.4} className="earth">
        <img src={url('earth')} alt="earth" />
      </ParallaxLayer>
      {/* 
      <ParallaxLayer
        offset={2.3}
        speed={-0.3}
        style={{
          backgroundSize: '30%',
          marginLeft: '55%',
          opacity: '0.4',
          backgroundImage: url('clients-main', true),
          //backgroundImage: url('clients', true),
        }}
      /> */}
    </Fragment>
  );
}
