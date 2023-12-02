import { TComponentsDefinition } from '../../../providers';

export const ChipTheme: TComponentsDefinition = {
	Chip: {
		defaultProps: {
			size: 'small',
			variant: 'outlined',
		},
		styleOverrides: {
			root: {
				borderRadius: '5px',
			},
		},
	},
};
