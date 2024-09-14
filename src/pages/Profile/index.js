import { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';

import styles from './Profile.module.scss';
import Image from '~/components/Img';
import Button from '~/components/Button';
import { BanIcon, EllipsisHorizontalIcon, FlagIcon, LinkIcon, ShareIcon, UserRegularIcon } from '~/components/Icons';
import ShareAction from '~/components/ShareAction';
import VideoPreview from '~/components/VideoPreview';
import Popper from '~/components/Popper';
import { ModalContext } from '~/components/ModalProvider';
import assetImages from '~/assets/images';

const cx = classNames.bind(styles);

function Profile() {
    const location = useLocation();

    console.log("location.state", location.state)

    const data = location.state;

    const [videos, setVideos] = useState([]);
    const context = useContext(ModalContext);

    useEffect(() => {
        if (data.nickname === 'SunMinh🤖') {
            // Mock data
            const result = [
                {
                    id: 1,
                    user_id: 1,
                    type: '',
                    thumb_url: require('~/assets/images/1.jpeg'),
                    file_url: require('../../videos/video1.mp4'),
                    description:
                        'Em quay di ta “mat nhau” 🫢🫢 #spotify #xuhuong #foryou #wrongtimes #nhachaymoingay🎧🎶🎵',
                    music: 'Wrong Times - Puppy & Dangrangto',
                    is_liked: true,
                    likes_count: 862,
                    comments_count: 73,
                    shares_count: 3,
                    views_count: 1302,
                    viewable: 'public',
                    allows: ['comment', 'duet', 'stitch'],
                    published_at: '2024-09-09 16:41:34',
                    created_at: '2024-09-09 16:41:34',
                    updated_at: '2024-09-09 16:41:36',
                    user: {
                        id: 1,
                        first_name: 'Hoàng',
                        last_name: 'Minh',
                        nickname: 'SunMinh🤖',
                        avatar: assetImages.avartar,
                        bio: 'Trang này chứa thông tin chi tiết của một nhân tài 🤫🤫',
                        tick: true,
                        is_followed: true,
                        followings_count: 1,
                        followers_count: 384,
                        likes_count: 7070,
                        website_url: 'https://www.facebook.com/nhm.fb.me/',
                        facebook_url: '',
                        youtube_url: '',
                        twitter_url: '',
                        instagram_url: '',
                    },
                    meta: {
                        file_format: 'mp4',
                        mime_type: 'video/mp4',
                        video: {
                            resolution_x: 768,
                            resolution_y: 1071,
                        },
                    },
                },
                {
                    id: 2,
                    user_id: 1,
                    type: '',
                    thumb_url: require('~/assets/images/2.jpeg'),
                    file_url: require('../../videos/video2.mp4'),
                    description:
                        'Slightly warmer 💓 #fyp #xuhuong #detoiomembanggiaidieunay #kaidinh #min #greyd #nhachaymoingay',
                    music: 'Để tôi ôm em bằng giai điệu này - Kai Đinh & MIN & GREY D',
                    is_liked: true,
                    likes_count: 1094,
                    comments_count: 163,
                    shares_count: 17,
                    views_count: 1524,
                    viewable: 'public',
                    allows: ['comment', 'duet', 'stitch'],
                    published_at: '2024-09-09 16:41:34',
                    created_at: '2024-09-09 16:41:34',
                    updated_at: '2024-09-09 16:41:36',
                    user: {
                        id: 1,
                        first_name: 'Hoàng',
                        last_name: 'Minh',
                        nickname: 'SunMinh🤖',
                        avatar: assetImages.avartar,
                        bio: 'Trang này chứa thông tin chi tiết của một nhân tài 🤫🤫',
                        tick: true,
                        is_followed: true,
                        followings_count: 1,
                        followers_count: 384,
                        likes_count: 7070,
                        website_url: 'https://www.facebook.com/nhm.fb.me/',
                        facebook_url: '',
                        youtube_url: '',
                        twitter_url: '',
                        instagram_url: '',
                    },
                    meta: {
                        file_format: 'mp4',
                        mime_type: 'video/mp4',
                        video: {
                            resolution_x: 768,
                            resolution_y: 1071,
                        },
                    },
                },
                {
                    id: 3,
                    user_id: 1,
                    type: '',
                    thumb_url: require('~/assets/images/3.jpeg'),
                    file_url: require('../../videos/video3.mp4'),
                    description:
                        'A little peaceful 💓 #hoangdung #nepvaoanhvangheanhhat #amnhac #nhachay #nhacnaychillphet #nhachaymoingay #soundsofvietnam #xuhuong #longervideos',
                    music: 'Nép vào anh và nghe anh hát - Cover - Hoàng Dũng',
                    is_liked: true,
                    likes_count: 999,
                    comments_count: 202,
                    shares_count: 29,
                    views_count: 1408,
                    viewable: 'public',
                    allows: ['comment', 'duet', 'stitch'],
                    published_at: '2024-09-09 16:41:34',
                    created_at: '2024-09-09 16:41:34',
                    updated_at: '2024-09-09 16:41:36',
                    user: {
                        id: 1,
                        first_name: 'Hoàng',
                        last_name: 'Minh',
                        nickname: 'SunMinh🤖',
                        avatar: assetImages.avartar,
                        bio: 'Trang này chứa thông tin chi tiết của một nhân tài 🤫🤫',
                        tick: true,
                        is_followed: true,
                        followings_count: 1,
                        followers_count: 384,
                        likes_count: 7070,
                        website_url: 'https://www.facebook.com/nhm.fb.me/',
                        facebook_url: '',
                        youtube_url: '',
                        twitter_url: '',
                        instagram_url: '',
                    },
                    meta: {
                        file_format: 'mp4',
                        mime_type: 'video/mp4',
                        video: {
                            resolution_x: 768,
                            resolution_y: 1071,
                        },
                    },
                },
                {
                    id: 4,
                    user_id: 1,
                    type: '',
                    thumb_url: require('~/assets/images/4.jpeg'),
                    file_url: require('../../videos/video4.mp4'),
                    description: 'Anh biết em muốn gì nèk 🤫 | #hoanhao #bray #nhacnaynghelanghien #trumnetwork #music',
                    music: 'Hoàn Hảo - B Ray',
                    is_liked: true,
                    likes_count: 1404,
                    comments_count: 308,
                    shares_count: 18,
                    views_count: 2002,
                    viewable: 'public',
                    allows: ['comment', 'duet', 'stitch'],
                    published_at: '2024-09-09 16:41:34',
                    created_at: '2024-09-09 16:41:34',
                    updated_at: '2024-09-09 16:41:36',
                    user: {
                        id: 1,
                        first_name: 'Hoàng',
                        last_name: 'Minh',
                        nickname: 'SunMinh🤖',
                        avatar: assetImages.avartar,
                        bio: 'Trang này chứa thông tin chi tiết của một nhân tài 🤫🤫',
                        tick: true,
                        is_followed: true,
                        followings_count: 1,
                        followers_count: 384,
                        likes_count: 7070,
                        website_url: 'https://www.facebook.com/nhm.fb.me/',
                        facebook_url: '',
                        youtube_url: '',
                        twitter_url: '',
                        instagram_url: '',
                    },
                    meta: {
                        file_format: 'mp4',
                        mime_type: 'video/mp4',
                        video: {
                            resolution_x: 768,
                            resolution_y: 1071,
                        },
                    },
                },
                {
                    id: 5,
                    user_id: 1,
                    type: '',
                    thumb_url: assetImages.thumb_avatar_2,
                    file_url: require('../../videos/video5.mp4'),
                    description:
                        'Chân thành anh đã đổi được gì... | Sáng tác | #nhactamtrang #nhachaymoingay #nhacchill #music #lyrics #nhaccoloi #coversong #cover #zmattroinho #viral #fypシ #xh #tamtrang',
                    music: 'nhạc nền - SunMinh🤖',
                    is_liked: true,
                    likes_count: 670,
                    comments_count: 73,
                    shares_count: 11,
                    views_count: 968,
                    viewable: 'public',
                    allows: ['comment', 'duet', 'stitch'],
                    published_at: '2024-09-09 16:41:34',
                    created_at: '2024-09-09 16:41:34',
                    updated_at: '2024-09-09 16:41:36',
                    user: {
                        id: 1,
                        first_name: 'Hoàng',
                        last_name: 'Minh',
                        nickname: 'SunMinh🤖',
                        avatar: assetImages.avartar,
                        bio: 'Trang này chứa thông tin chi tiết của một nhân tài 🤫🤫',
                        tick: true,
                        is_followed: true,
                        followings_count: 1,
                        followers_count: 384,
                        likes_count: 7070,
                        website_url: 'https://www.facebook.com/nhm.fb.me/',
                        facebook_url: '',
                        youtube_url: '',
                        twitter_url: '',
                        instagram_url: '',
                    },
                    meta: {
                        file_format: 'mp4',
                        mime_type: 'video/mp4',
                        video: {
                            resolution_x: 768,
                            resolution_y: 1071,
                        },
                    },
                },
                {
                    id: 6,
                    user_id: 1,
                    type: '',
                    thumb_url: require('~/assets/images/6.png'),
                    file_url: require('../../videos/video6.mp4'),
                    description:
                        'Anh ở vùng quê khu nghèo khó đó... #CapCut #ThienLyOi #nhachay #xuhuong #thienlyoicover',
                    music: 'nhạc nền - T.R.I',
                    is_liked: true,
                    likes_count: 315,
                    comments_count: 1,
                    shares_count: 0,
                    views_count: 502,
                    viewable: 'public',
                    allows: ['comment', 'duet', 'stitch'],
                    published_at: '2024-09-09 16:41:34',
                    created_at: '2024-09-09 16:41:34',
                    updated_at: '2024-09-09 16:41:36',
                    user: {
                        id: 1,
                        first_name: 'Hoàng',
                        last_name: 'Minh',
                        nickname: 'SunMinh🤖',
                        avatar: assetImages.avartar,
                        bio: 'Trang này chứa thông tin chi tiết của một nhân tài 🤫🤫',
                        tick: true,
                        is_followed: true,
                        followings_count: 1,
                        followers_count: 384,
                        likes_count: 7070,
                        website_url: 'https://www.facebook.com/nhm.fb.me/',
                        facebook_url: '',
                        youtube_url: '',
                        twitter_url: '',
                        instagram_url: '',
                    },
                    meta: {
                        file_format: 'mp4',
                        mime_type: 'video/mp4',
                        video: {
                            resolution_x: 768,
                            resolution_y: 1071,
                        },
                    },
                },
                {
                    id: 7,
                    user_id: 1,
                    type: '',
                    thumb_url: require('~/assets/images/7.png'),
                    file_url: require('../../videos/video7.mp4'),
                    description: '🥹🥹 #xuhuong #fyp #giaitritiktok #CapCut #uongnham',
                    music: 'UỐNG NHẦM - Nhật Hoàng & Hennessy',
                    is_liked: true,
                    likes_count: 350,
                    comments_count: 47,
                    shares_count: 0,
                    views_count: 784,
                    viewable: 'public',
                    allows: ['comment', 'duet', 'stitch'],
                    published_at: '2024-09-09 16:41:34',
                    created_at: '2024-09-09 16:41:34',
                    updated_at: '2024-09-09 16:41:36',
                    user: {
                        id: 1,
                        first_name: 'Hoàng',
                        last_name: 'Minh',
                        nickname: 'SunMinh🤖',
                        avatar: assetImages.avartar,
                        bio: 'Trang này chứa thông tin chi tiết của một nhân tài 🤫🤫',
                        tick: true,
                        is_followed: true,
                        followings_count: 1,
                        followers_count: 384,
                        likes_count: 7070,
                        website_url: 'https://www.facebook.com/nhm.fb.me/',
                        facebook_url: '',
                        youtube_url: '',
                        twitter_url: '',
                        instagram_url: '',
                    },
                    meta: {
                        file_format: 'mp4',
                        mime_type: 'video/mp4',
                        video: {
                            resolution_x: 768,
                            resolution_y: 1071,
                        },
                    },
                },
                {
                    id: 8,
                    user_id: 1,
                    type: '',
                    thumb_url: require('~/assets/images/8.png'),
                    file_url: require('../../videos/video8.mp4'),
                    description:
                        'Thử đi, hay lắm, thề 🤧 #code #programming #heart #coding #foryou #romantic #developer',
                    music: 'nhạc nền - SunMinh🤖',
                    is_liked: true,
                    likes_count: 336,
                    comments_count: 67,
                    shares_count: 9,
                    views_count: 648,
                    viewable: 'public',
                    allows: ['comment', 'duet', 'stitch'],
                    published_at: '2024-09-09 16:41:34',
                    created_at: '2024-09-09 16:41:34',
                    updated_at: '2024-09-09 16:41:36',
                    user: {
                        id: 1,
                        first_name: 'Hoàng',
                        last_name: 'Minh',
                        nickname: 'SunMinh🤖',
                        avatar: assetImages.avartar,
                        bio: 'Trang này chứa thông tin chi tiết của một nhân tài 🤫🤫',
                        tick: true,
                        is_followed: true,
                        followings_count: 1,
                        followers_count: 384,
                        likes_count: 7070,
                        website_url: 'https://www.facebook.com/nhm.fb.me/',
                        facebook_url: '',
                        youtube_url: '',
                        twitter_url: '',
                        instagram_url: '',
                    },
                    meta: {
                        file_format: 'mp4',
                        mime_type: 'video/mp4',
                        video: {
                            resolution_x: 768,
                            resolution_y: 1071,
                        },
                    },
                },
                {
                    id: 9,
                    user_id: 1,
                    type: '',
                    thumb_url: require('~/assets/images/9.png'),
                    file_url: require('../../videos/video9.mp4'),
                    description: 'Không ai đúng ai sai...🖤 #anhsad #loinoidieutrenmoiem #chill #coversong #deep',
                    music: 'Lời nói điêu - #A N H',
                    is_liked: true,
                    likes_count: 529,
                    comments_count: 15,
                    shares_count: 11,
                    views_count: 879,
                    viewable: 'public',
                    allows: ['comment', 'duet', 'stitch'],
                    published_at: '2024-09-09 16:41:34',
                    created_at: '2024-09-09 16:41:34',
                    updated_at: '2024-09-09 16:41:36',
                    user: {
                        id: 1,
                        first_name: 'Hoàng',
                        last_name: 'Minh',
                        nickname: 'SunMinh🤖',
                        avatar: assetImages.avartar,
                        bio: 'Trang này chứa thông tin chi tiết của một nhân tài 🤫🤫',
                        tick: true,
                        is_followed: true,
                        followings_count: 1,
                        followers_count: 384,
                        likes_count: 7070,
                        website_url: 'https://www.facebook.com/nhm.fb.me/',
                        facebook_url: '',
                        youtube_url: '',
                        twitter_url: '',
                        instagram_url: '',
                    },
                    meta: {
                        file_format: 'mp4',
                        mime_type: 'video/mp4',
                        video: {
                            resolution_x: 768,
                            resolution_y: 1071,
                        },
                    },
                },
                {
                    id: 10,
                    user_id: 1,
                    type: '',
                    thumb_url: assetImages.thumb_avatar,
                    file_url: require('../../videos/video10.mp4'),
                    description: '🙆❤️ #CapCut #xuhuong #fyp',
                    music: 'nhạc nền - SunMinh🤖',
                    is_liked: true,
                    likes_count: 248,
                    comments_count: 73,
                    shares_count: 11,
                    views_count: 532,
                    viewable: 'public',
                    allows: ['comment', 'duet', 'stitch'],
                    published_at: '2024-09-09 16:41:34',
                    created_at: '2024-09-09 16:41:34',
                    updated_at: '2024-09-09 16:41:36',
                    user: {
                        id: 1,
                        first_name: 'Hoàng',
                        last_name: 'Minh',
                        nickname: 'SunMinh🤖',
                        avatar: assetImages.avartar,
                        bio: 'Trang này chứa thông tin chi tiết của một nhân tài 🤫🤫',
                        tick: true,
                        is_followed: true,
                        followings_count: 1,
                        followers_count: 384,
                        likes_count: 7070,
                        website_url: 'https://www.facebook.com/nhm.fb.me/',
                        facebook_url: '',
                        youtube_url: '',
                        twitter_url: '',
                        instagram_url: '',
                    },
                    meta: {
                        file_format: 'mp4',
                        mime_type: 'video/mp4',
                        video: {
                            resolution_x: 768,
                            resolution_y: 1071,
                        },
                    },
                },
                {
                    id: 11,
                    user_id: 1,
                    type: '',
                    thumb_url: require('~/assets/images/11.png'),
                    file_url: require('../../videos/video11.mp4'),
                    description: 'Anh chỉ muốn... | Ronboogz #anhchimuon #ronboogz',
                    music: 'Anh Chỉ Muốn - Ronboogz',
                    is_liked: true,
                    likes_count: 263,
                    comments_count: 1,
                    shares_count: 1,
                    views_count: 456,
                    viewable: 'public',
                    allows: ['comment', 'duet', 'stitch'],
                    published_at: '2024-09-09 16:41:34',
                    created_at: '2024-09-09 16:41:34',
                    updated_at: '2024-09-09 16:41:36',
                    user: {
                        id: 1,
                        first_name: 'Hoàng',
                        last_name: 'Minh',
                        nickname: 'SunMinh🤖',
                        avatar: assetImages.avartar,
                        bio: 'Trang này chứa thông tin chi tiết của một nhân tài 🤫🤫',
                        tick: true,
                        is_followed: true,
                        followings_count: 1,
                        followers_count: 384,
                        likes_count: 7070,
                        website_url: 'https://www.facebook.com/nhm.fb.me/',
                        facebook_url: '',
                        youtube_url: '',
                        twitter_url: '',
                        instagram_url: '',
                    },
                    meta: {
                        file_format: 'mp4',
                        mime_type: 'video/mp4',
                        video: {
                            resolution_x: 768,
                            resolution_y: 1071,
                        },
                    },
                },
            ];

            setVideos(result);
        } else {
            fetch(`https://tiktok.fullstack.edu.vn/api/users/@${data.nickname}`)
                .then((response) => response.json())
                .then((json) => setVideos(json.data.videos));
        }
    }, [data.nickname]);

    return (
        <div className={cx('profile-wrapper')}>
            <div className={cx('info-container')}>
                <div className={cx('info')}>
                    <div className={cx('basic')}>
                        <Image className={cx('avatar')} src={data.avatar} alt={data.avatar} />
                        <div className={cx('text')}>
                            <div className={cx('username')}>{data.nickname}</div>
                            <div className={cx('name')}>{data.full_name || `${data.first_name} ${data.last_name}`}</div>
                            <Button color primary style={{ minWidth: '208px' }} onClick={context.handleShowModal}>
                                Follow
                            </Button>
                        </div>
                    </div>

                    <div className={cx('counts')}>
                        <div className={cx('following')}>
                            <strong>{data.followings_count}</strong> Đang Follow
                        </div>
                        <div className={cx('followers')}>
                            <strong>{data.followers_count}</strong> Follower
                        </div>
                        <div className={cx('likes')}>
                            <strong>{data.likes_count}</strong> Thích
                        </div>
                    </div>

                    <div className={cx('bio')}>{data.bio ? data.bio : 'Chưa có tiểu sử.'}</div>

                    <a href={data.website_url} target="blank">
                        {data.website_url && (
                            <div className={cx('website')}>
                                <LinkIcon className={cx('link-icon')} />
                                {data.website_url}
                            </div>
                        )}
                    </a>
                </div>
                <div className={cx('side-btns')}>
                    <div className={cx('share-btn')}>
                        <ShareAction offset={[-100, 10]}>
                            <div>
                                <ShareIcon />
                            </div>
                        </ShareAction>
                    </div>

                    <HeadlessTippy
                        interactive
                        hideOnClick="false"
                        placement="bottom-end"
                        offset={[0, 10]}
                        delay={[0, 700]}
                        zIndex="99"
                        render={(attrs) => (
                            <div tabIndex="-1" {...attrs}>
                                <Popper className={cx('more-tab')}>
                                    <div className={cx('action-report')}>
                                        <p>
                                            <FlagIcon height="16" /> Báo cáo
                                        </p>
                                    </div>
                                    <div className={cx('action-block')}>
                                        <p>
                                            <BanIcon /> Chặn
                                        </p>
                                    </div>
                                </Popper>
                            </div>
                        )}
                    >
                        <div>
                            <EllipsisHorizontalIcon />
                        </div>
                    </HeadlessTippy>
                </div>
            </div>

            <div className={cx('video-container')}>
                <div className={cx('tabs')}>
                    <p className={cx('video-tab')}>Videos</p>
                    <p className={cx('liked-tab')}>Liked</p>
                    <div className={cx('underline')}></div>
                </div>

                {videos.length > 0 && (
                    <div className={cx('videos')}>
                        {videos.map((video, index) => {
                            return <VideoPreview data={video} key={index} />;
                        })}
                    </div>
                )}

                {videos.length === 0 && (
                    <div className={cx('no-content')}>
                        <div>
                            <UserRegularIcon />
                            <p className={cx('title')}>No content</p>
                            <p className={cx('description')}>This user has not published any videos.</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Profile;
