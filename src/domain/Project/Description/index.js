import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import InfoBox from '../InfoBox';
import styles from './style.module.scss';
import projectData from '../projectData.json';

export default function Description(props) {
  const { name, images, description } = projectData[0];
  const [isDisplay, setIsDisplay] = useState(false);

  return (
    <InView
      tag="div"
      className={styles.description}
      onChange={(inView, entry) => {
        inView && !isDisplay && setIsDisplay(true);
      }}
    >
      <div className={styles.container}>
        <h3>{name}</h3>
        <ul>
          {images.map((data, index) => (
            <li key={index}>
              <InfoBox name={name} imageName={data} isDescription={true} />
            </li>
          ))}
        </ul>
        <p>{description}</p>
      </div>
    </InView>
  );
}
