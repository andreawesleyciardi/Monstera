import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import _ from 'lodash';

import { IPalette } from '../../utilities/Types';
import { paletteToVariants } from '../../utilities/Services';
import {
	IBrand,
	ITheme,
	IVariants,
	TBrandedTheme,
	TThemeContext,
	TThemeName,
	TThemeProvider,
} from './Theme.types';
import { defaultPalette, themeLight, themeDark } from './Theme.styles';

// Consts

export const defaultVariants: IVariants = paletteToVariants(defaultPalette);

const themes = {
	light: themeLight,
	dark: themeDark,
};

export const defaultBrand: IBrand = {
	colors: {
		brand: {
			bars: '#242A30',
			interactive: '#46BEDC',
		},
		palette: defaultPalette,
		variants: defaultVariants,
	},
	logo: 'https://dev-o7drivers.oseven.io/branding/oseven/web_mobile_logo.png',
	isBranded: false,
};

export const defaultTheme: ITheme = themes['light'];

// Provider

const ThemeContext = React.createContext<TThemeContext | null>(null);

export const ThemeProvider: any = (props: TThemeProvider) => {
	let { children, customBrand = {} } = props;
	const [brand, setBrand] = useState<IBrand>(
		_.merge({}, defaultBrand, customBrand)
	);
	const [theme, setTheme] = useState<ITheme>(defaultTheme);
	const [brandedTheme, setBrandedTheme] = useState<TBrandedTheme | null>(
		_.merge({}, defaultBrand, customBrand, themeLight)
	);

	const handleSetBrand = (selectedBrand: IBrand) => {
		setBrand(
			_.merge({}, selectedBrand, {
				colors: {
					variants: paletteToVariants(selectedBrand.colors.palette),
				},
			})
		);
		localStorage.setItem('current-brand', JSON.stringify(selectedBrand));
	};

	const handleSetTheme = (themeKey: TThemeName) => {
		const selectedTheme: ITheme = _.merge({}, themes[themeKey]);
		setTheme(selectedTheme);
		localStorage.setItem('current-theme', JSON.stringify(selectedTheme));
	};

	// TO CHECK IF KEEP useLayoutEffect or useEffect
	useLayoutEffect(() => {
		// const currentBrand = JSON.parse(localStorage.getItem('current-brand'));
		// if (currentBrand) {
		// 	setBrand(currentBrand);
		// }
		// const currentTheme = JSON.parse(localStorage.getItem('current-theme'));
		// if (currentTheme) {
		// 	setTheme(currentTheme);
		// }
	}, []);

	useLayoutEffect(() => {
		setBrandedTheme(_.merge({}, brand, theme));
	}, [brand, theme]);

	return (
		<ThemeContext.Provider
			value={{
				setBrand: handleSetBrand,
				setTheme: handleSetTheme,
				brandedTheme: brandedTheme,
			}}
		>
			{brandedTheme && (
				<StyledThemeProvider
					theme={{
						name: brandedTheme.name,
						colors: brandedTheme.colors,
					}}
				>
					{children}
				</StyledThemeProvider>
			)}
		</ThemeContext.Provider>
	);
};

export const useTheme = () => {
	let themeContext = useContext(ThemeContext);
	return themeContext;
};
