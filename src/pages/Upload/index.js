import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './Upload.module.scss';
import { HomeIcon } from '~/components/Icons';
import { useNavigate } from 'react-router-dom';
import config from '~/configs';

const cx = classNames.bind(styles);

function Upload() {
    const navigate = useNavigate();

    return (
        <div className={cx('wrapper')}>
            <div className={cx('back-button')}>
                <Button
                    leftIcon={
                        <HomeIcon
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        />
                    }
                    onClick={() => navigate(config.routes.home)}
                >
                    Quay lại trang chủ
                </Button>
            </div>

            <span className={cx('title')}>Tải video lên</span>
            <span className={cx('subtitle')}>Đăng video lên tài khoản của bạn</span>

            <div className={cx('content')}>
                <div className={cx('uploader')}>
                    <div className={cx('upload')}>
                        <input type="file" accept="video/*" style={{ display: 'none' }} />
                        <div className={cx('upload-card')}>
                            <img
                                src="https://lf16-tiktok-common.ttwstatic.com/obj/tiktok-web-common-sg/ies/creator_center/svgs/cloud-icon1.ecf0bf2b.svg"
                                className={cx('cloud-icon')}
                                alt=""
                            />

                            <div className={cx('text-main')}>
                                <span>Chọn video để tải lên</span>
                            </div>
                            <div className={cx('text-sub')}>
                                <span>Hoặc kéo và thả tập tin</span>
                            </div>
                            <div className={cx('text-video-info')}>
                                <span>MP4 hoặc WebM</span>
                                <span>Độ phân giải 720x1280 trở lên</span>
                                <span>Lên đến 10 phút</span>
                                <span>Dưới 2GB</span>
                            </div>

                            <Button
                                primary
                                onClick={() => {
                                    alert('Hàng trưng bày! không dùng được đâu 🤡');
                                }}
                            >
                                Chọn tập tin
                            </Button>
                        </div>
                    </div>
                </div>

                <div className={cx('form')}>
                    <div className={cx('caption-wrap')}></div>
                    <div className={cx('cover-wrap')}></div>
                    <div className={cx('privacy')}></div>
                    <div className={cx('switch-wrap')}></div>
                    <div className={cx('copyright-wrap')}></div>
                    <div className={cx('btn-wrap')}></div>
                </div>
            </div>
        </div>
    );
}

export default Upload;
