import React, { Fragment, useState } from 'react';
import { useTransition, animated } from 'react-spring';
import styles from './style.module.scss';

//FIXME: warning cannot update a component "intro"
export default function Intro(props) {
  const { ParallaxLayer, parallax } = props;
  const [isDisplay, setIsDisplay] = useState(true);

  const transition = useTransition(isDisplay, null, {
    from: { transform: 'translateX(600px)', opacity: 0 },
    enter: { transform: 'translateX(0)', opacity: 1 },
    leave: { transform: 'translateX(50px)', opacity: 0 },
  });

  const TransitionSection = () => {
    return (
      <Fragment>
        {transition.map(
          ({ item, key, props }) =>
            item && (
              <animated.div
                key={key}
                style={{ ...props }}
                className={styles.intro}
              >
                <IntroSection />
              </animated.div>
            )
        )}
      </Fragment>
    );
  };

  const IntroSection = () => {
    return (
      <Fragment>
        <h5>Hey there, I'm Ricardo vera,</h5>
        <h3>Full-Stack Developer</h3>
        <p>
          I'm a chilean living in Tokyo who loves to develop new things for
          awesome people.
        </p>
        {/* <button className="resumeBtn">CV my resume</button> */}
        <p>
          You can send me an{' '}
          <a href="mailto:ricardoveramedina@gmail.com">email</a> or also you can
          check my profile in{' '}
          <a
            href="https://www.linkedin.com/in/ricardo-vera-medina/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>{' '}
          or visit my{' '}
          <a
            href="https://github.com/ricardoveramedina"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{' '}
          account and check my projects .
        </p>
      </Fragment>
    );
  };

  return (
    <ParallaxLayer
      offset={0}
      factor={1}
      speed={0.1}
      className={styles.parallax}
      onClick={() => parallax.current.scrollTo(1)}
    >
      <TransitionSection />
    </ParallaxLayer>
  );
}
