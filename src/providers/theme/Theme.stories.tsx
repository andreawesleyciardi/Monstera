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

	const Content = () => {
		const theme = useTheme();
		// debugger;
		return (
			<div style={{ backgroundColor: theme.palette.background.paper }}>
				<p>Current mode {theme.palette.mode}</p>
				<Chip
					label="Teeeeest"
					onDelete={(e) => {
						alert('closing');
					}}
					color="primary"
				/>
				<br />
				<img
					src={`${theme?.brand?.logosRootUrl ?? ''}${
						theme?.brand?.logo?.main ?? ''
					}`}
					style={{ maxHeight: '5rem' }}
					alt="logo"
				/>
				{theme?.modeIsToggable === true && (
					<button type="button" onClick={() => theme.toggleMode()}>
						Toggle mode
					</button>
				)}
			</div>
		);
	};

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<h3>Base</h3>
			<ThemeProvider>
				<Content />
			</ThemeProvider>
			<br />
			<br />
			<h3>Branded</h3>
			<ThemeProvider brand={gigjoBrand}>
				<Content />
			</ThemeProvider>
			<br />
			<br />
			<h3>Dark mode</h3>
			<ThemeProvider
				mode="dark"
				darkPalette={{ primary: { main: '#FF0000' } }}
				darkBrand={{ palette: { primary: '#FF00FF' } }}
			>
				<Content />
			</ThemeProvider>
			<br />
			<br />
			<h3>Auto mode</h3>
			<ThemeProvider
				mode="auto"
				darkPalette={{ primary: { main: '#FF0000' } }}
				darkBrand={{ palette: { primary: '#FF0000' } }}
			>
				<Content />
			</ThemeProvider>
		</div>
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
