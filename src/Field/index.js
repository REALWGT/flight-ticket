import React from 'react'

export default function Field({data, fieldName}) {

  const val = data[fieldName]

  return (
    <div className='pr-8'>
      <p className='pt-8 pb-8 bold ls-4'>{val}</p>
      <hr style={{ border: '1px solid rgba(232, 77, 77, 0.198)' }}/>
      <p className='pt-4 pb-8' style={{ fontSize: '12px', color: 'rgba(232, 77, 77, 0.390)' }}>{fieldName.toUpperCase()}</p>
    </div>
  )
}
