import React from 'react';
import './style.scss';

export default function Tool(props) {
  const { toolName } = props;
  const imgUrl =
    process.env.PUBLIC_URL + '/img/svg/' + toolName.toLowerCase() + '.svg';
  /* const imgUrl = icons.toolName.toLowerCase(); */
  return (
    <div className={toolName.toLowerCase() + ' tool'}>
      <img src={imgUrl} alt={toolName} />
      <label>{toolName}</label>
    </div>
  );
}
