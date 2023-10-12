import React from 'react';

import { TBrandContext } from './Brand.types';

// Provider

const BrandContext = React.createContext<TBrandContext | null>(null);

export const BrandProvider = () => {
	return (
		<BrandContext.Provider
			value={{
				setBrand: handleSetBrand,
				setTheme: handleSetTheme,
				setComponents: handleSetComponents,
				brandedTheme: brandedTheme,
			}}
		>
			{brandedTheme && (
				<StyledThemeProvider
					theme={
						{
							brand: brandedTheme.brand,
							colors: brandedTheme.colors,
							components: monsteraComponents,
							isBranded: brandedTheme.isBranded,
							name: brandedTheme.name,
						} as TStyledThemeProvider
					}
				>
					<GlobalStyles />
					{children}
				</StyledThemeProvider>
			)}
		</BrandContext.Provider>
	);
};
