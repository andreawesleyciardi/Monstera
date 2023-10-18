import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';

import { TMap, TWithGoogleMap } from './Map.types';
import { useMap } from './../../../providers';

const BaseMap = withScriptjs(
	withGoogleMap(
		({ defaultZoom, defaultCenter, children }: TWithGoogleMap) => {
			const provider = useMap();
			return (
				<GoogleMap
					defaultZoom={defaultZoom ?? provider?.defaultZoom ?? 4}
					defaultCenter={
						defaultCenter ??
						provider?.defaultCenter ?? { lat: 0, lng: 0 }
					}
				>
					{children != null && children}
				</GoogleMap>
			);
		}
	)
);

export const Map = ({
	width = '100%',
	height = '100%',
	googleApiKey: customGoogleApiKey = null,
	...props
}: TMap) => {
	const provider = useMap();

	return (
		<BaseMap
			{...props}
			googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
				customGoogleApiKey ?? provider?.googleApiKey
			}&v=3.exp&libraries=geometry`}
			loadingElement={<div style={{ height: `100%` }} />}
			containerElement={<div style={{ height: height, width: width }} />}
			mapElement={<div style={{ height: `100%` }} />}
		/>
	);
};
