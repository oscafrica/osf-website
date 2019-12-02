import React, { Children } from 'react';
import classNames from 'classnames';
import styles from './style.module.css';

function RadioButton({value, label, onChange, onBlur, name, children, className, ...props}) {
    const _className = classNames(styles.oc_radiobutton_container, styles.oc_checkmark, className);

    return (
        <label className={_className}>
            <input
                className={_className}
                type="radio"
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
    // onChange: PropTypes.func,
    // onBlur: PropTypes.func
};



export default RadioButton;
