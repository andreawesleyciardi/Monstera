import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { ModalProvider, useModal } from './Modal';
import { TOpenModalProps } from './Modal.types';
import { ThemeProvider } from '../themeOLD/Theme';
import {
	ContentBody,
	ContentFooter,
	ContentHeader,
} from '../../components/molecules/content/Content';
import { TElement, TElementProps, TVariants } from '../../utilities/Types';
import { arrayVariants } from '../../utilities/Services';
import { Button } from '../../components/atoms/buttons/button/Button';

const Template = () => {
	const StoryBody = () => {
		const usemodal = useModal();

		const ModalContent = (props: TElementProps) => {
			const storyContent = () => {};

			return (
				<>
					<ContentHeader variant={props.variant}>
						<p>{props.title}</p>
					</ContentHeader>
					<ContentBody>
						<p>Body with prop value: {props.bodyContent}</p>
					</ContentBody>
					<ContentFooter>
						<Button
							variant={
								(['default', 'bars'].includes(props.variant)
									? 'primary'
									: props.variant) as TVariants
							}
							fullWidth={false}
							onClick={(e) => {
								usemodal.close(true);
							}}
						>
							Close modal
						</Button>
					</ContentFooter>
				</>
			);
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
					display: 'flex',
					flexDirection: 'column',
					gap: '2rem',
					alignItems: 'flex-start',
					width: '15rem',
					padding: '2rem',
				}}
			>
				{['default', 'bars'].concat(arrayVariants).map((item) => (
					<Button
						variant={
							(['default', 'bars'].includes(item)
								? 'primary'
								: item) as TVariants
						}
						fullWidth={true}
						onClick={(e) => {
							usemodal.open(
								ModalContent,
								{
									title: `${item} modal`,
									bodyContent: 'Main content Modal',
									variant: item,
								} as TOpenModalProps,
								onResolve,
								onReject
							);
						}}
						key={item}
					>
						Open {item} modal
					</Button>
				))}
			</div>
		);
	};

	return (
		<ModalProvider>
			<StoryBody />
		</ModalProvider>
	);
};

const meta: Meta<typeof ModalProvider> = {
	title: 'Providers/Modal',
	component: ModalProvider,
	decorators: [
		(Story) => (
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		),
	],
};

export default meta;

type Story = StoryObj<typeof ModalProvider>;

export const Modal = Template.bind({});
