import React from 'react';
import { assetUrl } from '../../../services/Paths';
import './style.scss';

export default function Tool(props) {
  const { toolName } = props;
  const name = toolName.toLowerCase();
  return (
    <div className={name + ' tool'}>
      <img src={assetUrl(name)} alt={toolName} />
      <label>{toolName}</label>
    </div>
  );
}
