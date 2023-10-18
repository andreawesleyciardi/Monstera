import { WithGoogleMapProps } from 'react-google-maps';

import { TCoordinates } from './../../../utilities';

type TMapBase = {
	children?: any;
	defaultZoom?: number;
	defaultCenter?: TCoordinates;
};

export type TWithGoogleMap = WithGoogleMapProps & TMapBase;

export type TMap = {
	width?: string;
	height?: string;
	googleApiKey?: string | null;
} & TMapBase;
