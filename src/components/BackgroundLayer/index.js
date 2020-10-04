import React, { Fragment } from 'react';
import './style.scss';

export default function BackgroundLayer(props) {
  const { ParallaxLayer } = props;
  return (
    <Fragment>
      <ParallaxLayer factor={2} offset={1} speed={1} className="background1" />
      <ParallaxLayer factor={5} offset={2} speed={1} className="background2" />
    </Fragment>
  );
}
