import React from 'react';
import ButtonHolder from '../src/Components/ButtonHolder/ButtonHolder.jsx'

//import { Button } from '@storybook/react/demo';
import { action } from '@storybook/addon-actions';

export default {
  title: 'ButtonHolder-Calculator',
};

export const buttonHolder = () =>  <ButtonHolder click={() => 0} clickOp={() => 0} />;



