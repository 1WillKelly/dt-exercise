import Styles from './index.module.scss';

const Button = (props) => {
    const {
        text,
    } = props;
    return (
        <button>{text}</button>
    );
};

export default Button;
