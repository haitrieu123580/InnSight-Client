import React from 'react'
import styles from './index.module.scss'
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import AuthAction from '../../../redux/auth/action';
import ShowToastify from '../../../utils/ShowToastify';
import { useNavigate } from 'react-router';
const SignupContainer = () => {
    const dispath = useDispatch();
    const navigate = useNavigate();
    const [typedEmail, setTypedEmail] = useState(false);
    const [email, setEmail] = useState("")
    const { handleSubmit, register, setError, clearErrors, formState: { errors } } = useForm({
        criteriaMode: "all"
    });
    const isEmailValid = (email) => {
        const emailRegex = /^\S+@\S+$/i;
        if (!emailRegex.test(email)) {
            setError('email', {
                type: 'manual',
                message: 'Địa chỉ email không hợp lệ',
            })
        }
        else {
            clearErrors('email'); // Clear the error if email is valid
            setTypedEmail(true);
        }
    };

    const onSubmit = (data) => {
        dispath({
            type: AuthAction.SIGN_UP,
            data: data,
            onSuccess: () => {
                ShowToastify.showSuccessToast("Đăng kí thành công, mời bạn đăng nhập lại!")
                navigate('/sign-in')
            },
            onError: () => {
                ShowToastify.showErrorToast("Đăng kí thất bại")
            }
        })

    }
    return (
        <div className={`${styles['wrapper']}`}>
            <div className={`${styles['box']}`}>
                <div className={`${styles['box-content']}`}>
                    <div onClick={() => { navigate('/') }} style={{ cursor: "pointer" }} className={`${styles['title']}`}>InnSight</div>
                    <div className={`${styles['semi-title']}`}>
                        {!typedEmail ? (<>Tạo tài khoản</>) :
                            (<div style={{ textAlign: "left" }}>
                                Nhập mật khẩu của bạn
                                <div style={{ color: "gray", fontSize: "16px", fontWeight: "300" }}>
                                    Đặt mật khẩu của bạn cho <span style={{ fontWeight: "700" }}>{email}</span>
                                </div>
                            </div>)}
                    </div>
                    <form className={styles['box-form']} onSubmit={handleSubmit(onSubmit)}>
                        {!typedEmail ?
                            (<>
                                <label htmlFor="email">Địa chỉ Email</label>
                                <div className='w-full mt-7 mb-7 h-fit'>
                                    <input
                                        type="text"
                                        id='email'
                                        onInput={e => setEmail(e.target.value)}
                                        placeholder='Nhập email'
                                        {...register('email', {
                                            required: 'Vui lòng nhập email',
                                        })}
                                    />
                                    {errors.email && <p className="error" style={{ color: "red" }}>{errors.email.message}</p>}
                                </div>

                                <button type='button' onClick={() => isEmailValid(email)}>
                                    Tiếp tục với email
                                </button>

                            </>) :
                            (<>
                            </>)}
                        {typedEmail ?
                            (<>
                                <label htmlFor="email">Mật khẩu</label>
                                <div className='w-full mt-7 mb-7 h-40'>
                                    <input type="password" id='password'

                                        placeholder='Nhập mật khẩu'
                                        {...register("password", {
                                            required: "Không được để trống thông tin này.",
                                        })} />
                                    {errors.password && <p className="error" style={{ color: "red" }}>{errors.password.message}</p>}

                                    <input type="password" id='confirmPassword'
                                        placeholder='Nhập mật khẩu'
                                        {...register("confirmPassword", {
                                            required: "Không được để trống thông tin này.",
                                        })} />
                                    {errors.confirmPassword && <p className="error" style={{ color: "red" }}>{errors.confirmPassword.message}</p>}
                                </div>
                                <button type='submit'>Đăng nhập</button>

                            </>) :
                            (<>
                            </>)}
                    </form>
                    <div className="flex md:justify-between justify-center items-center mt-10">
                        <div style={{ height: 1 }} className="bg-gray-300 md:block hidden w-full" />
                    </div>
                    <div className="mt-10 ">
                        <span>Qua việc đăng nhập hoặc tạo tài khoản, bạn đồng ý với các</span> <span style={{ color: "#0735D6" }}>Điều khoản và Điều kiện</span > cũng như <span style={{ color: "#0735D6" }}> Chính sách An toàn và Bảo mật</span> <span>của chúng tôi</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupContainer
