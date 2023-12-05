import type { Meta, StoryObj } from '@storybook/react';

import { Alert as AlertComponent } from './Alert';
import { ThemeProvider } from '../../../providers/theme/Theme';

const Template = (args) => {
	return (
		<>
			<div style={{ display: 'flex', alignItems: 'center' }}>
				<AlertComponent
					description={`I'm a ${args.variant ?? 'success'} alert`}
					{...args}
				/>
			</div>
		</>
	);
};

const meta: Meta<typeof AlertComponent> = {
	title: 'UI/Components/Atoms',
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
			description: 'Defines the color of the alert',
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
