import React from 'react';

import { TMapContext, TMapProviderProps, TMap } from './Map.types';

// Context

const MapContext = React.createContext<TMapContext | null>(null);

// Provider

export const MapProvider: any = ({
	children,
	googleApiKey,
	defaultZoom = null,
	defaultCenter = null,
}: TMapProviderProps) => {
	return (
		googleApiKey != null && (
			<MapContext.Provider
				value={{
					googleApiKey: googleApiKey,
					defaultZoom: defaultZoom,
					defaultCenter: defaultCenter,
				}}
			>
				{children}
			</MapContext.Provider>
		)
	);
};

// Hook

export const useMap = (): TMap => {
	const mapContext = React.useContext(MapContext);
	return mapContext as TMap;
};
