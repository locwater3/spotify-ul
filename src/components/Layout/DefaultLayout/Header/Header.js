import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images/images';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('btn-tab')}>
                <button className={cx('arrow-left-btn')}>
                    <img src={images.arrowLeft} alt="Go back" />
                </button>
                <button className={cx('arrow-right-btn')}>
                    <img src={images.arrowRight} alt="Go forward" />
                </button>
                </div>
                <div className={cx('search')}>
                    <button className={cx('search-btn')}>
                        <img src={images.search} alt="Search" />
                    </button>
                    <input placeholder="What do you want to listen to?" />
                    <button className={cx('close-btn')}>
                        <img src={images.close} alt="Close" />
                    </button>
                </div>
                <div className={cx('actions')}>
                    <button>Premium</button>
                    <button>Support</button>
                    <button>Download</button>
                </div>
                <div className={cx('login')}>
                    <button className={cx('sign-up-btn')}>Sign up</button>
                    <button className={cx('login-btn')}>Login</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
