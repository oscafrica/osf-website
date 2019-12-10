import React from "react";
import classNames from "classnames";

import styles from "./style.module.css";


/**
 * renders a text box following the detailed mock in the style guide
 *
 * @param {Object} props  properties of this component
 */
function TextBox({ onChange, className, id, placeholder, inputType, inputName, ariaLabel, ...props }) {
  const _className = classNames(styles.oc_textbox_container, styles.oc_textbox, className);
  const _inputType = inputType;
  const _inputName = inputName;
  const _ariaLabel = ariaLabel;
  const _id = id;
  const _placeholder = placeholder;

  return (
    <input
      className={_className}
      id={_id}
      placeholder={_placeholder}
      type={_inputType}
      name={_inputName}
      aria-label={_ariaLabel}
      onChange={onChange}
      {...props}
    />
  );
}

/**
 * renders a textarea following the detailed mock in the style guide
 *
 * @param {Object} props  properties of this component
 */
function TextArea({ onChange, className, id, label, rows, cols, placeholder, inputName, ...props }) {
  const _className = classNames(styles.oc_textarea_container, styles.oc_textarea, className);
  const _inputName = inputName;
  const _id = id;
  const _label = label;
  const _rows = rows;
  const _cols = cols;
  const _placeholder = placeholder;

  return (
    <textarea
      className={_className}
      name={_inputName}
      id={_id}
      label={_label}
      rows={_rows}
      cols={_cols}
      placeholder={_placeholder}
      onChange={onChange}
      {...props}
    />
  );
}

TextBox.defaultProps = {
  className: "",
  disabled: false,
  inputType: "text"
};

TextArea.defaultProps = {
  className: "",
  disabled: false,
  rows: "4",
  cols: "20"
};

export { TextBox, TextArea };
