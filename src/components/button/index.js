import React from 'react';
import classNames from 'classnames';

import styles from './style.module.css';


function Button({ onClick, children, className, disabled, ...props }) {
  const _className = classNames(styles.btn_container, className);

  return (
    <button className={_className} disabled={disabled} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  disabled: false
};

export default Button;
