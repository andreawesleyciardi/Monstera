import React from 'react';

import { TPositions, TVariants } from '../../utilities/Types';
import { TAlertBase } from '../../components/alert/Alert.types';

export type TAlertConfig = TAlertBase & { delay: number };

export type TAlertProvider = {
	children: any;
	position: TPositions;
};

export type TStyledAlertProvider = {
	$position: TPositions;
};

export type TAlertContext = {
	add: (alertConfig: TAlertConfig, variant: TVariants) => void;
	danger: (alertConfig: TAlertConfig) => void;
	dark: (alertConfig: TAlertConfig) => void;
	info: (alertConfig: TAlertConfig) => void;
	light: (alertConfig: TAlertConfig) => void;
	low: (alertConfig: TAlertConfig) => void;
	primary: (alertConfig: TAlertConfig) => void;
	remove: (id: string) => void;
	secondary: (alertConfig: TAlertConfig) => void;
	success: (alertConfig: TAlertConfig) => void;
	warning: (alertConfig: TAlertConfig) => void;
};