import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Alert as AlertComponent } from './Alert';
import { TAlert } from './Alert.types';
import { ThemeProvider } from '../../providers/theme/Theme';
import { Button } from './../buttons/button/Button';
import { arrayVariants } from '../../utilities/Services';

const Template = (args) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
				alignItems: 'center',
				padding: '2rem',
			}}
		>
			{arrayVariants.map((item) => (
				<AlertComponent
					variant={item}
					description={`I'm a ${item} alert`}
					key={item}
				></AlertComponent>
			))}
		</div>
	);
};

const meta: Meta<typeof AlertComponent> = {
	title: 'Components/Atoms',
	component: AlertComponent,
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
			defaultValue: 'success',
			table: {
				defaultValue: {
					summary: 'success',
				},
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof AlertComponent>;

export const Alert = Template.bind({});
