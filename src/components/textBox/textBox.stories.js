import React from 'react';
import { TextBox, TextArea, inputTypes } from '.';

export default { title: 'TextBox' };

const onChange = () => console.log('Value has changed');

export const defaultTextBox = () => <TextBox onChange={onChange} name="testArea" placeholder='Placeholder' />

export const textBoxDisabled = () => <TextBox onChange={onChange} className='w-full' placeholder='Placeholder' disabled />

export const defaultTextArea = () => <TextArea onChange={onChange} placeholder='Placeholder' />

export const textAreaDisabled = () => <TextArea onChange={onChange} className='w-full' placeholder='Placeholder' disabled />

export const textBoxEmail = () => <TextBox onChange={onChange} type={inputTypes.email} className='w-full' placeholder='Placeholder' />

export const textBoxPassword = () => <TextBox onChange={onChange} type={inputTypes.password} className='w-full' placeholder='Placeholder' />

export const textBoxNumber = () => <TextBox onChange={onChange} type={inputTypes.number} className='w-full' placeholder='Placeholder' />