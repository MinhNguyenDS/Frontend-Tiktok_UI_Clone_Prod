import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import BorderTopContainer from '~/components/BorderTopContainer';
import Button from '~/components/Button';
import SvgIcon from '~/components/SvgIcon';
import { iconTag, iconMusic } from '~/components/SvgIcon/iconsRepo';
import LineLoading from '~/components/Loading/LineLoading';

const cx = classNames.bind(styles);

const discoverListFake = [
    {
        type: 'hashtag',
        title: 'dulich',
    },
    {
        type: 'hashtag',
        title: 'khongthesay',
    },
    {
        type: 'hashtag',
        title: 'AI',
    },
    {
        type: 'hashtag',
        title: 'bongda',
    },
    {
        type: 'hashtag',
        title: 'caulong',
    },
    {
        type: 'music',
        title: 'Anh Là Của Em - Karik - OST Người Lạ ơi',
    },
    {
        type: 'hashtag',
        title: 'guitar',
    },
    {
        type: 'hashtag',
        title: 'coding',
    },
    {
        type: 'hashtag',
        title: 'game',
    },
    {
        type: 'music',
        title: 'Tình Đã Đầy Một Tim - Huyền Tâm Môn',
    },
    {
        type: 'music',
        title: 'Anh Kết Em Rồi - Hồng Thanh ft.DjMie',
    },
];

function Discover() {
    const [discoverList, setDiscoverList] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setDiscoverList(discoverListFake);
        }, 5000);
    }, []);

    return (
        <BorderTopContainer className={cx('discover-container')}>
            <h3 className={cx('title')}>Khám phá</h3>
            <section className={cx('content')}>
                {discoverList.map((disItem, index) => {
                    const isHashtag = disItem.type === 'hashtag';
                    return (
                        <Button
                            key={index}
                            className={cx('btn', {
                                hashtag: isHashtag,
                            })}
                            primary
                            xsmall
                            rounded
                            leftIcon={<SvgIcon icon={isHashtag ? iconTag : iconMusic} />}
                        >
                            {disItem.title}
                        </Button>
                    );
                })}
                {discoverList.length < 1 && (
                    <>
                        <LineLoading />
                        <LineLoading />
                    </>
                )}
            </section>
        </BorderTopContainer>
    );
}

export default Discover;
