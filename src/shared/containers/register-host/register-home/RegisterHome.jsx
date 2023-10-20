import IcCheck from '../../../components/icons/home-icons/IcCheck'
import IcFaceSmile from '../../../components/icons/home-icons/IcFaceSmile'


import imgBanner from '../../../../assets/images/banner.jpg'
import styles from './RegisterHome.module.scss'
import { Link } from 'react-router-dom'

const feedback=[
    {
        score: 9,
        content:"InnSight là một trong những kênh giúp chúng tôi giữ vững độ lấp đầy phòng trống cao. Điều này chủ yếu nhờ mô hình đặt phòng tức thì và khả năng bán lại phòng bị hủy dễ dàng hơn."
    },
    {
        score: 8,
        content:"InnSight là một trong những kênh giúp chúng tôi giữ vững độ lấp đầy phòng trống cao. Điều này chủ yếu nhờ mô hình đặt phòng tức thì và khả năng bán lại phòng bị hủy dễ dàng hơn."
    }
]
const RegisterHomeContainer = () => {

    return (
        <div className={`${styles['home']}`}>
            <div className={`flex justify-between items-center ${styles['first-banner']} ${styles['banner']}`}>
                <div className='hidden xl:flex flex-1 flex-col 2xl:text-left xl:mr-20'>
                    <h1 className='font-extrabold'>Đăng ký nơi lưu trú của mình trên InnSight</h1>
                    <p className='text-2xl font-medium'>Dù kinh doanh chỗ nghỉ là công việc tay trái hay toàn thời gian, đừng quên đăng kí 
                        nhà nghỉ dưỡng trên Booking.com để tiếp cận du khách khắp thế giới</p>
                </div>

                <div className={`flex-none items-center ${styles['register-form']}`} >
                    <p className='text-xl font-medium py-5'>Tăng thu nhập với lượng đơn đặt đều đặn</p>

                    <div className={`${styles['reason-register']}`}>
                        <IcCheck/>
                    <p className='text-sm pl-5'>45% đối tác nhận được đơn đặt đầu tiên trong vòng 1 tuần</p>
                    </div>

                    <div className={`${styles['reason-register']}`}>
                        <IcCheck/>
                    <p className='text-sm pl-5'>Hơn 1,1 tỉ khách lưu trú tại nhà nghỉ dưỡng từ năm 2010</p>
                    </div>

                    <div className={`${styles['reason-register']}`}>
                        <IcCheck/>
                    <p className='text-sm pl-5'>Toàn quyền kiểm soát chỗ nghỉ và tài chính</p>
                    </div>

                    <div className={`${styles['reason-register']}`}>
                        <IcCheck/>
                    <p className='text-sm pl-5'>Đăng kí miễn phí và chỉ mất 15 phút</p>
                    </div>

                    <button className={`py-2 px-4 rounded drop-shadow-md inline-flex items-center justify-center ${styles['button-register']}`}>
                            <Link to="/host/register-1">
                            <span className='font-semibold text-xl'>Đăng ký ngay</span>

                            </Link>
                     </button>
                    
                </div>

            </div>

            <div className={`justify-between hidden xl:block ${styles['second-banner']} ${styles['banner']}`}>
                <h1 className='text-4xl font-bold '>Tiếp cận nguồn khách hàng toàn cầu</h1>
                <div className={`flex flex-col lg:flex-row justify-between  ${styles['decsription-customer']}`}>
                    <div className={`flex flex-1 flex-col pr-10 ${styles['']}`}>
                        <h1 className='text-6xl font-bold'>2/3</h1>
                        <p className='text-left text-lg '>khách lưu trú ở nhà nghỉ dưỡng quay  lại đặt trên trang của chúng tôi</p>
                    </div>

                    <div className={`flex flex-1 flex-col px-10 ${styles['']}`}>
                        <h1 className='text-6xl font-bold'>48%</h1>
                        <p className='text-left text-lg'>số đêm được đặt trên InnSight trong năm 2022 là cho kỳ nghỉ ở nước ngoài</p>
                    </div>

                    <div className={`flex flex-1 flex-col pl-10 ${styles['']}`}>
                        <h1 className='text-6xl font-bold'>33%</h1>
                        <p className='text-left text-lg '>khách lưu trú ở nhà nghỉ dưỡng là thành viên cấp 2 hoặc 3 của chương trình khách hàng thân thiết Genius, đây là nhóm khách thường chi tiêu nhiều hơn cho mỗi lần đặt</p>
                    </div>
                </div>

            </div>

            <div className={`justify-between hidden xl:flex ${styles['third-banner']} ${styles['banner']}`}>
                <div className={`basis-10/12 ${styles['content-service']}`}>
                    <h1 className='text-4xl font-bold pb-3 '>Dịch vụ toàn diện</h1>
                    <div className={`py-3 ${styles['service-decription']}`}>
                        <IcCheck/>
                        <p className='text-xl font-medium pl-5'>Toàn quyền kiểm soát chỗ lưu trú của bạn-Giá cả, chính sách và hạn chế</p>
                    </div>

                    <div className={`py-3 ${styles['service-decription']}`}>
                        <IcCheck/>
                        <p className='text-xl font-medium pl-5'>Hỗ trợ giải quyết các vấn đề về chỗ ở của bạn 24/7</p>
                    </div>

                    <div className={`py-3 ${styles['service-decription']}`}>
                        <IcCheck/>
                        <p className='text-xl font-medium pl-5'>Tìm khách hàng lý tưởng-khách cần tuân theo các quy tắc và hạn chế do bạn đặt ra</p>
                    </div>

                    <div className={`py-3 ${styles['service-decription']}`}>
                        <IcCheck/>
                        <p className='text-xl font-medium pl-5'>Truy cập các đánh giá của khách cho những đặt phòng trước đây</p>
                    </div>

                    <div className={`py-3 ${styles['service-decription']}`}>
                        <IcCheck/>
                        <p className='text-xl font-medium pl-5'>Xu hướng thị trường chính xác để giúp bạn quản lý chỗ lưu trú của mình hiệu quả hơn</p>
                    </div>
                </div>
                <div>
                <img   src={imgBanner} alt="" />

                </div>
            </div>

            <div className={`hidden xl:flex flex-col ${styles['fourth-banner']} ${styles['banner']}`}>
                 <h1 className='text-4xl font-bold pb-3 '>Đối tác nói gì về chúng tôi</h1>
                 <div className='flex justify-between space-x-48'>
                    {feedback.map((feedbackItem, index) => (
                                <div key={index}
                                    className={`rounded-lg shadow-md ${styles['feedback-box']} }`}>
                                    
                                    <div className='flex items-center pb-5'>
                                        <IcFaceSmile/>
                                        <h3 className='text-3xl font-bold pl-5'>{feedbackItem.score} / 10</h3>
                                    </div>
                                    <p>"{feedbackItem.content}"</p>
                                </div>
                            ))}

                 </div>
                

            </div>
        </div>
    )
}

export default RegisterHomeContainer