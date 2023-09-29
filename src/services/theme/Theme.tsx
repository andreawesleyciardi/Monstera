import React from 'react';
import _ from 'lodash';
import {
	ThemeProvider as MuiThemeProvider,
	createTheme,
} from '@mui/material/styles';

export type TMuiTheme = {
	defaultProps?: {
		[key: string]: string;
	};
	styleOverrides?: {
		[key: string]: {
			[key: string]: string;
		};
	};
};

type TComponentCustomizer = {
	name?: string;
	default?: TMuiTheme;
	custom?: TMuiTheme;
};

const componentCustomizer = (props: TComponentCustomizer) => {
	if (props.name == null) {
		return {};
	}
	return createTheme({
		components: {
			[props.name]: _.merge(
				{},
				props?.default ?? {},
				props?.custom ?? {}
			),
		},
	});
};

export const ComponentProvider = ({
	children,
	...props
}: TComponentCustomizer & { children: any }) => {
	return (
		<>
			{props.name != null ? (
				<MuiThemeProvider theme={componentCustomizer(props)}>
					{children}
				</MuiThemeProvider>
			) : (
				{ children }
			)}
		</>
	);
};
