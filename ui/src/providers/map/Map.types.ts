import { TCoordinates } from './../../utilities';

export type TMapContext = {};

export type TMap = {
	googleApiKey: string;
	defaultZoom?: number | null;
	defaultCenter?: TCoordinates | null;
};

export type TMapProviderProps = {
	children: React.ReactNode;
} & TMap;
