import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import Title from '../../components/Title';
import InfoBox from './InfoBox/index';
import styles from './style.module.scss';
import projectData from './projectData.json';

export default function Project(props) {
  const { ParallaxLayer } = props;
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
        <Title text="Projects" isDisplay={isDisplay} />
        <div className={styles.container}>
          <ul>
            {projectData.map((proj, index) => (
              <li key={index}>
                <InfoBox
                  name={proj.name}
                  imageName={proj.mainImage}
                  isDescription={false}
                />
              </li>
            ))}
          </ul>
        </div>
      </InView>
    </ParallaxLayer>
  );
}
