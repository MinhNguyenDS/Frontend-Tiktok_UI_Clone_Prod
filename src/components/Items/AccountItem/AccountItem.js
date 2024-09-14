import PropTypes from 'prop-types';
import { Fragment, memo } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './AccountItem.module.scss';
import Img from '~/components/Img';
import AccountPreview from './AccountPreview';
import ShowTick from '~/components/ShowTick';

const cx = classNames.bind(styles);

function AccountItem({ accountInfo, hoverActivate = false, customTippy }) {
    const {
        avatar: avatarUrl,
        nickname,
        first_name: firstName,
        last_name: lastName,
        tick,
        followers_count: followerCount,
        likes_count: likeCount,
    } = accountInfo;


    const fullName = `${firstName} ${lastName}`;

    // default component wrap
    let CompWrapper = Fragment;
    const compProps = {};

    // change default wrap if hoverActivate is true
    if (hoverActivate) {
        CompWrapper = AccountPreview;

        const accountPopperProps = {
            className: cx('preview-container'),
            avatarUrl,
            nickname,
            fullName,
            tick,
            followerCount,
            likeCount,
            customTippy,
        };

        Object.assign(compProps, accountPopperProps);
    }

    return (
        <CompWrapper {...compProps}>
            <Link to={`/@${accountInfo.nickname}`} state={accountInfo}>
                <div className={cx('search-result__see-full')}>Xem tất cả kết quả dành cho "{accountInfo.nickname}"</div>
            </Link>
            <Link to={`/@${accountInfo.nickname}`} className={cx('wrapper')} state={accountInfo}>
                <Img className={cx('avatar')} src={avatarUrl} alt={fullName} />
                <div className={cx('body')}>
                    <h4 className={cx('username')}>
                        {accountInfo.nickname}
                        {<ShowTick tick={tick} />}
                    </h4>
                    <p className={cx('name')}>{fullName}</p>
                </div>
            </Link>
        </CompWrapper>
    );
}

AccountItem.propTypes = {
    accountInfo: PropTypes.object.isRequired,
    hoverActivate: PropTypes.bool,
    customTippy: PropTypes.object,
};

export default memo(AccountItem);