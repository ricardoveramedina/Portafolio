import React, { Fragment, useState } from 'react';
import { Transition } from 'react-spring/renderprops';
import styles from './style.module.scss';

export default function Intro(props) {
  const { ParallaxLayer } = props;
  const [isDisplay, setIsDisplay] = useState(false);

  function TransitionSection(props) {
    const { isDisplay, children } = props;

    setIsDisplay(true);
    return (
      <Transition
        items={isDisplay}
        from={{ transform: 'translateX(600px)', opacity: 0 }}
        enter={{ transform: 'translateX(0)', opacity: 1 }}
        leave={{ transform: 'translateX(50px)', opacity: 0 }}
      >
        {(isDisplay) =>
          isDisplay
            ? (props) => (
                <section className={styles.intro} style={{ ...props }}>
                  {children}
                </section>
              )
            : (props) => ''
        }
      </Transition>
    );
  }

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
          </a>
          .
        </p>
        {/* <p>
          Lorem ipsum dolor sit amet,. Donec laoreet tincidunt sollicitudin eu.
          Proin sagittis turpis semper purus. Phasellus ut consectetur mauris
          justo.. Donec vel ligula eu erat. Sed dui lectus, varius eget. Nam sed
          magna urna volutpat. Praesent eget eleifend libero massa,. Duis
          volutpat, dolor nec scelerisque. Phasellus in nisi diam bibendum.
          Donec mattis erat ac lorem. Vestibulum auctor augue ut enim. Curabitur
          ornare eleifend lectus, eget. Maecenas sodales, dui nec condimentum.
          Nam purus sapien, elementum nec. Suspendisse ullamcorper egestas
          molestie erat. Mauris luctus ligula id nibh. Cras erat neque,
          dignissim in. In sapien nibh, tincidunt non. Sed sed mauris nibh non.
        </p>
        <p>
          Lorem ipsum dolor sit amet,. Donec laoreet tincidunt sollicitudin eu.
          Proin sagittis turpis semper purus. Phasellus ut consectetur mauris
          justo.. Donec vel ligula eu erat. Sed dui lectus, varius eget. Nam sed
          magna urna volutpat. Praesent eget eleifend libero massa,. Duis
          volutpat, dolor nec scelerisque. Phasellus in nisi diam bibendum.
          Donec mattis erat ac lorem. Vestibulum auctor augue ut enim. Curabitur
          ornare eleifend lectus, eget. Maecenas sodales, dui nec condimentum.
          Nam purus sapien, elementum nec. Suspendisse ullamcorper egestas
          molestie erat. Mauris luctus ligula id nibh. Cras erat neque,
          dignissim in. In sapien nibh, tincidunt non. Sed sed mauris nibh non.
        </p> */}
      </Fragment>
    );
  };

  return (
    <ParallaxLayer
      offset={0}
      factor={1}
      speed={0.1}
      //onClick={() => parallax.current.scrollTo(1)}
      className={styles.parallax}
    >
      <TransitionSection isDisplay={isDisplay}>
        <IntroSection />
      </TransitionSection>
    </ParallaxLayer>
  );
}
