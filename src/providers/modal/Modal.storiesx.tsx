import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { ModalProvider, useModal } from './Modal';
import { ThemeProvider } from '../theme/Theme';
import { Button } from '../../components/atoms/buttons/button/Button';
import { arrayVariants } from '../../utilities/Services';
import { EPositions, TVariants } from '../../utilities/Types';

const Template = (args) => {
	const StoryBody = () => {
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
						variant={item as TVariants}
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
	return (
		<AlertProvider
			position={args.position}
			duration={args.duration}
			offset={args.offset}
		>
			<StoryBody />
		</AlertProvider>
	);
};

const meta: Meta<typeof AlertProvider> = {
	title: 'Providers/Alert',
	component: AlertProvider,
	decorators: [
		(Story) => (
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		),
	],
	argTypes: {
		duration: {
			description:
				'Defines for how many milliseconds each alerts will be visible before to fadeout automatically.',
			control: { type: 'number' },
			defaultValue: 3000,
			table: {
				defaultValue: {
					summary: 3000,
				},
			},
		},
		offset: {
			description:
				'Defines for how many milliseconds each alerts will be visible before to fadeout automatically.',
			control: { type: 'object' },
			defaultValue: { x: '2rem', y: '2rem' },
			table: {
				defaultValue: {
					summary: `{ x: '0px', y: '0px' }`,
				},
			},
		},
		position: {
			description:
				'Defines in which area of the screen the alerts will be appearing.',

			control: { type: 'select' },
			options: Object.keys(EPositions).map((key) => key),
			defaultValue: 'top-right',
			table: {
				defaultValue: {
					summary: 'top-right',
				},
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof AlertProvider>;

export const Alert = Template.bind({});
