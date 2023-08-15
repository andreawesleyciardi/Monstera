import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ThemeProvider } from '../../providers/theme/Theme';

import { Button as ButtonComponent } from './button/Button';
import { IButton } from './button/Button.types';

const Template = ({ children, ...args }) => {
	return (
		<ButtonComponent
			{...args}
			onClick={(e) => {
				alert('Button clicked');
			}}
		>
			{children}
		</ButtonComponent>
	);
};

const meta: Meta<typeof ButtonComponent> = {
	title: 'Components/Atoms',
	component: ButtonComponent,
	decorators: [
		(Story) => (
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		),
	],
	argTypes: {
		variant: {
			description: 'Enter here the description',
			defaultValue: 'primary',
			table: {
				defaultValue: {
					summary: 'primary',
				},
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof ButtonComponent>;

export const Button = Template.bind({});
Button.args = {
	children: 'Button',
};
