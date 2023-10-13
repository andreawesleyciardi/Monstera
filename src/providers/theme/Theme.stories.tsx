import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import styled from 'styled-components';

import { ThemeProvider, useTheme } from './Theme';
import {} from './Theme.defaults';
import { TPaletteDefinition, TBrandDefinition } from './Theme.types';

// import { arrayVariants } from '../../utilities/Services';
// import { Alert } from '../../components/atoms/alert/Alert';
// import { Button } from '../../components/atoms/buttons/button/Button';
// import { TVariants } from '../../utilities/Types';

import { Chip, Button } from '../../components';

const StyledPanel = styled.div`
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.bodyBackground};
`;

const Template = (args) => {
	const gigjoPalette: TPaletteDefinition = {
		primary: '#C38A5F',
		secondary: '#7A7A9D',
		error: '#9B2757',
		warning: '#FF7300',
		info: '#D8C193',
		success: '#96D5D0',

		alert: '#9B2757',
		background: '#F5F5F5',
		highlight: '#C38A5F',
		low: '#FFB400',
		main: '#121453',
		medium: '#FF7300',
		secondaryOne: '#7A7A9D',
		secondaryTwo: '#B6B5CB',
		// success: '#96D5D0',
		support: '#D8C193',
		tabBarCover: '#121453',
		tabBarCoverTwo: '#FFFFFF',
		widgetsNegTexts: '#FFFFFF',
	};

	const gigjoBrand: TBrandDefinition = {
		palette: {
			tabBarCover: '#121453',
			primary: '#C38A5F',
		},
		isBranded: true,
		logo: { main: 'web_mobile_logo.png' },
		logosRootUrl: 'https://dev-gigjo.oseven.io/branding/gigdrive/',
		safeMiles: { name: null },
	};

	return (
		<>
			<ThemeProvider>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Chip
						label="Teeeeest"
						onDelete={(e) => {
							alert('closing');
						}}
						color="primary"
					/>
				</div>
			</ThemeProvider>
			<br />
			<br />
			<ThemeProvider brand={gigjoBrand}>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Chip
						label="Teeeeest"
						onDelete={(e) => {
							alert('closing');
						}}
						color="primary"
					/>
				</div>
			</ThemeProvider>
		</>
	);
};

const meta: Meta<typeof ThemeProvider> = {
	title: 'Providers/Theme',
	component: ThemeProvider,
	// decorators: [
	// 	(Story) => (
	// 		<ThemeProvider>
	// 			<Story />
	// 		</ThemeProvider>
	// 	),
	// ],
};
export default meta;

type Story = StoryObj<typeof ThemeProvider>;

export const Theme = Template.bind({});
