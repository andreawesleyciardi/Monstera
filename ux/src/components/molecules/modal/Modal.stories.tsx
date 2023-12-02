import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Modal as ModalComponent, useModal } from './Modal';
import { DialogProvider } from '../../../providers';

import { ThemeProvider, TOpenDialogProps } from '../../../providers';
import { TElement, TElementProps, TVariants } from '../../../utilities';
import { arrayVariants } from '../../../utilities';
import { Button } from '../..';

const Template = (args) => {
	const usemodal = useModal();

	const ModalContent = (props) => {
		return <p>Modal Content</p>;
	};

	const onResolve = () => {
		alert('onResolve function');
	};

	const onReject = () => {
		alert('onReject function');
	};

	return (
		<div
			style={{
				width: '15rem',
			}}
		>
			<Button
				variant={args.variant}
				fullWidth={true}
				onClick={(e) => {
					usemodal.open(
						ModalContent,
						{
							title: `${args.variant} modal`,
							bodyContent: 'Main content Modal',
							variant: args.variant,
						} as TOpenDialogProps,
						onResolve,
						onReject
					);
				}}
			>
				Open {args.variant} modal
			</Button>
		</div>
		// <div
		// 	style={{
		// 		display: 'flex',
		// 		flexDirection: 'column',
		// 		gap: '2rem',
		// 		alignItems: 'flex-start',
		// 		width: '15rem',
		// 		padding: '2rem',
		// 	}}
		// >

		// 	{['default', 'bars'].concat(arrayVariants).map((item) => (
		// 		<Button
		// 			variant={
		// 				(['default', 'bars'].includes(item)
		// 					? 'primary'
		// 					: item) as TVariants
		// 			}
		// 			fullWidth={true}
		// 			onClick={(e) => {
		// 				usemodal.open(
		// 					ModalContent,
		// 					{
		// 						title: `${item} modal`,
		// 						bodyContent: 'Main content Modal',
		// 						variant: item,
		// 					} as TOpenDialogProps,
		// 					onResolve,
		// 					onReject
		// 				);
		// 			}}
		// 			key={item}
		// 		>
		// 			Open {item} modal
		// 		</Button>
		// 	))}
		// </div>
	);
};

const meta: Meta<typeof ModalComponent> = {
	title: 'Components/Molecules',
	component: ModalComponent,
	decorators: [
		(Story) => (
			<ThemeProvider>
				<DialogProvider>
					<Story />
				</DialogProvider>
			</ThemeProvider>
		),
	],
	argTypes: {
		variant: {
			description: 'Enter here the description',
			defaultValue: 'bars',
			table: {
				defaultValue: {
					summary: 'bars',
				},
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof ModalComponent>;

export const Modal = Template.bind({});
