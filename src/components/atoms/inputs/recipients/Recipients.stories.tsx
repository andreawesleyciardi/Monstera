import { useCallback, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Recipients as RecipientsComponent } from './Recipients';
import { ThemeProvider } from '../../../../providers/theme/Theme';

const Template = (args) => {
	const [recipients, setRecipients] = useState(['gabriel@oseven.io']);

	const validation = useCallback((value) => {
		return value == 'test@email.io' ? false : true;
	}, []);

	const onChange = useCallback((value) => {
		setRecipients(value);
	}, []);

	return (
		<>
			{/* <div style={{ display: 'flex', alignItems: 'flex-start' }}> */}
			<RecipientsComponent
				{...args}
				value={recipients}
				onChange={onChange}
				validation={validation}
			/>
			<br />
			<p>
				<em>Insert "test@email.io" for view a non-valid email</em>
			</p>
			<br />
			{JSON.stringify(recipients, null, '\t')}
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
				console.log('Value has changed.');
			},
			table: {
				defaultValue: {
					summary: `console.log('Value has changed.')`,
				},
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof RecipientsComponent>;

export const Recipients = Template.bind({});
