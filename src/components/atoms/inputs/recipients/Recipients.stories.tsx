import type { Meta, StoryObj } from '@storybook/react';

import { Recipients as RecipientsComponent } from './Recipients';
import { ThemeProvider } from '../../../../providers/theme/Theme';

const Template = (args) => {
	return (
		<>
			{/* <div style={{ display: 'flex', alignItems: 'flex-start' }}> */}
			<RecipientsComponent
				{...args}
				onChange={() => console.log('Value as changed.')}
			/>
			{/* </div> */}
		</>
	);
};

const meta: Meta<typeof RecipientsComponent> = {
	title: 'Components/Atoms/Inputs',
	component: RecipientsComponent,
	decorators: [
		(Story) => (
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		),
	],
	argTypes: {
		onChange: {
			description: '',
			defaultValue: () => {
				console.log('Value as changed.');
			},
			table: {
				defaultValue: {
					summary: `console.log('Value as changed.')`,
				},
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof RecipientsComponent>;

export const Recipients = Template.bind({});
