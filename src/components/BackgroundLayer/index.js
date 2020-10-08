import React, { Fragment } from 'react';
import './style.scss';

export default function BackgroundLayer(props) {
  const { ParallaxLayer } = props;
  return (
    <Fragment>
      <ParallaxLayer factor={3} offset={2} speed={0.5} className="strato" />
      <ParallaxLayer factor={3} offset={3} speed={0.5} className="sky" />
    </Fragment>
  );
}
