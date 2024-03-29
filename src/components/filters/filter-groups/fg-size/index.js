import SizeSelector from '../../../size-selector';

const FGSize = (props) => {

    const {
        title,
    } = props;

    return (
        <>
            <h3>{title}</h3>
            <ul>
                <li>
                    <SizeSelector
                        label="5"
                        id="5"
                    />
                </li>
                <li>
                    <SizeSelector
                        label="5.5"
                        id="5.5"
                    />
                </li>
                <li>
                    <SizeSelector
                        label="6"
                        id="6"
                    />
                </li>
                <li>
                    <SizeSelector
                        label="6.5"
                        id="6.5"
                    />
                </li>
                <li>
                    <SizeSelector
                        label="7"
                        id="7"
                    />
                </li>
                <li>
                    <SizeSelector
                        label="7.5"
                        id="7.5"
                    />
                </li>
                <li>
                    <SizeSelector
                        label="8"
                        id="8"
                    />
                </li>
                <li>
                    <SizeSelector
                        label="8.5"
                        id="8.5"
                    />
                </li>
                <li>
                    <SizeSelector
                        label="9"
                        id="9"
                    />
                </li>
                <li>
                    <SizeSelector
                        label="9.5"
                        id="9.5"
                    />
                </li>
                <li>
                    <SizeSelector
                        label="10"
                        id="10"
                    />
                </li>
                <li>
                    <SizeSelector
                        label="10.5"
                        id="10.5"
                    />
                </li>
                <li>
                    <SizeSelector
                        label="11"
                        id="11"
                    />
                </li>
                <li>
                    <SizeSelector
                        label="11.5"
                        id="11.5"
                    />
                </li>
                <li>
                    <SizeSelector
                        label="12"
                        id="12"
                    />
                </li>
                <li>
                    <SizeSelector
                        label="12.5"
                        id="12.5"
                    />
                </li>
                <li>
                    <SizeSelector
                        label="13"
                        id="13"
                    />
                </li>
            </ul>
        </>
    );
};

export default FGSize;
