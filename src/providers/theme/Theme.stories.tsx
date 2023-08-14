import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import styled from 'styled-components';

import { IPalette } from '../../utilities/Types';
import { arrayVariants, paletteToVariants } from '../../utilities/Services';
import { defaultBrand, ThemeProvider, useTheme } from './Theme';
import { IBrand, TThemeName } from './Theme.types';
import { Button } from '../../components/buttons/button/Button';

const StyledPanel = styled.div`
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.colors.bodyBackground};
`;

const Template = ({ children, ...args }) => {
	const usetheme = useTheme();
	const [selectedTheme, setSelectedTheme] = useState<TThemeName>(
		usetheme.brandedTheme.name
	);
	// debugger;
	const handleSetBrand = usetheme.setBrand;

	const handleSetTheme = (themeKey: TThemeName) => {
		setSelectedTheme(themeKey);
		usetheme.setTheme(themeKey);
	};

	const gigjoPalette: IPalette = {
		alert: '#9B2757',
		background: '#F5F5F5',
		highlight: '#C38A5F',
		low: '#FFB400',
		main: '#121453',
		medium: '#FF7300',
		secondaryOne: '#7A7A9D',
		secondaryTwo: '#B6B5CB',
		success: '#96D5D0',
		support: '#D8C193',
		tabBarCover: '#121453',
		tabBarCoverTwo: '#FFFFFF',
		widgetsNegTexts: '#FFFFFF',
	};

	const gigjoBrand: IBrand = {
		colors: {
			brand: {
				bars: '#121453',
				interactive: '#C38A5F',
			},
			palette: gigjoPalette,
			variants: paletteToVariants(gigjoPalette),
		},
		logo: 'https://dev-gigjo.oseven.io/branding/gigdrive/web_mobile_logo.png',
		isBranded: true,
	};

	return (
		<StyledPanel
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<div
				style={{
					display: 'flex',
					gap: '2rem',
					alignItems: 'center',
					padding: '2rem',
				}}
			>
				<Button
					variant="dark"
					onClick={(e) => {
						handleSetBrand(defaultBrand);
					}}
				>
					OSeven Brand
				</Button>

				<Button
					variant="dark"
					onClick={(e) => {
						handleSetBrand(gigjoBrand);
					}}
				>
					GigJo Brand
				</Button>
				<Button
					variant="dark"
					onClick={(e) => {
						handleSetTheme(
							selectedTheme === 'light' ? 'dark' : 'light'
						);
					}}
				>
					{selectedTheme === 'light' ? 'Dark' : 'Light'} Theme
				</Button>
			</div>
			<h2 style={{ margin: '0px' }}>Buttons</h2>
			<div
				style={{
					display: 'flex',
					gap: '2rem',
					alignItems: 'center',
					padding: '2rem',
				}}
			>
				{arrayVariants.map((item) => (
					<Button
						variant={item}
						fullWidth={true}
						onClick={(e) => {}}
						key={item}
					>
						{item} variant
					</Button>
				))}
			</div>
		</StyledPanel>
	);
};

const meta: Meta<typeof ThemeProvider> = {
	title: 'Providers/Theme',
	component: ThemeProvider,
	decorators: [
		(Story) => (
			<ThemeProvider>
				<Story />
			</ThemeProvider>
		),
	],
};
export default meta;

type Story = StoryObj<typeof ThemeProvider>;

export const Theme = Template.bind({});
