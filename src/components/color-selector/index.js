import Styles from './index.module.scss';

const ColorSelector = (props) => {
    const {
        color,
        hexCode,
        darkCheckmark,
    } = props;
    return (
        <div
            className={`
                ${Styles['color-selector']}
                ${darkCheckmark ? Styles['dark-checkmark'] : ''}
            `}
        >
            <input id={color} type='checkbox' />
            <span className={Styles.circle} style={{backgroundColor: hexCode}}></span>
            <label for={color}>{color}</label>
        </div>
    );
};

export default ColorSelector;


