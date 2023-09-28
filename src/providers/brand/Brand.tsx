import React from 'react';

import { TBrandContext } from './Brand.types';

// Provider

const BrandContext = React.createContext<TBrandContext | null>(null);

export const BrandProvider = () => {};
