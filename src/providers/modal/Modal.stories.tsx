import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { ModalProvider, useModal } from './Modal';
import { ThemeProvider } from '../theme/Theme';
import { Button } from '../../components/atoms/buttons/button/Button';

const Template = () => {
	const StoryBody = () => {
		const usemodal = useModal();

		const Content = () => <div>Content Component</div>;

		const onResolve = () => {
			alert('onResolve function');
		};

		const onReject = () => {
			alert('onReject function');
		};

		return (
			<Button
				onClick={(e) => {
					usemodal.open(Content, {}, onResolve, onReject);
				}}
			>
				Open Modal
			</Button>
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
