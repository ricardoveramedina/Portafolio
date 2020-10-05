import React, { useEffect, useState } from 'react';
import { InView } from 'react-intersection-observer';
import { Transition } from 'react-spring/renderprops';
import Job from './Job';
import styles from './style.module.scss';
import data from './resumeData.json';

export default function Resume(props) {
  const { ParallaxLayer } = props;
  const [isDisplayResume, setIsDisplayResume] = useState(false);
  const [jobsData, setJobsData] = useState();

  useEffect(() => {
    isDisplayResume ? setJobsData(data) : setJobsData();
  }, [isDisplayResume]);

  function Title(props) {
    const { isDisplayResume, title } = props;
    return (
      <Transition
        items={isDisplayResume}
        trail={isDisplayResume && 50}
        config={{ duration: 500 }}
        from={{ transform: 'translate3d(0,-400px,0)', opacity: 0 }}
        enter={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}
        leave={{ transform: 'translate3d(0,-400px,0)', opacity: 0 }}
      >
        {(isDisplay) =>
          isDisplay
            ? (props) => <h3 style={{ ...props }}>{title}:</h3>
            : (props) => ''
        }
      </Transition>
    );
  }

  function JobView(props) {
    const { isDisplay } = props;
    return (
      <Transition
        items={jobsData}
        trail={isDisplay && 50}
        config={{ duration: 1000 }}
        keys={(item) => item.id}
        from={{ transform: 'translate3d(0,-400px,0)', opacity: 0 }}
        enter={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}
        leave={{ transform: 'translate3d(0,-400px,0)', opacity: 0 }}
      >
        {(item) => (props) => (
          <div style={{ ...props }}>
            <Job jobData={item} />
          </div>
        )}
      </Transition>
    );
  }

  return (
    <ParallaxLayer
      offset={3}
      speed={0}
      factor={1}
      className={styles.parallax}
      //onClick={() => parallax.current.scrollTo(0)}
    >
      <section className={styles.resume}>
        <InView
          tag="div"
          onChange={(inView, entry) => {
            inView && !isDisplayResume
              ? setIsDisplayResume(true)
              : setIsDisplayResume(false);
          }}
        >
          <Title isDisplayResume={isDisplayResume} title={'Work Experience'} />
          {isDisplayResume && jobsData && (
            <JobView isDisplay={isDisplayResume} />
          )}
        </InView>
      </section>
      {/*  <img
        src={url('clients-main')}
        style={{ width: '40%' }}
        alt="clients-main"
      /> */}
    </ParallaxLayer>
  );
}
