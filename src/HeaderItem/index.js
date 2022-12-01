import React from 'react'
import './index.css'
export default function HeaderItem({header}) {
  const { title, url } = header;

  return (
    <div key={title} className='header-item'><a href={url}>{title}</a></div>
  )
}
