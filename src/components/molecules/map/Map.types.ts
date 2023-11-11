import React from 'react';
import { WithGoogleMapProps, GoogleMapProps } from 'react-google-maps';

import { TCoordinates } from './../../../utilities';

type TMapBase = {
	children?: React.ReactNode | undefined;
	defaultZoom?: number | undefined;
	defaultCenter?: TCoordinates;
};

// export type TWithGoogleMap = WithGoogleMapProps & TMapBase;
export type TWithGoogleMap = GoogleMapProps & TMapBase;

export type TMap = {
	width?: string;
	height?: string;
	googleApiKey?: string | null;
} & TMapBase;
