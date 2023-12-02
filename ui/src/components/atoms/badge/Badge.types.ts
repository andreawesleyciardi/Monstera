import { TVariants } from '../../../utilities/Types';

type TLegend = {
	[key: string]: string;
};

export type TBadge = {
	className?: string;
	legend?: TLegend;
	value: string | number | null;
	variant?: TVariants | 'default' | string;
};

export interface IStyledBadge {
	$variant?: TVariants | 'default' | string;
	$legend?: TLegend | null;
	// $color: string;
	// $legend: object;
}
