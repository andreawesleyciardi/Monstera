import { TComponentsDefinition } from '../../../../providers';

export const InputTheme: TComponentsDefinition = {
	MuiTextField: {
		defaultProps: {
			variant: 'standard',
		},
	},
	MuiInput: {
		defaultProps: {
			disableUnderline: true,
		},
		styleOverrides: {
			root: ({ theme }) => ({
				borderBottomColor: theme.palette.borders.main,
				borderBottomWidth: '1px',
				borderBottomStyle: 'solid',
			}),
		},
	},
};
