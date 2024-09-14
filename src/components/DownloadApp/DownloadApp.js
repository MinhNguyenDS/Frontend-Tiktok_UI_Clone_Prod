import { useState, useEffect, useRef, memo } from 'react';
import classNames from 'classnames/bind';

import config from '~/configs';
import styles from './DownloadApp.module.scss';
import Button from '~/components/Button';
import SvgIcon from '~/components/SvgIcon';
import { iconArrowToTop, iconCloseX, iconMobile, iconPc } from '~/components/SvgIcon/iconsRepo';
import PopperWrapper from '~/components/Popper';

const cx = classNames.bind(styles);

function DownloadApp() {
    const [showIconScroll, setShowIconScroll] = useState(false);
    const [active, setActive] = useState(true);

    const wrapperRef = useRef(null);

    useEffect(() => {
        window.addEventListener('scroll', handleWhenScrolling);
        return () => {
            window.removeEventListener('scroll', handleWhenScrolling);
        };
    }, []);

    const handleWhenScrolling = () => {
        if (window.scrollY > 100) {
            setShowIconScroll(true);
        } else {
            setShowIconScroll(false);
        }
    };

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleToggleActive = () => {
        setActive(!active);
    };

    return (
        <div
            className={cx('wrapper', {
                'show-icon-scroll': showIconScroll,
            })}
            ref={wrapperRef}
        >
            <div className={cx('download-app')}>
                <Button
                    className={cx('main-download-btn', {
                        active,
                    })}
                    color
                    primary
                    rounded
                    onClick={handleToggleActive}
                >
                    Chuyển đổi nền tảng
                </Button>
                <div
                    className={cx('download-for', {
                        active: !active,
                    })}
                >
                    <PopperWrapper className={cx('download-content')}>
                        <Button
                            className={cx('download-btn')}
                            to={config.routes.home}
                            leftIcon={<SvgIcon icon={iconPc} size={21} />}
                        >
                            TikTok dành cho PC
                        </Button>
                        <div className={cx('hr')}></div>
                        <Button
                            className={cx('download-btn')}
                            to={config.routes.homePhone}
                            leftIcon={<SvgIcon icon={iconMobile} size={21} />}
                        >
                            TikTok dành cho Mobile
                        </Button>
                        <button className={cx('close-btn')} onClick={handleToggleActive}>
                            <SvgIcon icon={iconCloseX} size={20} />
                        </button>
                    </PopperWrapper>
                </div>
            </div>

            <p className={cx('scroll-to-top')}>
                <SvgIcon className={cx('icon-scroll')} icon={iconArrowToTop} onClick={handleScrollToTop} />
            </p>
        </div>
    );
}

export default memo(DownloadApp);
