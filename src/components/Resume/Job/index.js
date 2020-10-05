import React from 'react';
import styles from './style.module.scss';
export default function Job(props) {
  const { jobData } = props;
  return (
    <div className={styles.job}>
      <h4>
        {jobData.title} - {jobData.company}
      </h4>
      <h5>
        {jobData.date} - {jobData.city}
      </h5>

      <p>{jobData.description}</p>
    </div>
  );
}