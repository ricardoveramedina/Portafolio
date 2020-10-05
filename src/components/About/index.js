import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import styles from './style.module.scss';

export default function About(props) {
  const { ParallaxLayer } = props;

  const [isDisplay, setIsDisplay] = useState(true);
  const transitions = useTransition(isDisplay, null, {
    from: { transform: `translateX(600px)`, opacity: 0 },
    enter: { transform: `translateX(0)`, opacity: 1 },
    leave: { transform: `translateX(50px)`, opacity: 0 },
  });

  return (
    <ParallaxLayer
      offset={0}
      speed={0.6}
      //onClick={() => parallax.current.scrollTo(1)}
      className={styles.parallax}
    >
      <section className={styles.about}>
        {transitions.map(
          ({ item, key, props }) =>
            item && (
              <animated.div
                key={key}
                style={{ ...props, display: 'inline-block' }}
              >
                <h5>Hey there, I'm Ricardo vera,</h5>
                <h3>Full-Stack developer.</h3>
                <p>
                  I'm a chilean living in Tokyo who loves to develop new things
                  for awesome people.
                </p>
                {/* <button className="resumeBtn">CV my resume</button> */}
                <p>
                  You can send me an{' '}
                  <a href="mailto:ricardoveramedina@gmail.com">email</a> or also
                  you can check my profile in{' '}
                  <a
                    href="https://www.linkedin.com/in/ricardo-vera-medina/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linkedin
                  </a>
                  .
                </p>
              </animated.div>
            )
        )}
        {/* <img src={url('bash')} style={{ width: '20%' }} alt="bash" /> */}
      </section>

      {/* <img src={url('server')} style={{ width: '20%' }} alt="server" /> */}
    </ParallaxLayer>
  );
}
