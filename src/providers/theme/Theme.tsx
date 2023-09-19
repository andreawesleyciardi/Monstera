import React, { useContext, useLayoutEffect, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import _ from 'lodash';

import {
	IBrand,
	ITheme,
	TBrandedTheme,
	TBrandPalette,
	TBrandVariants,
	TThemeContext,
	TThemeName,
	TThemeProvider,
} from './Theme.types';
import {
	defaultPalette,
	GlobalStyles,
	themeLight,
	themeDark,
} from './Theme.styles';

// Consts

export const paletteToVariants = (palette: TBrandPalette) => {
	return {
		danger: palette.alert,
		info: palette.support,
		low: palette.low,
		primary: palette.highlight,
		secondary: palette.secondaryTwo,
		success: palette.success,
		warning: palette.medium,
	};
};

export const defaultVariants: TBrandVariants =
	paletteToVariants(defaultPalette);

const themes = {
	light: themeLight,
	dark: themeDark,
};

export const defaultBrand: IBrand = {
	colors: {
		palette: defaultPalette,
		variants: defaultVariants,
	},
	brand: {
		colors: {
			bars: '#242A30',
			interactive: '#46BEDC',
		},
		logo: { main: 'web_mobile_logo.png' },
		logosRootUrl: 'https://dev-o7drivers.oseven.io/branding/oseven/',
		safeMiles: { name: 'SafeMiles' },
	},
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
						brand: brandedTheme.brand,
						colors: brandedTheme.colors,
						components: brandedTheme.components,
						isBranded: brandedTheme.isBranded,
						name: brandedTheme.name,
					}}
				>
					<GlobalStyles />
					{children}
				</StyledThemeProvider>
			)}
		</ThemeContext.Provider>
	);
};

// Hook

export const useTheme = () => {
	let themeContext = useContext(ThemeContext);
	return themeContext;
};
