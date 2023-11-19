import React from 'react'
import styles from '../index.module.scss'
import { useSelector } from 'react-redux'
const HotelPolicyBox = () => {
    const { hotel } = useSelector(state => state.Home)
    return (
        <>

            <div className={styles['box']}>
                <div className='font-bold text-xl mb-3'>
                    Chính sách khách sạn & phòng
                </div>
                <div className={styles['line']}></div>
                <ul>
                    {hotel?.rules?.map((rule, idx) => (
                        <li className='font-medium m-2 text-lg'>
                            {rule}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default HotelPolicyBox
