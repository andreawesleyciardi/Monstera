import { useCallback, useEffect, useRef, useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Recipients as RecipientsComponent } from './Recipients';
import { Form } from './../../../..';
import { ThemeProvider } from '../../../../../../ui/src';

const Template = (args) => {
	return (
		<Form
			content={(props) => {
				let { control, register } = props;

				return (
					<RecipientsComponent
						name="emails"
						autoFocus
						maxItems={5}
						control={control}
						{...register('emails', {
							required: true,
						})}
					/>
				);
			}}
		/>
	);
};

const meta: Meta<typeof RecipientsComponent> = {
	title: 'UX/Components/Atoms/Inputs',
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
