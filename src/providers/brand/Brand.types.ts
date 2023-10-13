export type TBrandPalette = {
	alert: string;
	background: string;
	highlight: string;
	low: string;
	main: string;
	medium: string;
	secondaryOne: string;
	secondaryTwo: string;
	success: string;
	support: string;
	tabBarCover: string;
	tabBarCoverTwo: string;
	widgetsNegTexts: string;
};

export type TBrandContext = {
	isBranded: boolean;
	key: string;
	name: string;
	logo: string;
	palette: {
		[key: string]: string;
	};
};
