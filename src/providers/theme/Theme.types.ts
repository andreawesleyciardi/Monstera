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
// export type TPalette = {
// 	palette: { contrastThreshold?: number } & {
// 		[key: string]: TColor;
// 	};
// };

// ----------------------------------------------------------------

export type TBrandColors = {
	primary?: TColorDefinition;
	secondary?: TColorDefinition;
} & {
	[key: string]: TColorDefinition;
};

export type TBrandDefinition = {
	colors?: TBrandColors;
	logo?: string | { [key: string]: string };
	logosRootUrl?: string;
	[key: string]: any;
};

export type TBrand = {
	palette?: TPalette;
	brand?: { [key: string]: string };
};

// ----------------------------------------------------------------

export type TComponentsDefinition = {};

// ----------------------------------------------------------------

export type TThemeProviderProps = {
	children: React.ReactNode;
	brand: TBrandDefinition;
	palette: TPaletteDefinition;
	components: any;
};

export type TMuiCreateThemeProps = {
	brand?: { [key: string]: string | number };
	palette?: TPalette;
	components?: any;
};

export type TTheme = {
	palette?: TPalette;
	components?: any;
	[key: string]: any;
};
