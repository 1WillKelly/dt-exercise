import ColorSelector from '../../../color-selector';
import Styles from './index.module.scss';

const FGColor = (props) => {

    const {
        title,
    } = props;

    return (
        <>
            <h3>{title}</h3>
            <div className={Styles['color-options']}>
                <ColorSelector
                    color="Blue"
                    hexCode="#4E607A"
                />
                <ColorSelector
                    color="Black"
                    hexCode="#3B3B3B"
                />
                <ColorSelector
                    color="Grey"
                    hexCode="#8C8C8C"
                />
                <ColorSelector
                    color="Green"
                    hexCode="#6A7160"
                />
                <ColorSelector
                    color="Orange"
                    hexCode="#DFA25F"
                />
                <ColorSelector
                    color="Yellow"
                    hexCode="#E7D9A1"
                    darkCheckmark
                />
                <ColorSelector
                    color="Purple"
                    hexCode="#9D9AC7"
                />
                <ColorSelector
                    color="Red"
                    hexCode="#A44E56"
                />
                <ColorSelector
                    color="White"
                    hexCode="#F5F4F0"
                    darkCheckmark
                />
                <ColorSelector
                    color="Beige"
                    hexCode="#B7AFA3"
                />
            </div>
        </>
    );
};

export default FGColor;
