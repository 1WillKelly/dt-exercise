import Styles from './index.module.scss';
import allbirdsLogo from '../../assets/images/allbirds-logo.svg';
import AutoComplete from '../autocomplete';

const Header = () => {

    return (
        <header>
            <div>
                <a
                    className={Styles['header-logo']}
                    href="#"
                    title="Home"
                    aria-label="Home"
                >
                    <img
                        src={allbirdsLogo}
                        alt='Allbirds Logo'
                    />
                </a>
                <nav>
                    <div className={Styles['autocomplete-full']}>
                        <AutoComplete />
                    </div>
                    <div className={`
                        ${Styles['header-icon']}
                        ${Styles.profile}
                    `}></div>
                    <div className={`
                        ${Styles['header-icon']}
                        ${Styles.cart}
                    `}></div>
                </nav>
            </div>
            <div className={Styles['autocomplete-mobile']}>
                <AutoComplete />
            </div>
        </header>
    );
};

export default Header;
