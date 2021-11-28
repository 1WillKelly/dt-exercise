import CustomSelect from '../../custom-select';
import ToggleSwitch from '../../toggle-switch';
import Styles from './index.module.scss';

const ResultsHeader = () => {

    return (
        <div className={Styles['results-header']}>
            <ToggleSwitch />
            <div className={Styles['sort-by']}>
                <p>Sort by:</p>
                <CustomSelect />
            </div>
        </div>
    );
};

export default ResultsHeader;
