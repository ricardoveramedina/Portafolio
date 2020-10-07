import React from 'react';
import './style.scss';

export default function Tool(props) {
  const { toolName, urlAsset } = props;
  const name = toolName.toLowerCase();
  return (
    <div className={name + ' tool'}>
      <img src={urlAsset(name)} alt={toolName} />
      <label>{toolName}</label>
    </div>
  );
}
