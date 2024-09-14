import classNames from 'classnames/bind';
import styles from './Live.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

function Live() {
    return (
        <div className={cx('error-page')}>
            <img src={images.error2} aria-hidden alt="Error Image" className={cx('error-image')} />
            <h1> Trang này cũng chưa làm lunn 🥹</h1>
            <p>Để hôm nào có ý tưởng rồi update sau nha</p>
        </div>
    );
}

export default Live;