import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

import { MapProvider } from './Map';
import { Map as MapComponent } from './../../components';

import { ThemeProvider } from './../../providers';

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
			<h3>Map Provider</h3>
			<MapProvider googleApiKey="" defaultZoom={2}>
				<MapComponent />
			</MapProvider>
		</div>
	);
};

const meta: Meta<typeof MapProvider> = {
	title: 'Providers',
	component: MapProvider,
	decorators: [
		(Story) => (
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		),
	],
};
export default meta;

type Story = StoryObj<typeof MapProvider>;

export const MapX = Template.bind({});
