import classNames from 'classnames/bind';
import styles from './Following.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles)

function Following() {
    return (
        <div className={cx('error-page')}>
            <img src={images.error} aria-hidden alt="Error Image" className={cx('error-image')} />
            <h1> Xin lũiii - Trang này chưa làm 🥹</h1>
            <p>Trang này chắc dùng để bỏ mấy video cute của ny zô đây</p>
        </div>
    );
}

export default Following;