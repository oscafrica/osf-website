import React from 'react';
import  RadioButton from '.';


export default {
  title: 'RadioButton',
  component: 'RadioButton'
};


const onChange = () => console.log('Value has changed');


   export const radioButton = () =>  <RadioButton  />

  export const radioButtonChecked = () => <RadioButton defaultChecked onChange={onChange} className='form-radio h-4 w-4'></RadioButton>
  
  export const disabledRadioButton = () =>  <RadioButton disabled></RadioButton>
  
  export const disabledCheckedRadioButton = () => <RadioButton disabled defaultChecked></RadioButton>
  
  