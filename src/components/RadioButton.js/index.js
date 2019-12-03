import React, { Children } from 'react';
import classNames from 'classnames';
import styles from './style.module.css';

function RadioButton({value, label, onChange, onBlur, name, children, className, ...props}) {
  
    return (
        <label>
            <input
                className={className}
                type="radio"
                class="form-checked-input"
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                {...props}
            />
            {children}
        </label>
    );
};

RadioButton.defaultProps = {
    name: '',
    className: '',
    disabled: false,
};



export default RadioButton;