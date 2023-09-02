import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { ModalProvider, useModal } from './Modal';
import { TOpenModalProps } from './Modal.types';
import { ThemeProvider } from '../theme/Theme';
import {
	TContentChildren,
	TContentChildrenProps,
} from '../../components/molecules/content/Content.types';
import { Button } from '../../components/atoms/buttons/button/Button';

const Template = () => {
	const StoryBody = () => {
		const usemodal = useModal();

		const test = (props: TContentChildrenProps) => {
			return <div>Content Component {props.test}</div>;
		};

		const onResolve = () => {
			alert('onResolve function');
		};

		const onReject = () => {
			alert('onReject function');
		};

		return (
			<Button
				onClick={(e) => {
					usemodal.open(
						test,
						{ test: 'xxx' } as TOpenModalProps,
						onResolve,
						onReject
					);
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
