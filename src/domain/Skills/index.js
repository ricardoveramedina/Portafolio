import React, { useEffect, useState } from 'react';
import { InView } from 'react-intersection-observer';
import { Transition } from 'react-spring/renderprops';
import Title from '../../components/Title';
import Tool from './Tool';
import toolData from './data.json';
import styles from './style.module.scss';

export default function Skills(props) {
  const { ParallaxLayer } = props;
  const [tools, setTools] = useState();
  const [isDisplay, setIsDisplay] = useState(false);

  useEffect(() => {
    isDisplay ? setTools(toolData.tools) : setTools();
  }, [isDisplay]);

  const ToolList = (props) => {
    return (
      isDisplay && (
        <div className={styles.list}>
          <ul>
            <Transition
              items={tools}
              trail={isDisplay && 50}
              from={{ transform: 'translate3d(0,-400px,0)', opacity: 0 }}
              enter={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}
              leave={{ opacity: 0 }}
            >
              {(item) => (props) => (
                <div style={{ ...props, display: 'inline-block' }}>
                  <li>
                    <Tool toolName={item} />
                  </li>
                </div>
              )}
            </Transition>
          </ul>
        </div>
      )
    );
  };

  return (
    <ParallaxLayer offset={3} speed={0.6} className={styles.parallax}>
      <InView
        tag="section"
        className={styles.skills}
        onChange={(inView, entry) => {
          inView && !isDisplay && setIsDisplay(true);
        }}
      >
        <Title text="Skill list" isDisplay={isDisplay} />
        <ToolList />
      </InView>
    </ParallaxLayer>
  );
}
