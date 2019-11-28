import React from 'react';
import Button from '.';

export default { title: 'Button' };

const onClick = () => console.log('Button clicked!');

export const withText = () => <Button onClick={onClick}>Bolaji</Button>;

export const withEmoji = () => (
  <Button onClick={onClick}><span role="img" aria-label="so cool" style={{fontSize: '20px'}}>😀 😎 👍 💯</span></Button>
);

export const disabledWithEmoji = () => (
  <Button onClick={onClick} disabled>
    <span role="img" aria-label="so cool" style={{fontSize: '20px'}}>
      😀 😎 👍 💯
    </span>
  </Button>
);
