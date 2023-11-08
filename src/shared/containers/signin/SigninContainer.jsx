import React from 'react'
import styles from './index.module.scss'
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import AuthAction from '../../../redux/auth/action';
import { useNavigate } from 'react-router';
import ShowToastify from '../../../utils/ShowToastify';
const SigninContainer = () => {
    const dispath = useDispatch();
    const navigate = useNavigate();
    const [typedEmail, setTypedEmail] = useState(false);
    const [email, setEmail] = useState("")
    const { handleSubmit, register, setError, setValue, clearErrors, formState: { errors } } = useForm({
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
            clearErrors('email'); 
            setTypedEmail(true);
        }
    };

    const onSubmit = (data) => {
        dispath({
            type: AuthAction.SIGNIN,
            data: data,
            onSuccess: () => {
                ShowToastify.showSuccessToast("Đăng nhập thành công")
                navigate("/")
            },
            onError: () => {
                ShowToastify.showErrorToast("Đăng nhập thất bại")
            }
        })

    }
    return (
        <div className={`${styles['wrapper']}`}>
            <div className={`${styles['box']}`}>
                <div className={`${styles['box-content']}`}>
                    <div className={`${styles['title']}`}>InnSight</div>
                    <div className={`${styles['semi-title']}`}>
                        {!typedEmail ? (<>Đăng nhập hoặc tạo tài khoản</>) :
                            (<div style={{ textAlign: "left" }}>
                                Nhập mật khẩu của bạn
                                <div style={{ color: "gray", fontSize: "16px", fontWeight: "300" }}>
                                    Vui lòng nhập mật khẩu của bạn cho <span style={{ fontWeight: "700" }}>{email}</span>
                                </div>
                            </div>)}
                    </div>
                    <form className={styles['box-form']} onSubmit={handleSubmit(onSubmit)}>
                        {!typedEmail ?
                            (<>
                                <label htmlFor="email">Địa chỉ Email</label>
                                <div className='w-full mt-7 mb-7 h-20'>
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
                                <div className='w-full mt-7 mb-7 h-20'>
                                    <input type="password" id='password'
                                        placeholder='Nhập mật khẩu'
                                        {...register("password", {
                                            required: "Không được để trống thông tin này.",
                                        })} />
                                    {errors.password && <p className="error" style={{ color: "red" }}>{errors.password.message}</p>}
                                </div>
                                <button type='submit'>Đăng nhập</button>

                            </>) :
                            (<>
                            </>)}
                    </form>
                    {/* {!typedEmail &&
                        <>
                            <div className="flex md:justify-between justify-center items-center mt-10">
                                <div style={{ height: 1 }} className="bg-gray-300 md:block hidden w-4/12" />
                                <p className="md:mx-2 text-sm font-light text-gray-400">
                                    {" "}
                                    Hoặc{" "}
                                </p>
                                <div style={{ height: 1 }} className="bg-gray-300 md:block hidden w-4/12" />
                            </div>
                            <div className="flex justify-center items-center mt-10">
                                <FacebookIcon style={{ color: "#4267B2", marginRight: "45px" }} fontSize='large' />
                                <IcGoogle />
                            </div>
                        </>} */}
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

export default SigninContainer
