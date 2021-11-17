import CustomCheckbox from '../custom-checkbox';
import SizeSelector from '../size-selector';
import FGSize from './filter-groups/fg-size';
import FGType from './filter-groups/fg-type';
import Styles from './index.module.scss';

const Filters = () => {

    return (
        <aside className={Styles['filter-sidebar']}>
            <h2>Filters</h2>

            <section className={`
                ${Styles['filter-group']}
                ${Styles.type}
            `}>
                <FGType />
            </section>

            <section className={`
                ${Styles['filter-group']}
                ${Styles.size}
            `}>
                <FGSize />
            </section>
        </aside>
    );
};

export default Filters;
