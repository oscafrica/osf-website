import React from 'react';;
import { RadioButton, radioTypes } from '.';

export default { title: 'RadioButton' };

const onChange = () => console.log('Value has changed');


export const Radio = () => (
    <RadioButton
    className={'Class Name', 'custom-class'}
    label={'Label', 'Yes'}
    value={'Value', 'yes'}
    onChange={onchange}
    name="oc-radio-group"
/>
  );
