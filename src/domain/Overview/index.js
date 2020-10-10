import React, { useState } from 'react';
import { Transition } from 'react-spring/renderprops';
import { InView } from 'react-intersection-observer';
import Title from '../../components/Title';

import { ReactComponent as FrontEnd } from '../../images/front-end.svg';
import { ReactComponent as BackEnd } from '../../images/back-end.svg';
import styles from './style.module.scss';
import data from './data.json';

export default function Overview(props) {
  const { ParallaxLayer } = props;
  const [isDisplay, setIsDisplay] = useState(false);

  const Boxes = (props) => {
    return (
      isDisplay && (
        <div className={styles.container}>
          <ul>
            <Transition
              items={data}
              keys={(item) => item.title}
              trail={isDisplay && 500}
              config={{ duration: 600 }}
              from={{ transform: 'translate3d(0,0,-4000px)', opacity: 0 }}
              enter={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}
              leave={{ transform: 'translate3d(0,-100px,0)', opacity: 0 }}
            >
              {(item) => (props) => (
                <div style={{ ...props, display: 'inline-block' }}>
                  <li>
                    <Box
                      title={item.title}
                      content={item.content}
                      data={item}
                    />
                  </li>
                </div>
              )}
            </Transition>
          </ul>
        </div>
      )
    );
  };

  function Box(props) {
    const { title, content } = props;
    //const Icon = props.children;

    return (
      <div className={styles.box}>
        <h3>{title}</h3>
        {title.toLowerCase() === 'front-end' ? (
          <FrontEnd className={styles.logo} />
        ) : (
          <BackEnd className={styles.logo} />
        )}
        <p>{content}</p>
      </div>
    );
  }

  return (
    <ParallaxLayer
      offset={1}
      factor={1}
      speed={0.1}
      className={styles.parallax}
    >
      <InView
        tag="section"
        className={styles.about}
        onChange={(inView, entry) => {
          inView && !isDisplay && setIsDisplay(true);
        }}
      >
        <Title text="A overview" isDisplay={isDisplay} />
        <Boxes />
      </InView>
    </ParallaxLayer>
  );
}
