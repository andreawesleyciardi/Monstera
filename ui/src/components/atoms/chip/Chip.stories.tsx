import type { Meta, StoryObj } from '@storybook/react';

import { Chip as ChipComponent } from './Chip';
import { ThemeProvider } from '../../../providers/theme/Theme';

const Template = (args) => {
	console.log(args);
	return <ChipComponent label="Teeeeest" {...args} />;
};

const meta: Meta<typeof ChipComponent> = {
	title: 'UI/Components/Atoms',
	component: ChipComponent,
	decorators: [
		(Story) => (
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		),
	],
	argTypes: {
		label: {
			description: '',
			control: 'text',
			defaultValue: 'Value',
			table: {
				defaultValue: {
					summary: 'Value',
				},
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof ChipComponent>;

export const Chip = Template.bind({});
