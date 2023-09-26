import React, {
	useCallback,
	useRef,
	useState,
	useReducer,
	MouseEvent,
	useEffect,
} from 'react';

import { Chips } from '../../chips';
import { Input } from '../input';
import { isValidEmail } from '../../../../utilities';

import { StyledRecipients } from './Recipients.styles';
import { TRecipients } from './Recipients.types';

function valueReducer(
	state: string[] | null,
	action: { type: string; value: string }
) {
	if (action.type === 'add') {
		return [].concat((state != null ? state : []) as [], [action.value]);
	} else {
		return state?.filter((item) => item !== action.value);
	}
}

export const Recipients: React.FC<TRecipients> = ({
	className = null,
	id = null,
	maxItems = 1,
	name = 'recipients',
	onChange: onValueChange,
	placeholder = null,
	separator = ';',
	template: Template = Chips,
	value: defaultValue = null,
}) => {
	const [value, reduceValue] = useReducer(valueReducer, defaultValue);
	// const [value, setValue] = useState(defaultValue);
	const inputRef = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		if (value != undefined && onValueChange != null) {
			onValueChange(value);
		}
	}, [value]);

	const onChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>) => {
			if (event.target.value.indexOf(separator) > -1) {
				let arr = event.target.value.split(separator);
				if (
					arr.length > 1 &&
					arr[0].length > 0 &&
					isValidEmail(arr[0])
				) {
					reduceValue({ type: 'add', value: arr[0] });
					if (inputRef?.current?.['value'] != null) {
						inputRef.current['value'] = '';
					}
				}
			}
		},
		[]
	);

	const onDelete = useCallback(
		(event: MouseEvent<HTMLButtonElement>, chip: string) => {
			reduceValue({ type: 'remove', value: chip });
		},
		[]
	);

	return (
		<StyledRecipients>
			<Input
				type="email"
				onChange={onChange}
				disabled={value != null && value?.length >= maxItems}
				placeholder={
					placeholder ??
					`add upt to ${maxItems} emails separated by "${separator}"`
				}
				ref={inputRef}
			/>
			<Template value={value} onDelete={onDelete} />
		</StyledRecipients>
	);
};
