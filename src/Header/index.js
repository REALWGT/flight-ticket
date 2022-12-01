import React from 'react';
import HeaderItem from '../HeaderItem';
import { headers } from '../constants';
import './index.css';

export default function Header() {
  return (
    <div className='header'>
      <div className='logo'>aircnc</div>
      {headers.map(header => {
        return <HeaderItem key={header.title} header={header} />
      })}
    </div>
  )
}
