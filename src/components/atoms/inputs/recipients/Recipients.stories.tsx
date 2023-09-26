import type { Meta, StoryObj } from '@storybook/react';

import { Recipients as RecipientsComponent } from './Recipients';
import { ThemeProvider } from '../../../../providers/theme/Theme';

const Template = (args) => {
	return (
		<>
			{/* <div style={{ display: 'flex', alignItems: 'flex-start' }}> */}
			<RecipientsComponent
				{...args}
				// value={['test1', 'test2', 'test3']}
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
};

export default meta;

type Story = StoryObj<typeof RecipientsComponent>;

export const Recipients = Template.bind({});
