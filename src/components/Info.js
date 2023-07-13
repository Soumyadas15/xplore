import React from 'react'
import '../styles/Info.css'

const Info = () => {
  return (
    <>
        <div className='infoEx'>
            <div className='customer'>
                <span className='upper'>10M+</span>
                <span className='lower'>Happy customers</span>
            </div>
            <div className='hotel'>
                <span className='upper'>500+</span>
                <span className='lower'>Hotels in top locations</span>
            </div>
            <div className='support'>
                <span className='upper'>24x7</span>
                <span className='lower'>Customer support</span>
            </div>
        </div>
    </>
  )
}

export default Info