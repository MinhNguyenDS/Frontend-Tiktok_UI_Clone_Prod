import PropTypes from 'prop-types';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './SearchAccountItem.module.scss';
import Img from '~/components/Img';
import ShowTick from '~/components/ShowTick';

const cx = classNames.bind(styles);

function SearchAccountItem({ accountInfo, className, onClick }) {
    const { avatar: avatarUrl, nickname: userName, full_name: fullName, tick } = accountInfo;

    return (
        <Link
            to={`/@${userName}`}
            className={cx('wrapper', {
                [className]: className,
            })}
            onClick={onClick}
            state={accountInfo}
        >
            <Img className={cx('avatar')} src={avatarUrl} alt={fullName} />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>{userName}</span>
                    {<ShowTick tick={tick} />}
                </h4>
                <div className={cx('name')}>{fullName || `${accountInfo.first_name} ${accountInfo.last_name}`} · <strong>{accountInfo.followers_count}</strong> Followers</div>
                <div className={cx('bio')}>{accountInfo?.bio}</div>
            </div>

            <div className={cx('info')}>
            </div>
        </Link>

        
    );
}

SearchAccountItem.propTypes = {
    accountInfo: PropTypes.object.isRequired,
    onClick: PropTypes.func,
    className: PropTypes.string,
};

export default memo(SearchAccountItem);
