import Styles from './index.module.scss';

const CustomSelect = () => {
    return (
        <select>
            <option selected value="0">Featured</option>
            <option value="1">Price: Low to High</option>
            <option value="2">Price: High to Low</option>
            <option value="3">Best Reviewed</option>
        </select>
    );
};

export default CustomSelect;