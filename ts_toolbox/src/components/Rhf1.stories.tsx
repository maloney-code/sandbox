import React from 'react';

import { Story, Meta } from '@storybook/react';

import { FormProps, Rhf1 } from '../components/Rhf1';

export default {
  title: 'React Hook Forms/Form 1',
  component: Rhf1,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<FormProps> = (args) => <Rhf1 {...args} />;

export const Primary = Template.bind({});
Primary.args = {

};

export const Secondary = Template.bind({});
Secondary.args = {

};

export const Large = Template.bind({});
Large.args = {

};

export const Small = Template.bind({});
Small.args = {

};
