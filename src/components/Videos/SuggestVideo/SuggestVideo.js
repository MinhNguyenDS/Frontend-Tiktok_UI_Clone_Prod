/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types';
import { forwardRef, memo, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './SuggestVideo.module.scss';
import Button from '~/components/Button';
import Img from '~/components/Img';
import SvgIcon from '~/components/SvgIcon';
import { iconComment, iconHeart, iconMusic, iconShare } from '~/components/SvgIcon/iconsRepo';
import ShowTick from '~/components/ShowTick';
import AccountPreview from '~/components/Items/AccountItem/AccountPreview';
import SuggestVideoControl from './SuggestVideoControl';
import VideoShare from '~/components/Shares/VideoShare';
import { ModalContext } from '~/components/ModalProvider';

const cx = classNames.bind(styles);

const SuggestVideo = forwardRef(({ videoId, videoInfo, isInView }, REF) => {
    const [liked, setLiked] = useState(false);
    const [likesCountState, setLikesCountState] = useState(videoInfo.likes_count);

    const handleLikeClick = () => {
        setLiked(!liked);
        setLikesCountState((prevCount) => (liked ? prevCount - 1 : prevCount + 1));
    };

    const context = useContext(ModalContext);
    const {
        user: {
            avatar: avatarUrl,
            nickname: userName,
            first_name: firstName,
            last_name: lastName,
            tick,
            bio,
            followers_count: followerCount,
            likes_count: likeCount,
        },
        description,
        music: musicInfo,
        comments_count: commentsCount,
        shares_count: sharesCount,
    } = videoInfo;

    return (
        <div className={cx('wrapper')}>
            <Link className={cx('big-avatar')} to={`/@${userName}`} state={videoInfo.user}>
                <Img className={cx('avatar')} src={avatarUrl} />
            </Link>
            <div className={cx('body')}>
                <div className={cx('video-info')}>
                    {/* User info */}
                    <AccountPreview
                        avatarUrl={avatarUrl}
                        userName={userName}
                        fullName={`${firstName} ${lastName}`}
                        tick={tick}
                        bio={bio}
                        followerCount={followerCount}
                        likeCount={likeCount}
                        customTippy={{ delay: [200, 250] }}
                        state={videoInfo.user}
                    >
                        <Link className={cx('user-info')} to={`/@${userName}`} state={videoInfo.user}>
                            <Img className={cx('avatar', 'small-avatar')} src={avatarUrl} />
                            <p className={cx('name')}>
                                <span className={cx('user-name')}>
                                    {userName}
                                    <ShowTick tick={tick} />
                                </span>
                                <span className={cx('full-name')}>{`    ${firstName} ${lastName}`}</span>
                            </p>
                        </Link>
                    </AccountPreview>

                    <Button outline className={cx('follow-btn')} onClick={context.handleShowModal}>
                        Follow
                    </Button>

                    {/* Description  */}
                    <p className={cx('description')}>
                        <span>{description}</span>
                        <a href="#" className={cx('hashtag')}>
                            #goccuaminh
                        </a>
                    </p>

                    {/* Music info */}
                    <a href="#" className={cx('music-info')}>
                        <SvgIcon className={cx('icon-music')} icon={iconMusic} />
                        {musicInfo || `Nhạc nền - ${firstName} ${lastName}`}
                    </a>
                </div>

                <div className={cx('video-player')}>
                    {/* Video control */}
                    <SuggestVideoControl videoInfo={videoInfo} isInView={isInView} ref={REF} videoId={videoId} />

                    {/* Interactive space */}
                    <div className={cx('interactive-space')}>
                        <label className={cx('interactive-item')}>
                            <button className={cx('item-icon', { liked })} onClick={handleLikeClick}>
                                <SvgIcon icon={iconHeart} />
                            </button>
                            <strong className={cx('item-count')}>{likesCountState}</strong>
                        </label>
                        <label className={cx('interactive-item')}>
                            <button className={cx('item-icon')} onClick={context.handleShowModal}>
                                <SvgIcon icon={iconComment} />
                            </button>
                            <strong className={cx('item-count')}>{commentsCount}</strong>
                        </label>

                        <VideoShare>
                            <label className={cx('interactive-item')}>
                                <button className={cx('item-icon')}>
                                    <SvgIcon icon={iconShare} />
                                </button>
                                <strong className={cx('item-count')}>{sharesCount || 'Chia sẻ'}</strong>
                            </label>
                        </VideoShare>
                    </div>
                </div>
            </div>
        </div>
    );
});

SuggestVideo.propTypes = {
    videoId: PropTypes.number,
    videoInfo: PropTypes.object.isRequired,
    isInView: PropTypes.bool,
};

export default memo(SuggestVideo);
