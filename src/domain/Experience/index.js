import React, { useEffect, useState } from 'react';
import { InView } from 'react-intersection-observer';
import { Transition } from 'react-spring/renderprops';
import Title from '../../components/Title';
import useWindowSize from '../../hooks/useWindowSize';
import Job from './Job';

import styles from './style.module.scss';
import data from './resumeData.json';

export default function Experience(props) {
  const { ParallaxLayer } = props;
  const [isDisplay, setIsDisplay] = useState(true);
  const [jobsData, setJobsData] = useState();
  const { width } = useWindowSize();

  useEffect(() => {
    isDisplay ? setJobsData(data) : setJobsData();
  }, [isDisplay]);

  function JobView(props) {
    const { isDisplay } = props;
    return (
      <Transition
        items={jobsData}
        trail={isDisplay && 50}
        //config={{ duration: 500 }}
        keys={(item) => item.id}
        from={{ transform: 'translate3d(0,-400px,0)', opacity: 0 }}
        enter={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}
        leave={{ transform: 'translate3d(0,-400px,0)', opacity: 0 }}
      >
        {(item) => (props) => (
          <li style={{ ...props }}>
            <Job jobData={item} />
          </li>
        )}
      </Transition>
    );
  }
  return (
    <ParallaxLayer
      offset={4}
      speed={0.3}
      factor={1}
      style={width < 500 && { height: '500px', position: 'static' }}
      className={styles.parallax}
    >
      <InView
        tag="section"
        className={styles.resume}
        onChange={(inView, entry) => {
          inView && !isDisplay && setIsDisplay(true);
        }}
      >
        <Title text={'Work Experience'} isDisplay={isDisplay} />
        {isDisplay && jobsData && (
          <div className={styles.list}>
            <ul>
              <JobView isDisplay={isDisplay} />
            </ul>
          </div>
        )}
      </InView>
    </ParallaxLayer>
  );
}
