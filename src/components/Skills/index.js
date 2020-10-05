import React, { useEffect, useState } from 'react';
import { InView } from 'react-intersection-observer';
import { useTransition, animated } from 'react-spring';
import { Transition } from 'react-spring/renderprops';
import Tool from './Tool';
import './style.scss';

export default function Skills(props) {
  const { ParallaxLayer } = props;

  const [tools, setTools] = useState();
  const [isDisplay, setIsDisplay] = useState(false);

  useEffect(() => {
    isDisplay
      ? setTools([
          'ReactJS',
          'NodeJS',
          'Javascript',
          'HTML5',
          'CSS3',
          'Python',
          'Java',
          'PHP',
          'Wordpress',
          'MySQL',
          'Linux',
          'Docker',
          'Git',
          'Slack',
        ])
      : setTools();
  }, [isDisplay]);

  const transitionsList = useTransition(tools, null, {
    config: { duration: 1000 },
    trail: isDisplay && 80,
    from: { transform: 'translate3d(0,-400px,0)', opacity: 0 },
    enter: { transform: 'translate3d(0,300px,0)', opacity: 1 },
    leave: { transform: 'translate3d(0,-100px,0)', opacity: 0 },
  });

  return (
    <ParallaxLayer
      offset={1}
      speed={1.3}
      //onClick={() => parallax.current.scrollTo(2)}
      className="skills"
    >
      <InView
        tag="div"
        onChange={(inView, entry) => {
          inView && !isDisplay ? setIsDisplay(true) : setIsDisplay(false);
        }}
      >
        {/*   <Title isDisplay={isDisplay} text="Skill List" /> */}

        <Transition
          items={isDisplay}
          trail={isDisplay && 50}
          config={{ duration: 500 }}
          from={{ transform: 'translate3d(0,-400px,0)', opacity: 0 }}
          enter={{ transform: 'translate3d(0,300px,0)', opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {(isDisplay) =>
            isDisplay
              ? (props) => <h3 style={{ ...props }}>Skill list:</h3>
              : (props) => ''
          }
        </Transition>

        <div className="list">
          <ul>
            {transitionsList.map(
              ({ item, key, props }) =>
                item && (
                  <animated.div
                    key={key}
                    style={{ ...props, display: 'inline-block' }}
                  >
                    <li>
                      <Tool toolName={item} />
                    </li>
                  </animated.div>
                )
            )}
          </ul>
        </div>
      </InView>
    </ParallaxLayer>
  );
}
{
  /* <img src={url('bash')} style={{ width: '40%' }} alt="bash" /> */
}
