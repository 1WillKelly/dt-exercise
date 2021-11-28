import React from 'react';
import Styles from './index.module.scss';

const ToggleSwitch = () => {
    
    return (
        <>
            <div className={Styles['switch-field']}>
                <input type="radio" id="radio-1" name="switch-1" value="yes" checked />
                <label for="radio-1">Women's Shoes</label>
                <input type="radio" id="radio-2" name="switch-1" value="no" />
                <label for="radio-2">Men's Shoes</label>
            </div>
        </>
    );
};

export default ToggleSwitch;


