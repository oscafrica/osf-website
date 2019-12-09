import React from 'react';
import classNames from 'classnames';

import styles from './style.module.css';


/**
 * renders an anchor tag following the detailed mock in the style guide
 *
 * @param {Object} props  properties of this component
 */
function TextLink({ onClick, children, type, key, href, className, id, target, rel, ...props }) {
    const textVariation = styles[type];
    const _className = classNames(styles.oc_link_container, textVariation, className);

    return (
        <a
        key={key}
        href={href}
        className={_className}
        id={id}
        target={target}
        rel={rel}
        onClick={onClick}
        {...props}
        >
        {children}
      </a>
    );
};

TextLink.defaultProps = {
    className: '',
    type: 'oc_link_default'
};

// freezing the object to ensure it's immutable :)
export const linkTypes = Object.freeze({
    oc_link_default: 'oc_link_default',
    oc_link_white: 'oc_link_white',
    oc_link_dark: 'oc_link_dark'
  });

export default TextLink;
