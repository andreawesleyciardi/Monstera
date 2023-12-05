import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

import { Map as MapComponent } from './Map';

import { ThemeProvider } from './../../../providers';

const Template = (args) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				width: '400px',
				height: '400px',
			}}
		>
			<h3>Map</h3>
			<MapComponent googleApiKey=""></MapComponent>
		</div>
	);
};

const meta: Meta<typeof MapComponent> = {
	title: 'UI/Components/Molecules',
	component: MapComponent,
	decorators: [
		(Story) => (
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		),
	],
};
export default meta;

type Story = StoryObj<typeof MapComponent>;

export const MapX = Template.bind({});
