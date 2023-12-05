import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ThemeProvider } from '../../../providers/theme/Theme';

import { Badge as BadgeComponent } from './Badge';
import { TBadge } from './Badge.types';

const Template = (args: TBadge) => {
	return <BadgeComponent {...args} />;
};

const meta: Meta<typeof BadgeComponent> = {
	title: 'UI/Components/Atoms',
	component: BadgeComponent,
	decorators: [
		(Story) => (
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		),
	],
	argTypes: {
		value: {
			control: 'text',
			description: 'Enter here the number or string to show in the Badge',
			defaultValue: 'Value',
			table: {
				defaultValue: {
					summary: 'null',
				},
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof BadgeComponent>;

export const Badge = Template.bind({});
