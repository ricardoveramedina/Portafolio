import React, { Fragment } from 'react';
import './style.scss';

export default function BackgroundLayer(props) {
  const { ParallaxLayer } = props;
  return (
    <Fragment>
      <ParallaxLayer factor={1} offset={2} speed={0.5} className="strato" />
      <ParallaxLayer factor={3.5} offset={2.9} speed={0.5} className="sky" />
    </Fragment>
  );
}
