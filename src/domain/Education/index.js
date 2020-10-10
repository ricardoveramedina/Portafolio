import React, { useState, Fragment } from 'react';
import { InView } from 'react-intersection-observer';
import { Transition } from 'react-spring/renderprops';
import Title from '../../components/Title';
import styles from './style.module.scss';
import educationData from './educationData.json';

export default function Education(props) {
  const { ParallaxLayer } = props;

  const [isDisplay, setIsDisplay] = useState(false);

  const EducationView = (props) => {
    const {
      isDisplay,
      title,
      university,
      link,
      date,
      city,
      description,
    } = props;

    return (
      <Transition
        items={educationData}
        trail={isDisplay && 50}
        //config={{ duration: 500 }}
        keys={(item) => item.id}
        from={{ transform: 'translate3d(0,-400px,0)', opacity: 0 }}
        enter={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}
        leave={{ transform: 'translate3d(0,-400px,0)', opacity: 0 }}
      >
        {(item) => (props) => (
          <div style={{ ...props }}>
            <h4>
              {title} -{' '}
              {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {university}
                </a>
              ) : (
                <Fragment>{university}</Fragment>
              )}
            </h4>
            <h5>
              {date} - {city}
            </h5>
            <p>{description}</p>
          </div>
        )}
      </Transition>
    );
  };

  return (
    <ParallaxLayer
      offset={5}
      speed={0.3}
      className={styles.parallax}
      style={{ position: 'static' }}
    >
      <InView
        tag="section"
        className={styles.education}
        onChange={(inView, entry) => {
          inView && !isDisplay && setIsDisplay(true);
        }}
      >
        <Title isDisplay={isDisplay} title={'Education'} />
        {isDisplay && educationData && (
          <EducationView
            isDisplay={isDisplay}
            title={educationData.title}
            date={educationData.date}
            university={educationData.university}
            city={educationData.city}
            description={educationData.description}
          />
        )}
      </InView>
    </ParallaxLayer>
  );
}
