import { useEffect, useRef, useState } from 'react';
import { InView } from 'react-intersection-observer';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import SuggestVideo from '~/components/Videos/SuggestVideo';
// import { videoService } from '~/services';
import assetImages from '~/assets/images';
// import TiktokLoading from '~/components/TiktokLoading';
// import SvgIcon from '~/components/SvgIcon';
import VideoContext from '~/Context/VideoContext';

const cx = classNames.bind(styles);

function Home() {
    // State
    const [videoList, setVideoList] = useState([]);
    // const [page, setPage] = useState(Math.random() * 10);
    const [volume, setVolume] = useState(0.5);
    const [muted, setMuted] = useState(true);

    // Ref
    const inViewArr = useRef([]);

    // Set value for context
    const contextValue = {
        volumeState: [volume, setVolume],
        mutedState: [muted, setMuted],
        inViewArr: inViewArr.current,
    };

    // Call API to load video list
    useEffect(() => {
        const fetchVideoList = async () => {
            // const result = await videoService.getSuggestVideo(page);
            // console.log('result::', result);

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

            const shuffledResult = result.sort(() => Math.random() - 0.5);
            setVideoList([...shuffledResult]);
        };

        fetchVideoList();
    }, []);

    return (
        <VideoContext value={contextValue}>
            <div className={cx('wrapper')}>
                {videoList.map((video, index) => {
                    return (
                        <InView key={index} threshold={0.8}>
                            {({ inView, ref: observeRef }) => (
                                <SuggestVideo ref={observeRef} isInView={inView} videoInfo={video} videoId={index} />
                            )}
                        </InView>
                    );
                })}
                {/* <InView onChange={(inView) => inView && setPage(handleRandomPage(1, 10))}>
                    <SvgIcon className={cx('auto-load-more')} icon={<TiktokLoading />} />
                </InView> */}
            </div>
        </VideoContext>
    );
}

export default Home;
