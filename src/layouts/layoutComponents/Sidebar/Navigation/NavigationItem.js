import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function NavigationItem({ title, icon, iconActive, to, state }) {
    const [active, setActive] = useState(false);
    return (
        <NavLink
            className={({ isActive }) => {
                if (title === 'Hồ sơ') {
                    return cx('nav-item', {
                        active: active,
                    });
                }
                
                return cx('nav-item', {
                    active: isActive,
                });
            }}
            onClick={ () => setActive(true) }
            onBlur={() => setTimeout(() => setActive(false), 50)}
            to={to}
            state={state}
        >
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('icon-active')}>{iconActive}</span>
            <h3 className={cx('title')}>{title}</h3>
        </NavLink>
    );
}

NavigationItem.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    iconActive: PropTypes.element,
    to: PropTypes.string,
    state: PropTypes.object,
};

export default NavigationItem;
