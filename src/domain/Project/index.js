import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import Title from '../../components/Title';
import InfoBox from './InfoBox/index';
import projectData from './projectData.json';
import { useTransition, animated } from 'react-spring';
import Description from './Description';
import styles from './style.module.scss';

export default function Project(props) {
  const { ParallaxLayer } = props;
  const [isDisplay, setIsDisplay] = useState(false);
  const [isDescription, setDescription] = useState(false);
  const [projIndex, setProjIndex] = useState(0);

  const transitionDescription = useTransition(isDescription, null, {
    from: { opacity: 0, transform: 'translate3d(0, 0px,-4000px)' },
    enter: { opacity: 1, transform: 'translate3d(0, 0,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,0,-4000px)' },
  });

  const showDescription = (status) => {
    setDescription(status);
    return isDescription;
  };

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
          inView && !isDisplay ? setIsDisplay(true) : showDescription(false);
        }}
      >
        <Title text="Projects" isDisplay={isDisplay} />
        {transitionDescription.map(
          ({ item, key, props }) =>
            item && (
              <animated.div
                key={key}
                style={{ ...props }}
                className={styles.description}
                onClick={() => showDescription(false)}
              >
                <Description
                  name={projectData[projIndex].name}
                  images={projectData[projIndex].images}
                  description={projectData[projIndex].description}
                />
              </animated.div>
            )
        )}
        <div className={styles.container}>
          <ul>
            {
              //!isDescription &&
              projectData.map((proj, index) => (
                <li key={index}>
                  <InfoBox
                    name={proj.name}
                    imageName={proj.mainImage}
                    projIndex={index}
                    isDescription={false}
                    showDescription={showDescription}
                    setProjIndex={setProjIndex}
                  />
                </li>
              ))
            }
          </ul>
        </div>
      </InView>
    </ParallaxLayer>
  );
}
