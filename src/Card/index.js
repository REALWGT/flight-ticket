import React from 'react'
import Field from '../Field';
import QRCode from '../QR';
import './index.css';

export default function Card(props) {
  const { type, data } = props;
  const { airline, flight, date, from, to } = data;

  const formatDate = ts => {
    const date = new Date(ts);
    const formattedDate = date.toLocaleString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
      // hour: "numeric",
      // minute: "2-digit"
    });

    return formattedDate;
  }
  
  return (
    <div className={`card card-${type}`}>
      <div className='card-half card-upper'>
        <div className='card-container'>
          <p className='airline-container mb-16'>{airline}</p>
          <p className='mb-24 bold ls-2 relative'>Flight {flight}  <span className='pl-8 pr-8'> / / / </span> {formatDate(date)} <span style={{ borderRadius: '50%', display: 'inline-block', backgroundColor: 'yellow', position: 'absolute', right: '0', minWidth: '19px', minHeight: '19px'}}> </span></p>
          <Field data={data} fieldName='passenger' />
          <div className='flex'>
            <div className='flex-1'>
              <Field data={data} fieldName='boardingtime' />
            </div>
            <div className='flex-1'>
              <Field data={data} fieldName='gate' />
            </div>
          </div>
          <div className='flex'>
            <div style={{ flexGrow: 2 }}>
              <Field data={data} fieldName='class' />
            </div>
            <div style={{ flexGrow: 1 }}>
              <Field data={data} fieldName='zone' />
            </div>
            <div style={{ flexGrow: 1 }}>
              <Field data={data} fieldName='seat' />
            </div>
          </div>
        </div>
        
      </div>
      <div className='card-half card-lower'>
        <div className='qr-container flex '>
          <div className='flex-1 pt-24 text-center'>
            <div style={{ minWidth: '180px', minHeight: '180px', color: 'white' }}>
              <div style={{ minHeight: '60px' }}>
                <span className='ls-2' style={{ fontSize: '32px' }}>{Object.keys(from)[0]}</span>
                <br />
                <span className='ls-2' style={{ fontSize: '13px' }}>{data.from[Object.keys(from)[0]].city}, {data.from[Object.keys(from)[0]].state}</span>
              </div>
              <div style={{ minHeight: '60px', fontSize: '32px', lineHeight: '60px', verticalAlign: 'middle' }}>
                ⇩
              </div>
              <div style={{ minHeight: '60px' }}>
              <span className='ls-2' style={{ fontSize: '32px' }}>{Object.keys(to)[0]}</span>
                <br />
                <span className='ls-2' style={{ fontSize: '13px' }}>{data.to[Object.keys(to)[0]].city}, {data.to[Object.keys(to)[0]].state}</span>
              </div>
            </div>
          </div>
          <div className='flex-1 pt-24 text-center'>
            <QRCode />
          </div>
        </div>
        <div className='wallet-container flex'>
          <div className='flex-1'>
            <div className='ml-24 relative' style={{ fontSize: '21px', borderRadius: '50%', border: '2px solid white', width: '36px', height: '36px', color: 'white' }}><span style={{ position:'absolute', top: '5px', left: '14px' }}>?</span></div>
          </div>
          <div className='flex-1 text-center'>
            <button style={{ padding: '10px', width: '200px', border: '1px solid tomato', borderRadius: '25px', color: 'tomato', fontSize: '17px' }}>Add to Wallet</button>
          </div>
        </div>
        <div className='text-center mt-24' style={{ fontSize: '10px', color: 'greenyellow' }}>- Powered by GT -</div>
      </div>
    </div>
  )
}
