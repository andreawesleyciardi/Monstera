import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { AlertProvider, useAlert } from './Alert';
import { TAlert } from './Alert.types';
import { ThemeProvider } from '../theme/Theme';
import { Button } from './../../components/buttons/button/Button';
import { arrayVariants } from '../../utilities/Services';

const Template = (args) => {
	const usealert = useAlert();
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '2rem',
				alignItems: 'flex-start',
				width: '15rem',
				padding: '2rem',
			}}
		>
			{arrayVariants.map((item) => (
				<Button
					variant={item}
					fullWidth={true}
					onClick={(e) => {
						usealert[item](`I'm a ${item} alert`);
					}}
					key={item}
				>
					{item} variant
				</Button>
			))}
		</div>
	);
};

const meta: Meta<typeof AlertProvider> = {
	title: 'Providers/Alert',
	component: AlertProvider,
	decorators: [
		(Story) => (
			<ThemeProvider>
				<AlertProvider>
					<Story />
				</AlertProvider>
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

type Story = StoryObj<typeof AlertProvider>;

export const Alert = Template.bind({});
