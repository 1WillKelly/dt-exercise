import CustomSelect from '../../custom-select';
import Styles from './index.module.scss';

const ResultsHeader = () => {

    return (
        <div className={Styles['results-header']}>
            <div className={Styles['mens-womens-toggle']}>
                <span className={Styles.active}>Men's Shoes</span>
                <span>Women's Shoes</span>
            </div>
            <div className={Styles['sort-by']}>
                <p>Sort by:</p>
                <CustomSelect />
            </div>
        </div>
    );
};

export default ResultsHeader;
