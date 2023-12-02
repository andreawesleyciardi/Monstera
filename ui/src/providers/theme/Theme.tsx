import React, {
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';
import _ from 'lodash';
import {
	createTheme,
	// GlobalStyles as MuiGlobalStyles,
	Theme as MuiTheme,
	ThemeOptions as MuiThemeOptions,
	ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles';
import { PaletteMode as MuiPaletteMode } from '@mui/material';
import { ThemeContext as MuiThemeContext } from '@mui/styled-engine';
import useMediaQuery from '@mui/material/useMediaQuery';

import {
	TTheme,
	TModeDefinition,
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
	getCustomValue,
} from './Theme.utilities';

// Context

const ThemeContext = React.createContext<TThemeContext | null>(null);

// Provider

export const ThemeProvider: any = ({
	children,
	palette: customPalette = {},
	brand: customBrand = {},
	components: customComponents = {},
	mode: customMode = 'light',
	modeIsToggable = true,
	darkPalette: customDarkPalette = {},
	darkBrand: customDarkBrand = {},
	darkComponents: customDarkComponents = {},
}: TThemeProviderProps) => {
	const getDefaultMode = (mode: TModeDefinition): MuiPaletteMode => {
		if (mode == 'auto') {
			return useMediaQuery('(prefers-color-scheme: dark)')
				? 'dark'
				: 'light';
		}
		return mode;
	};

	const [mode, setMode] = useState<MuiPaletteMode>(
		getDefaultMode(customMode)
	);

	const themeBuilder = (
		mode: MuiPaletteMode,
		modeIsToggable: boolean
	): MuiTheme => {
		const paletteTheme: MuiThemeOptions = createPaletteTheme(
			getCustomValue(
				customPalette,
				customDarkPalette,
				mode,
				modeIsToggable
			),
			defaultPalette,
			mode
		);
		let customTheme: MuiTheme = createTheme(paletteTheme);

		const brandedTheme: MuiThemeOptions = createBrandedTheme(
			getCustomValue(customBrand, customDarkBrand, mode, modeIsToggable),
			defaultBrand
		);
		customTheme = createTheme(customTheme as MuiThemeOptions, brandedTheme);

		const componentsTheme: MuiThemeOptions = createComponentsTheme(
			getCustomValue(
				customComponents,
				customDarkComponents,
				mode,
				modeIsToggable
			),
			defaultComponents
		);
		customTheme = createTheme(
			customTheme as MuiThemeOptions,
			componentsTheme
		);

		return customTheme;
	};

	const theme = useMemo(() => themeBuilder(mode, modeIsToggable), [mode]);

	// logo, logosRootUrl, [any]: any --> Create muiTheme custom variables https://mui.com/material-ui/customization/theming/#custom-variables

	const toggleMode = useCallback(
		() => setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light')),
		[]
	);

	const contextValue = _.merge(
		{},
		{ mode: mode, modeIsToggable: modeIsToggable },
		modeIsToggable
			? {
					toggleMode: toggleMode,
			  }
			: {}
	);

	return (
		theme != null && (
			<ThemeContext.Provider value={contextValue}>
				<MuiThemeProvider theme={theme}>
					{/* <GlobalStyles styles={{ h1: { color: 'grey' } }} /> */}
					{children}
				</MuiThemeProvider>
			</ThemeContext.Provider>
		)
	);
};

export const useTheme = (): TTheme => {
	const themeContext = useContext(ThemeContext);
	const muiThemeContext = useContext(MuiThemeContext);
	return _.merge({}, themeContext, muiThemeContext) as TTheme;
};
