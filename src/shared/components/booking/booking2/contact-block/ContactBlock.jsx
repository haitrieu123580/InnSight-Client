import styles from '../index.module.scss'
const ContactBlock = () => {
  const props = {
    name: 'à',
    phone: "",
    email: "",
  }
  return (
    <div className={styles['box']}>
      <div className='font-bold text-xl'>
        Chi tiết người liên lạc
      </div>
      <div className={`${styles['line']} mb-3`}></div>
      <div className='my-1'>
        <span>{`Họ và Tên: `}</span><span className='font-bold'>{props?.name}</span>
      </div>
      <div  className='my-1'>
        <span>{`Số điện thoại: `}</span><span className='font-bold'>{props?.name}</span>
      </div>
      <div  className='my-1'>
        <span>{`Email: `}</span><span className='font-bold'>{props?.name}</span>
      </div>
    </div>
  )
}

export default ContactBlock
