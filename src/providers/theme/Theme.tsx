import React, { useContext, useEffect, useState } from 'react';
import {
	createTheme,
	// GlobalStyles as MuiGlobalStyles,
	Theme as MuiTheme,
	ThemeOptions as MuiThemeOptions,
	ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';
import _ from 'lodash';

import {
	TComponentsDefinition,
	TThemeContext,
	TThemeProviderProps,
} from './Theme.types';
import {
	defaultBrand,
	defaultPalette,
	defaultComponents,
} from './Theme.defaults';
import {
	createBrandedTheme,
	createPaletteTheme,
	createComponentsTheme,
} from './Theme.utilities';

// Context

const ThemeContext = React.createContext<TThemeContext | null>(null);

// Provider

export const ThemeProvider: any = ({
	children,
	brand: customBrand = {},
	palette: customPalette = {},
	components: customComponents = {},
	...props
}: TThemeProviderProps) => {
	const [theme, setTheme] = useState<MuiTheme | null>(null);
	// const [brand, setBrand] = useState(null);
	// const [palette, setPalette] = useState(null);
	// const [components, setComponents] = useState(null);

	useEffect(() => {
		const paletteTheme: MuiThemeOptions = createPaletteTheme(
			{ ...customPalette },
			defaultPalette
		);
		let customTheme: MuiTheme = createTheme(paletteTheme);

		const brandedTheme: MuiThemeOptions = createBrandedTheme(
			{ ...customBrand },
			defaultBrand
		);
		customTheme = createTheme(customTheme as MuiThemeOptions, brandedTheme);

		const componentsTheme: MuiThemeOptions = createComponentsTheme(
			{ ...customComponents },
			defaultComponents
		);
		customTheme = createTheme(
			customTheme as MuiThemeOptions,
			componentsTheme
		);

		setTheme(customTheme);
	}, []);

	const handleSetComponents = (components: TComponentsDefinition) => {
		const parsedComponents: MuiThemeOptions =
			createComponentsTheme(components);
		setTheme(createTheme(_.merge({}, theme, parsedComponents)));
	};

	// logo, logosRootUrl, [any]: any --> Create muiTheme custom variables https://mui.com/material-ui/customization/theming/#custom-variables

	return (
		theme != null && (
			<ThemeContext.Provider
				value={{
					setComponents: handleSetComponents,
				}}
			>
				<MuiThemeProvider theme={theme}>
					{/* <GlobalStyles styles={{ h1: { color: 'grey' } }} /> */}
					{children}
				</MuiThemeProvider>
			</ThemeContext.Provider>
		)
	);
};

export const useTheme = () => {
	let themeContext = useContext(ThemeContext);
	return themeContext;
};
