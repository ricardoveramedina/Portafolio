import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import InfoBox from '../InfoBox';
import Title from '../../../components/Title';
import styles from './style.module.scss';
import projectData from '../projectData.json';

export default function Description(props) {
  const { ParallaxLayer } = props;
  const { name, images } = projectData[0];

  const [isDisplay, setIsDisplay] = useState(false);

  return (
    <ParallaxLayer
      offset={2}
      speed={0.3}
      factor={1}
      className={styles.parallax}
    >
      <InView
        tag="section"
        className={styles.project}
        onChange={(inView, entry) => {
          inView && !isDisplay && setIsDisplay(true);
        }}
      >
        <Title text={name} isDisplay={isDisplay} />
        <div className={styles.container}>
          <ul>
            {images.map((data, index) => (
              <li key={index}>
                <InfoBox name={name} imageName={data} isDescription={true} />
              </li>
            ))}
          </ul>
        </div>
      </InView>
    </ParallaxLayer>
  );
}
