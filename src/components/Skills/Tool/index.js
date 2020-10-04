import React from 'react';
import './style.scss';

export default function Tool(props) {
  const { toolName } = props;
  const imgUrl = './svg/' + toolName.toLowerCase() + '.svg';
  return (
    <div className={toolName.toLowerCase() + ' tool'}>
      <img src={imgUrl} alt={toolName} />
      <label>{toolName}</label>
    </div>
  );
}
