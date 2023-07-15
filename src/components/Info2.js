import React from 'react'
import '../styles/Info2.css'
import { HiOutlineUser } from "react-icons/hi";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import { RiCustomerService2Line } from "react-icons/ri";

const Info2 = () => {
  return (
    <>
        <div className='infoEx'>
            <div className='customer'>
                <HiOutlineUser className='iconOut'/>
                <div className='texts'>
                    <span className='upper'>20+</span>
                    <span className='lower'>Airlines</span>
                </div>
            </div>
            <div className='hotel'>
                <HiOutlineBuildingLibrary className='iconOut'/>
                <div className='texts'>
                    <span className='upper'>100+</span>
                    <span className='lower'>Daily flights</span>
                </div>
            </div>
            <div className='support'>
                <RiCustomerService2Line className='iconOut'/>
                <div className='texts'>
                    <span className='upper'>Easy</span>
                    <span className='lower'>Flight booking</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default Info2