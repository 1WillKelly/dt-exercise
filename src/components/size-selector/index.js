import Styles from './index.module.scss';

const SizeSelector = (props) => {
    const {
        label,
        id,
    } = props;
    return (
        <div className={Styles['size-selector']}>
            <input id={id} type="checkbox" />
            <span className={Styles.check}></span>
            <label for={id}>{label}</label>
        </div>
    );
};

export default SizeSelector;