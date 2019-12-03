import React from 'react';;
import  RadioButton from '.';
import styles from './style.module.css';

export default {
  title: 'RadioButton',
  component: 'RadioButton'
};
const onChange = () => console.log('Value has changed');

export const Radiobutton = () => 
  <RadioButton
  className={('Class Name', 'custom-class')}
  onChange={('change')}
  onBlur={('blur')}
  name="my-radio-group"

/>
  
  export const RadioButtonChecked = () => <RadioButton defaultChecked onChange={onChange}></RadioButton>
  
  export const DisabledRadioButton = () =>  <RadioButton disabled  onChange={onChange} ></RadioButton>
  
  export const DisabledCheckedRadioButton = () => <RadioButton disabled defaultChecked  onChange={onChange}></RadioButton>
  
  