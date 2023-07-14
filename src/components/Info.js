import React from 'react'
import '../styles/Info.css'
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { RiCustomerService2Line } from "react-icons/ri";

const Info = () => {
  return (
    <>
        <div className='infoEx'>
            <div className='customer'>
                <HiOutlineUser className='iconOut'/>
                <div className='texts'>
                    <span className='upper'>10M+</span>
                    <span className='lower'>Happy customers</span>
                </div>
            </div>
            <div className='hotel'>
                <HiOutlineBuildingLibrary className='iconOut'/>
                <div className='texts'>
                    <span className='upper'>500+</span>
                    <span className='lower'>Hotels in top locations</span>
                </div>
            </div>
            <div className='support'>
                <RiCustomerService2Line className='iconOut'/>
                <div className='texts'>
                    <span className='upper'>24x7</span>
                    <span className='lower'>Customer support</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Info