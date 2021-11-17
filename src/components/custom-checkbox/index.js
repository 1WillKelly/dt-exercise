import Styles from './index.module.scss';

const CustomCheckbox = (props) => {
    const {
        label,
        id,
    } = props;
    return (
        <div className={Styles['custom-checkbox']}>
            <input id={id} type="checkbox" />
            <span className={Styles.check}></span>
            <label for={id}>{label}</label>
        </div>
    );
};

export default CustomCheckbox;