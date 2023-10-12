import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { DialogProvider, useDialog } from './Dialog';
import { TOpenDialogProps } from './Dialog.types';
import { ThemeProvider } from '../themeOLD/Theme';
import {
	ContentBody,
	ContentFooter,
	ContentHeader,
} from '../../components/molecules/content/Content';
import { TElement, TElementProps, TVariants } from './../../utilities/Types';
import { arrayVariants } from '../../utilities/Services';
import { Button } from '../../components/atoms/buttons/button/Button';

const Template = () => {
	const StoryBody = () => {
		const usedialog = useDialog();

		const DialogContent = (props: TElementProps) => {
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
								usedialog.close(true);
							}}
						>
							Close dialog
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
							usedialog.open(
								DialogContent,
								{
									title: `${item} dialog`,
									bodyContent: 'Main content Dialog',
									variant: item,
								} as TOpenDialogProps,
								onResolve,
								onReject
							);
						}}
						key={item}
					>
						Open {item} dialog
					</Button>
				))}
			</div>
		);
	};

	return (
		<DialogProvider>
			<StoryBody />
		</DialogProvider>
	);
};

const meta: Meta<typeof DialogProvider> = {
	title: 'Providers/Dialog',
	component: DialogProvider,
	decorators: [
		(Story) => (
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		),
	],
};

export default meta;

type Story = StoryObj<typeof DialogProvider>;

export const Dialog = Template.bind({});
