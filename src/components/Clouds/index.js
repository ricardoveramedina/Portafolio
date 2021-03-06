import React, { Fragment } from 'react';
import './style.scss';

export default function Clouds(props) {
  const { ParallaxLayer, assetUrl } = props;

  const Cloud = (props) => {
    const { paralaxName, offSet, speed, cloudNum } = props;

    return (
      <ParallaxLayer offset={offSet} speed={speed} className={paralaxName}>
        {[...Array(cloudNum)].map((x, i) => (
          <img
            alt="cloudtest"
            src={assetUrl('cloud')}
            key={paralaxName + i}
            className={'cloud' + (i + 1)}
          />
        ))}
      </ParallaxLayer>
    );
  };

  return (
    <Fragment>
      <Cloud
        ParallaxLayer={ParallaxLayer}
        paralaxName={'parallaxLayer1'}
        offSet={3}
        speed={0.8}
        cloudNum={2}
      />
      <Cloud
        ParallaxLayer={ParallaxLayer}
        paralaxName={'parallaxLayer2'}
        offSet={3.75}
        speed={0.5}
        cloudNum={2}
      />
      <Cloud
        ParallaxLayer={ParallaxLayer}
        paralaxName={'parallaxLayer3'}
        offSet={3}
        speed={0.2}
        cloudNum={2}
      />
      <Cloud
        ParallaxLayer={ParallaxLayer}
        paralaxName={'parallaxLayer4'}
        offSet={3.6}
        speed={-0.1}
        cloudNum={3}
      />
      <Cloud
        ParallaxLayer={ParallaxLayer}
        paralaxName={'parallaxLayer5'}
        offSet={(3, 6)}
        speed={0.4}
        cloudNum={2}
      />
    </Fragment>
  );
}
