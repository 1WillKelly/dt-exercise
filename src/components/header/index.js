import Styles from './index.module.scss';
import allbirdsLogo from '../../assets/images/allbirds-logo.svg';
import AutoComplete from '../autocomplete';

const Header = () => {

    return (
        <header>
            <a
                className={Styles['header-logo']}
                href="/"
            >
                <img
                    src={allbirdsLogo}
                    alt='Allbirds Logo'
                />
            </a>
            <nav>
                <AutoComplete />
                <div className={`
                    ${Styles['header-icon']}
                    ${Styles.profile}
                `}></div>
                <div className={`
                    ${Styles['header-icon']}
                    ${Styles.cart}
                `}></div>
            </nav>
        </header>
    );
};

export default Header;
