import styles from '../index.module.scss'
const ClientInfoBlock = () => {
  const props = {
    name: 'NVA',
    specRequirement: [
      "1", "2"
    ]
  }
  return (
    <div className={styles['box']}>
      <div className='font-bold text-xl'>
        Chi tiết khách ở
      </div>
      <div className={`${styles['line']} my-3`}></div>
      <div className='text-gray-400 mb-1 text-sm'>
        Họ và tên khách
      </div>
      <div className='font-bold mb-1'>
        {props?.name}
      </div>
      <div className='text-gray-400 mb-1 text-sm'>
        Yêu cầu đặc biệt
      </div>
      {props?.specRequirement?.map((req, index) => (
        <div className='font-bold'>
          <span>{`- `}</span>{req}
        </div>
      ))}
    </div>
  )
}

export default ClientInfoBlock
