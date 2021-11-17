import CustomCheckbox from '../../../custom-checkbox';

const FGPrice = () => {

    return (
        <>
            <h3>Type</h3>
            <ul>
                <li>
                    <CustomCheckbox
                        label="Running Shoes"
                        id="running_shoes"
                    />
                </li>
                <li>
                    <CustomCheckbox
                        label="Everyday Sneakers"
                        id="everyday_sneakers"
                    />
                </li>
                <li>
                    <CustomCheckbox
                        label="Water Repellent Shoes"
                        id="water_repellent_shoes"
                    />
                </li>
                <li>
                    <CustomCheckbox
                        label="Slip-Ons"
                        id="slip_ons"
                    />
                </li>
                <li>
                    <CustomCheckbox
                        label="High-Tops"
                        id="high_tops"
                    />
                </li>
            </ul>
        </>
    );
};

export default FGPrice;
