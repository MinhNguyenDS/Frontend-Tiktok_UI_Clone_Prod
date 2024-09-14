import { useContext } from 'react'

import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { Header, Sidebar } from '../layoutComponents';
import DownloadApp from '~/components/DownloadApp';
import { ModalContext } from '~/components/ModalProvider'
import ModalForm from '~/components/ModalForm'

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {

    const context = useContext(ModalContext)

    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
            <DownloadApp />

            {context.active && <ModalForm onHide={context.handleHideModal} />}
        </div>
    );
}

export default DefaultLayout;
