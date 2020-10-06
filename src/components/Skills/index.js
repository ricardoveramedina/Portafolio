import React, { useEffect, useState } from 'react';
import { InView } from 'react-intersection-observer';
import { Transition } from 'react-spring/renderprops';
import Tool from './Tool';
import toolData from './data.json';
import './style.scss';

export default function Skills(props) {
  const { ParallaxLayer } = props;
  const [tools, setTools] = useState();
  const [isDisplay, setIsDisplay] = useState(false);

  useEffect(() => {
    isDisplay ? setTools(toolData.tools) : setTools();
  }, [isDisplay]);

  const Title = (props) => {
    const { text } = props;
    return (
      <Transition
        items={isDisplay}
        trail={isDisplay && 50}
        //config={{ duration: 500 }}
        from={{ transform: 'translate3d(0,-400px,0)', opacity: 0 }}
        enter={{ transform: 'translate3d(0,0px,0)', opacity: 1 }}
        leave={{ opacity: 0 }}
      >
        {(isDisplay) =>
          isDisplay
            ? (props) => <h3 style={{ ...props }}>{text}</h3>
            : (props) => ''
        }
      </Transition>
    );
  };

  const ToolList = (props) => {
    return (
      isDisplay && (
        <div className="list">
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
    <ParallaxLayer
      offset={2}
      speed={0.6}
      //onClick={() => parallax.current.scrollTo(2)}
      className="skills"
    >
      <InView
        tag="div"
        onChange={(inView, entry) => {
          inView && !isDisplay && setIsDisplay(true);
        }}
      >
        <Title text="Skill list" />
        <ToolList />
      </InView>
    </ParallaxLayer>
  );
}
