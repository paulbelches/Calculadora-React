import React from 'react';
import Button from '../src/Components/Button/Button.jsx'
import {storiesOf} from  '@storybook/react'

import { withKnobs, text } from '@storybook/addon-knobs';

const stories = storiesOf('Buttons-Calculator', module);
 
// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);
 
// Knobs for React props
stories.add('Changing label button', () => (
  <Button id="bCE" text={text('label','1' )} color='#fafafa' click={() => 0} />
), {notes: 'Button story using knobs and notes '});

//export const singleButton = () => <Button id="bCE" text="CE" color={color('Color','#fafafa' )} click={() => 0} />


