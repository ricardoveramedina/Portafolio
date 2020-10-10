import React from 'react';
import { useTransition, animated } from 'react-spring';
import styles from './style.module.scss';

export default function Title(props) {
  const { text, isDisplay } = props;
  const configCleanBox = {
    transform: 'translate3d(0,-400px,0)',
    opacity: 0,
  };
  const transitionBox = useTransition(isDisplay, null, {
    from: configCleanBox,
    enter: {
      transform: 'translate3d(0,0px,0)',
      opacity: 1,
    },
    leave: configCleanBox,
  });

  return transitionBox.map(
    ({ item, key, props }) =>
      item && (
        <animated.div key={key} style={{ ...props }} className={styles.title}>
          <h3 style={{ ...props }}>{text}</h3>
        </animated.div>
      )
  );
}
