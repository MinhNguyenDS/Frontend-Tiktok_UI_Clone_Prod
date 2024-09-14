import classNames from 'classnames/bind'
import { useState, useMemo, useEffect } from 'react'

import { QRIcon, UserIcon, XMarkIcon } from '~/components/Icons' //ChevronDownIcon, 
import styles from './ModalForm.module.scss'
import images from '~/assets/images'
import Button from '~/components/Button'
import { Link } from 'react-router-dom'

const cx = classNames.bind(styles)

function ModalForm({ onHide }) {
    const [formLoginState, setFormLoginState] = useState('login')
    const [filteredForm, setFilteredForm] = useState([])

    const loginRegisterForm = useMemo(() => [
        {
            type: 'login',
            title: 'Đăng nhập vào TikTok',
            contents: [
                {
                    icon: <QRIcon />,
                    title: 'Sử dụng mã QR',
                },
                {
                    icon: <UserIcon />,
                    title: 'Số điện thoại / Email / TikTok ID',
                },
                {
                    icon: <img src={images.facebook} alt="" />,
                    title: 'Tiếp tục với Facebook',
                },
                {
                    icon: <img src={images.google} alt="" />,
                    title: 'Tiếp tục với Google',
                },
                {
                    icon: <img src={images.twitter} alt="" />,
                    title: 'Tiếp tục với Twitter',
                },
                {
                    icon: <img src={images.line} alt="" />,
                    title: 'Tiếp tục với LINE',
                },
                {
                    icon: <img src={images.kakaotalk} alt="" />,
                    title: 'Tiếp tục với KakaoTalk',
                },
                {
                    icon: <img src={images.apple} alt="" />,
                    title: 'Tiếp tục với Apple',
                },
                {
                    icon: <img src={images.instagram} alt="" />,
                    title: 'Tiếp tục với Instagram',
                },
            ]
        },
        {
            type: 'register',
            title: 'Đăng ký TikTok',
            showMore: true,
            contents: [
                {
                    icon: <UserIcon />,
                    title: 'Sử dụng số điện thoại hoặc email',
                },
                {
                    icon: <img src={images.facebook} alt="" />,
                    title: 'Tiếp tục với Facebook',
                },
                {
                    icon: <img src={images.google} alt="" />,
                    title: 'Tiếp tục với Google',
                },
                {
                    icon: <img src={images.line} alt="" />,
                    title: 'Tiếp tục với LINE',
                },
                {
                    icon: <img src={images.kakaotalk} alt="" />,
                    title: 'Tiếp tục với KakaoTalk',
                },
            ]
        },
        {
            type: 'register-expanded',
            title: 'Sign up for TikTok',
            contents: [
                {
                    icon: <UserIcon />,
                    title: 'Sử dụng số điện thoại hoặc email',
                },
                {
                    icon: <img src={images.facebook} alt="" />,
                    title: 'Tiếp tục với Facebook',
                },
                {
                    icon: <img src={images.google} alt="" />,
                    title: 'Tiếp tục với Google',
                },
                {
                    icon: <img src={images.line} alt="" />,
                    title: 'Tiếp tục với LINE',
                },
                {
                    icon: <img src={images.kakaotalk} alt="" />,
                    title: 'Tiếp tục với KakaoTalk',
                },
            ]
        }
    ], [])

    useEffect(() => {
        const newForm = loginRegisterForm.find(form => form.type === formLoginState)
        setFilteredForm(newForm)
    }, [loginRegisterForm, formLoginState])

    return (
        <div className={cx('modal-mask')}>
            <div className={cx('wrapper')}>
                <div className={cx('container')}>

                    <div className={cx('inner')}>
                        <div className={cx('title')}>{filteredForm.title}</div>

                        <div className={cx('list')}>
                            {filteredForm.contents?.map((content, index) => {
                                return <Button className={cx('btn')} style={{ height: '44px', marginBottom: '16px' }} key={index} onClick={content.onClick}>
                                    <span className={cx('icon')}>{content.icon}</span> <span>{content.title}</span>
                                </Button>
                            })}

                            {/* {filteredForm.showMore && <div className={cx('more-btn')} onClick={() => setFormLoginState('register-expanded')}><ChevronDownIcon /></div>} */}
                        </div>
                    </div>

                    {formLoginState.startsWith('register') &&
                        <div className={cx('agreement')}>
                            <p> Bằng việc tiếp tục, bạn đồng ý với <Link to="/">Điều khoản Sử dụng</Link>, đồng thời xác nhận rằng bạn đã đọc  <Link to="/">Chính sách Quyền riêng tư</Link> của chúng tôi.</p>
                        </div>}

                    <div className={cx('footer')}>
                        {formLoginState === 'login' ?
                            <>Bạn không có tài khoản? <p style={{ color: 'red' }} onClick={() => setFormLoginState('register')}> Đăng ký</p> </> :
                            <>Bạn đã có tài khoản? <p style={{ color: 'red' }} onClick={() => setFormLoginState('login')}>Đăng nhập</p></>
                        }
                    </div>
                </div>

                <div className={cx('close-btn')} onClick={onHide}> <XMarkIcon /> </div>
            </div>
        </div>

    )
}

export default ModalForm