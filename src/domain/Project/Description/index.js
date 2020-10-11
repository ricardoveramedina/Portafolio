import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import InfoBox from '../InfoBox';
import Title from '../../../components/Title';
import styles from './style.module.scss';
import projectData from '../projectData.json';

export default function Description(props) {
  const { name, images, description } = projectData[0];
  const [isDisplay, setIsDisplay] = useState(false);

  return (
    <InView
      tag="div"
      className={styles.description}
      style={{ position: 'absolute', alignContent: 'center' }}
      onChange={(inView, entry) => {
        inView && !isDisplay && setIsDisplay(true);
      }}
    >
      {/* <Title text={name} isDisplay={isDisplay} /> */}
      <div className={styles.container}>
        {/* <h3>{name} </h3> */}
        <Title text={name} />
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
