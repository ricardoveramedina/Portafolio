import React, { Fragment } from 'react';
import './style.scss';

export default function BackgroundLayer(props) {
  const { ParallaxLayer } = props;
  return (
    <Fragment>
      <ParallaxLayer factor={3} offset={2} speed={0} className="strato" />
      <ParallaxLayer factor={3} offset={4} speed={0} className="sky" />
    </Fragment>
  );
}
