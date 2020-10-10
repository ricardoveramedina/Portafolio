import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import { imageUrl } from '../../../services/Paths';
import { Link, Redirect } from 'react-router-dom';
import styles from './style.module.scss';

export default function InfoBox(props) {
  const { name, imageName, isDescription } = props;
  const [showTitleBox, setShowTitleBox] = useState(false);

  const configCleanBox = {
    transform: 'translate3d(0,0,-500px)',
    width: 0,
    height: 0,
    opacity: 0,
  };

  const transitionBox = useTransition(showTitleBox, null, {
    from: configCleanBox,
    enter: {
      transform: 'translate3d(0,0,0)',
      width: 400,
      height: 200,
      opacity: 1,
    },
    leave: configCleanBox,
  });

  function redirectDesc() {
    return (
      <Redirect
        to={{
          pathname: '/Project/Description',
        }}
      />
    );
  }

  return (
    <div
      className={isDescription ? styles.tinyBox : styles.box}
      onMouseLeave={() => setShowTitleBox((state) => !state)}
      onMouseEnter={() => setShowTitleBox((state) => !state)}
    >
      <img src={imageUrl(imageName)} alt={styles.title} />

      {!isDescription &&
        transitionBox.map(
          ({ item, key, props }) =>
            item && (
              <animated.div
                key={key}
                style={{ ...props }}
                className={styles.title}
                //onClick={() => redirectDesc()}
              >
                <h4>
                  {name}
                  <Link to="/project/description">here </Link>
                </h4>
              </animated.div>
            )
        )}
    </div>
  );
}
