import Styles from './index.module.scss';
import FGColor from './filter-groups/fg-color';
import FGSize from './filter-groups/fg-size';
import FGType from './filter-groups/fg-type';

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
                <FGSize
                    title="Size"
                />
            </section>

            <section className={`
                ${Styles['filter-group']}
                ${Styles.color}
            `}>
                <FGColor
                    title="Color"
                />
            </section>
        </aside>
    );
};

export default Filters;
