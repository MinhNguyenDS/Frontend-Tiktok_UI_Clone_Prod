/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import Navigation from './Navigation';
import SuggestedAccount from './SuggestedAccount'; // , { FollowedAccount }

import { Scrollbars as CustomScrollbar } from 'react-custom-scrollbars';
// import LoginNotify from './LoginNotify';
import Discover from './Discover';
import BorderTopContainer from '~/components/BorderTopContainer';

const cx = classNames.bind(styles);

function Sidebar() {
    const [hideScrollbar, setHideScrollbar] = useState(true);
    const [openSections, setOpenSections] = useState({
        company: false,
        program: false,
        terms: false,
    });

    const customScrollbar = (className) => {
        return (props) => <div className={cx(className)} {...props}></div>;
    };

    const toggleSection = (section) => {
        setOpenSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner-fixed')}>
                <CustomScrollbar
                    hideTracksWhenNotNeeded
                    autoHide={hideScrollbar}
                    autoHideTimeout={0}
                    renderView={customScrollbar('scrollbar-view')}
                    renderTrackVertical={customScrollbar('scrollbar-track')}
                    renderThumbVertical={customScrollbar('scrollbar-thumb')}
                    onMouseEnter={() => setHideScrollbar(false)}
                    onMouseLeave={() => setHideScrollbar(true)}
                >
                    <div className={cx('content')}>
                        <Navigation />
                        {/* Login Notify */}
                        {/* {!currentUser && <LoginNotify />} */}

                        {/* Sugges Account */}
                        <SuggestedAccount />

                        {/* Followed */}
                        {/* <FollowedAccount /> */}

                        {/* Discover */}
                        <Discover />

                        {/* Footer */}
                        <BorderTopContainer className={cx('footer-container')}>
                            {/* Company Section */}
                            <div style={{ marginTop: '-10px' }}>
                                <button className={cx('link-list')} onClick={() => toggleSection('company')}>
                                    <h4>Công ty</h4>
                                </button>
                            </div>

                            {openSections.company && (
                                <div>
                                    <button className={cx('link-item')}>Giới thiệu</button>
                                    <button className={cx('link-item')}>Bảng tin</button>
                                    <button className={cx('link-item')}>Liên hệ</button>
                                    <button className={cx('link-item')}>Sự nghiệp</button>
                                </div>
                            )}

                            {/* Program Section */}
                            <div style={{ marginTop: '-10px' }}>
                                <button className={cx('link-list')} onClick={() => toggleSection('program')}>
                                    <h4>Chương trình</h4>
                                </button>
                            </div>
                            {openSections.program && (
                                <div>
                                    <button className={cx('link-item')}>TikTok for Good</button>
                                    <button className={cx('link-item')}>Quảng cáo</button>
                                    <button className={cx('link-item')}>TikTok LIVE Creator Networks</button>
                                    <button className={cx('link-item')}>Developers</button>
                                    <button className={cx('link-item')}>Minh bạch</button>
                                    <button className={cx('link-item')}>Phần thưởng trên TikTok</button>
                                    <button className={cx('link-item')}>TikTok Embeds</button>
                                </div>
                            )}
                            <div style={{ marginTop: '-10px' }}>
                                <button className={cx('link-list')} onClick={() => toggleSection('terms')}>
                                    <h4>Điều khoản và chính sách</h4>
                                </button>
                            </div>
                            {openSections.terms && (
                                <div>
                                    <button className={cx('link-item')}>Trợ giúp</button>
                                    <button className={cx('link-item')}>An toàn</button>
                                    <button className={cx('link-item')}>Điều khoản</button>
                                    <button className={cx('link-item')}>Chính sách Quyền riêng tư</button>
                                    <button className={cx('link-item')}>Accessibility</button>
                                    <button className={cx('link-item')}>Trung tâm quyền riêng tư</button>
                                    <button className={cx('link-item')}>Creator Academy</button>
                                    <button className={cx('link-item')}>Hướng dẫn Cộng đồng</button>
                                </div>
                            )}

                            {/* Other Section */}
                            <button className={cx('link-item')}>Thêm</button>

                            <p>
                                <span className={cx('more')}>© 2024 TikTok - Clone by MinhNguyenDS</span>
                            </p>
                        </BorderTopContainer>
                    </div>
                </CustomScrollbar>
            </div>
        </div>
    );
}

export default memo(Sidebar);
