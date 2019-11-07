import React from 'react';
import Display from '../src/Components/Display/Display.jsx'

//import { Button } from '@storybook/react/demo';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Calculator-Display',
};

export const emptyDisplay = () =>  <Display text={""} />;

export const writtenDisplay = () =>  <Display text={"Hola"} />;


