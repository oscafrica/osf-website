import React, { Children } from 'react';
import classNames from 'classnames';
import styles from './style.module.css';

function RadioButton({value, label, onChange, onBlur, name, children, className, ...props}) {
  
<<<<<<< HEAD

=======
>>>>>>> 5d61dda5fcfbad6c90cb0b44671b172c8ab36741
    return (
        <label>
            <input
                className={className}
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
};

<<<<<<< HEAD


=======
>>>>>>> 5d61dda5fcfbad6c90cb0b44671b172c8ab36741
export default RadioButton;