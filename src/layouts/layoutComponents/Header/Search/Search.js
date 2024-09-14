import { useState, useRef, useEffect, memo, useCallback } from 'react';
import TippyHeadless from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import styles from './Search.module.scss';
import SvgIcon from '~/components/SvgIcon';
import { iconClose, iconLoading, iconSearch } from '~/components/SvgIcon/iconsRepo';
import PopperWrapper from '~/components/Popper';
import SeachAccountItem from '~/components/Items/AccountItem';
import { useDebounce } from '~/hooks';
import { searchService } from '~/services';

const cx = classNames.bind(styles);

function Search() {
    const [searchInput, setSearchInput] = useState('Minh');
    const [showSearch, setShowSearch] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);

    // Ref
    const searchInputRef = useRef();

    const debouncedValue = useDebounce(searchInput, 800);

    useEffect(() => {
        if (!debouncedValue) {
            setSearchResult([]);
            return;
        }

        const fetchAPI = async () => {
            setLoading(true);

            const searchResult = await searchService.search(debouncedValue);

            setSearchResult(searchResult);
            setLoading(false);
        };

        fetchAPI();
    }, [debouncedValue]);

    // Handler function
    const handleChangeInput = (e) => {
        const valueInput = e.target.value;
        valueInput.startsWith(' ') || setSearchInput(valueInput);
    };

    const handleClearInput = useCallback((isFocus) => {
        setSearchInput('');
        if (isFocus === true) {
            searchInputRef.current.focus();
        }
    }, []);

    const handleBlurSearch = () => {
        return setShowSearch(false);
    };

    const renderSearchResult = (attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
                <Link to={`/search/user/${searchInput}`} state={searchInput} onClick={handleClearInput}>
                    <div className={cx('text-result')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} /> {searchInput}
                    </div>
                </Link>
                <div className={cx('search-result__title')}>Tài khoản</div>
                {searchResult.map((accountItem, index) => (
                    <SeachAccountItem key={index} accountInfo={accountItem} onClick={handleClearInput} />
                ))}
                <Link to={`/search/user/${searchInput}`} state={searchInput} onClick={handleClearInput}>
                    <div className={cx('search-result__see-full')}>Xem tất cả kết quả dành cho "{searchInput}"</div>
                </Link>
            </PopperWrapper>
        </div>
    );

    return (
        <span>
            <TippyHeadless
                render={renderSearchResult}
                visible={showSearch && searchResult.length > 0 && !!searchInput}
                interactive
                onClickOutside={handleBlurSearch}
            >
                <div className={cx('search-container')}>
                    <input
                        type="text"
                        placeholder="Tìm kiếm"
                        spellCheck="false"
                        value={searchInput}
                        ref={searchInputRef}
                        onChange={handleChangeInput}
                        onFocus={() => {
                            setShowSearch(true);
                        }}
                        onBlur={() => {
                            searchResult.length > 0 || handleBlurSearch();
                        }}
                    />
                    <div className={cx('search-icon-wrapper')}>
                        {loading && (
                            <button className={cx('loading', 'lh0')}>
                                <SvgIcon icon={iconLoading} />
                            </button>
                        )}
                        <button className={cx('clear-btn', 'lh0')} onClick={() => handleClearInput(true)}>
                            <SvgIcon icon={iconClose} />
                        </button>
                    </div>
                    {/* Search btn */}
                    <button className={cx('search-btn', 'lh0')} onMouseDown={(e) => e.preventDefault()}>
                        <SvgIcon icon={iconSearch} size={24} />
                    </button>
                </div>
            </TippyHeadless>
        </span>
    );
}

export default memo(Search);
