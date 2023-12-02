import type { Meta, StoryObj } from '@storybook/react';

import { List as ListComponent } from './List';
import { ThemeProvider } from '../../../providers';

const Template = (args) => {
	return (
		<div style={{ display: 'flex', alignItems: 'center' }}>
			<ListComponent {...args} />
		</div>
	);
};

const meta: Meta<typeof ListComponent> = {
	title: 'Components/Molecules',
	component: ListComponent,
	decorators: [
		(Story) => (
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		),
	],
	argTypes: {
		counter: {
			control: 'number',
			description: 'Defines the counter of the list',
			defaultValue: null,
			table: {
				defaultValue: {
					summary: 'null',
				},
			},
		},
		title: {
			control: 'text',
			description: 'Defines the title of the list',
			defaultValue: 'Title',
			table: {
				defaultValue: {
					summary: 'null',
				},
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof ListComponent>;

export const List = Template.bind({});
List.args = {
	counter: 0,
	title: 'Title',
};
