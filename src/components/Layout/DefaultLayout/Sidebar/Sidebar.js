import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import images from '~/assets/images/images';
import SideBarOptions from './SidebarItem';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('top-sidebar')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Spotify" />
                </div>
                <ul className={cx('main-option')}>
                    
                </ul>
                <div className={cx('sub-option')}>

                </div>
            </div>
            <div className={cx('bottom-sidebar')}>

            </div>
        </div>
    );
}

export default Sidebar;
