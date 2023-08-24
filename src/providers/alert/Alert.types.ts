import React from 'react';

import { TCssCoords, TPositions, TVariants } from '../../utilities/Types';
import { TAlertBase } from '../../components/atoms/alert/Alert.types';

type TAlertDelay = {
	delay: number;
};

export type TAlertConfig = TAlertBase & TAlertDelay;

export type TAlertProvider = {
	children: any;
	duration?: number;
	offset?: TCssCoords;
	position?: TPositions;
};

export type TStyledAlertProvider = {
	$offset: TCssCoords;
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

export type TAlertConfigured = {
	id: string;
	delay: number;
	alertProps: TAlertBase;
};

export type Alerts = {
	[id: string]: TAlertConfigured;
};

export type AlertsRef = {
	[id: string]: HTMLElement;
};
