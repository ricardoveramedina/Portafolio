import React, { Fragment, useState } from 'react';
import { useTransition, animated } from 'react-spring';
import { imageUrl } from '../../../services/Paths';
import styles from './style.module.scss';

export default function InfoBox(props) {
  const {
    name,
    imageName,
    projIndex,
    isDescription,
    showDescription,
    setProjIndex,
  } = props;
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

  //FIXME: In mobile show name of the project
  return (
    <Fragment>
      {isDescription ? (
        <div className={styles.tinyBox}>
          <img src={imageUrl(imageName)} alt={styles.title} />
        </div>
      ) : (
        <div
          className={styles.box}
          onClick={() => {
            setProjIndex(projIndex);
            showDescription(true);
            setShowTitleBox(false);
          }}
          onMouseLeave={() => setShowTitleBox(false)}
          onMouseEnter={() => setShowTitleBox(true)}
        >
          <img src={imageUrl(imageName)} alt={styles.title} />
          {transitionBox.map(
            ({ item, key, props }) =>
              item && (
                <animated.div
                  key={key}
                  style={{ ...props }}
                  className={styles.title}
                >
                  <h4>{name}</h4>
                </animated.div>
              )
          )}
        </div>
      )}
    </Fragment>
  );
}
