import React from 'react';
import classNames from 'classnames';

import styles from './style.module.css';

const defaultProps = {
  className: '',
  disabled: false,
  background: '#283656'
};

function Button({ onClick, children, className, disabled, background, ...props }) {
  // const _className = `btn_container p-2 m-2 ${className}`;
  const _className = classNames(styles.btn_container, className);

  return (
    <button className={_className} disabled={disabled} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

Button.defaultProps = defaultProps;

export default Button;
