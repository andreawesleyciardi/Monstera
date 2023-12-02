import { Theme as MuiTheme } from '@mui/material/styles';
import { PaletteMode as MuiPaletteMode } from '@mui/material';

export type TThemeContext = {};

export type TColorsVariables = {
	primary?: TColorDefinition;
	secondary?: TColorDefinition;
	error?: TColorDefinition;
	warning?: TColorDefinition;
	info?: TColorDefinition;
	success?: TColorDefinition;
} & {
	[key: string]: TColorDefinition;
};

export type TColor = {
	main: string;
	light?: string;
	dark?: string;
	contrastText?: string;
};

export type TColorDefinition = string | TColor | undefined;

// ----------------------------------------------------------------

export type TPaletteDefinition = { contrastThreshold?: number } & {
	[key: string]: TColorDefinition;
};

export type TPalette = { contrastThreshold?: number } & {
	[key: string]: TColor;
};

// ----------------------------------------------------------------

export type TBrandPalette = {
	primary?: TColorDefinition;
	secondary?: TColorDefinition;
} & {
	[key: string]: TColorDefinition;
};

export type TBrandParams = {
	logo?: string | { [key: string]: string };
	logosRootUrl?: string;
	[key: string]: any;
};

export type TBrandDefinition = {
	palette?: TBrandPalette;
} & TBrandParams;

export type TBrand = {
	palette?: TPalette;
	brand?: TBrandParams;
};

// ----------------------------------------------------------------

export type TComponents = {
	[key: string]: {
		defaultProps: {
			[key: string]: string | boolean;
		};
		styleOverrides: {
			[key: string]: (props: any) => void | {
				[key: string]: string;
			};
		};
	};
};

export type TComponentsDefinition = {
	[key: string]: {
		defaultProps?: {
			[key: string]: string | boolean;
		};
		styleOverrides?: {
			[key: string]:
				| {
						[key: string]:
							| { [key: string]: string | boolean }
							| string
							| boolean;
				  }
				| ((props: any) => void);
		};
	};
};

// ----------------------------------------------------------------

export type TModeDefinition = MuiPaletteMode | 'auto';

// ----------------------------------------------------------------

export type TThemeProviderProps = {
	children: React.ReactNode;
	palette?: TPaletteDefinition;
	brand?: TBrandDefinition;
	components?: TComponentsDefinition;
	mode?: TModeDefinition;
	modeIsToggable?: boolean;
	darkPalette?: TPaletteDefinition;
	darkBrand?: TBrandDefinition;
	darkComponents?: TComponentsDefinition;
};

export type TTheme = MuiTheme & {
	mode?: MuiPaletteMode;
	modeIsToggable?: boolean;
	brand?: TBrandParams;
	toggleMode?: () => void;
};

// export type TMuiCreateThemeProps = {
// 	brand?: { [key: string]: string | number };
// 	palette?: TPalette;
// 	components?: any;
// };

// export type TTheme = {
// 	palette?: TPalette;
// 	components?: any;
// 	[key: string]: any;
// };
