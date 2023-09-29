import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import _ from 'lodash';

import {
	IBrand,
	ITheme,
	TBrandedTheme,
	TComponents,
	TMonsteraComponents,
	TMuiComponents,
	TStyledThemeProvider,
	TThemeContext,
	TThemeName,
	TThemeProvider,
} from './Theme.types';
import {
	defaultBrand,
	defaultComponents,
	paletteToVariants,
	themeDark,
	themeLight,
} from './Theme.defaults';
import { GlobalStyles } from './Theme.styles';

// Consts

const defaultThemeKey = 'light';

const defaultThemes = {
	light: themeLight,
	dark: themeDark,
};

const defaultTheme: ITheme = defaultThemes[defaultThemeKey];

// Provider

const ThemeContext = React.createContext<TThemeContext | null>(null);

export const ThemeProvider: any = ({ children, ...props }: TThemeProvider) => {
	const [brand, setBrand] = useState<IBrand>(
		_.merge({}, defaultBrand, props.customBrand)
	);
	const [theme, setTheme] = useState<ITheme>(defaultTheme);

	const [brandedTheme, setBrandedTheme] = useState<TBrandedTheme | null>(
		_.merge({}, defaultBrand, props.customBrand, defaultTheme)
	);

	const [components, setComponents] = useState<TComponents>(
		_.merge({}, defaultComponents, props.customComponents)
	);

	const [monsteraComponents, setMonsteraComponents] =
		useState<TMonsteraComponents>({});
	const [muiComponents, setMuiComponents] = useState<TMuiComponents>({});

	const parseComponents = (components: TComponents) => {
		let monstera: TMonsteraComponents = {};
		let mui: TMuiComponents = {};

		Object.keys(components).forEach((key: string, index: number, array) => {
			if ('|body|content|widget|'.indexOf(`|${key}|`) > -1) {
				monstera[key] = components[key] as TMonsteraComponents;
			} else {
				mui[key] = components[key] as TMuiComponents;
			}
		});

		return {
			monstera: monstera,
			mui: mui,
		};
	};

	useEffect(() => {
		if (components != null) {
			let { monstera, mui } = parseComponents(components);
			if (Object.keys(monstera).length > 0) {
				setMonsteraComponents(
					_.merge({}, monsteraComponents, monstera)
				);
			}
			if (Object.keys(mui).length > 0) {
				setMuiComponents(_.merge({}, muiComponents, mui));
			}
		}
	}, [components]);

	useLayoutEffect(() => {
		setBrandedTheme(_.merge({}, brand, theme));
	}, [brand, theme]);

	// TO CHECK IF KEEP useLayoutEffect or useEffect
	// useLayoutEffect(() => {
	// const currentBrand = JSON.parse(localStorage.getItem('current-brand'));
	// if (currentBrand) {
	// 	setBrand(currentBrand);
	// }
	// const currentTheme = JSON.parse(localStorage.getItem('current-theme'));
	// if (currentTheme) {
	// 	setTheme(currentTheme);
	// }
	// }, []);

	// Handlerer

	const handleSetTheme = (themeKey: TThemeName) => {
		const selectedTheme: ITheme = _.merge({}, defaultThemes[themeKey]);
		setTheme(selectedTheme);
		localStorage.setItem('current-theme', JSON.stringify(selectedTheme));
	};

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

	const handleSetComponents = (components: TComponents) => {
		if (components != null) {
			setComponents(components);
		}
	};

	return (
		<ThemeContext.Provider
			value={{
				setBrand: handleSetBrand,
				setTheme: handleSetTheme,
				setComponents: handleSetComponents,
				brandedTheme: brandedTheme,
			}}
		>
			{brandedTheme && (
				<StyledThemeProvider
					theme={
						{
							brand: brandedTheme.brand,
							colors: brandedTheme.colors,
							components: monsteraComponents,
							isBranded: brandedTheme.isBranded,
							name: brandedTheme.name,
						} as TStyledThemeProvider
					}
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
