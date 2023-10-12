import React, { useCallback, useRef, useReducer, useEffect } from 'react';

import { Chip } from '../../chip';
import { Input } from '../input';
import { isValidEmail } from '../../../../utilities';

import { StyledRecipients } from './Recipients.styles';
import { TRecipients } from './Recipients.types';

function valueReducer(
	state: string[] | null,
	action: { type: string; payload: string }
): string[] | null {
	if (action.type === 'add') {
		return ([] as string[]).concat((state != null ? state : []) as [], [
			action.payload,
		]);
	} else {
		return state?.filter((item) => item !== action.payload) ?? null;
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
	template: Template = Chip,
	value: defaultValue = null,
}) => {
	const [value, reduceValue] = useReducer(valueReducer, defaultValue);
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
					reduceValue({ type: 'add', payload: arr[0] });
					if (inputRef?.current?.['value'] != null) {
						inputRef.current['value'] = '';
					}
				}
			}
		},
		[]
	);

	const onDelete = useCallback((chip: string) => {
		reduceValue({ type: 'remove', payload: chip });
	}, []);

	return (
		<StyledRecipients>
			<Input
				type="email"
				name={name}
				onChange={onChange}
				disabled={value != null && value?.length >= maxItems}
				placeholder={
					placeholder ??
					`add up to ${maxItems} emails separated by "${separator}"`
				}
				ref={inputRef}
			/>
			{value != null && value.length > 0 && (
				<div className="recipients__chips-container">
					{/* <ListItem key={data.key}> */}
					{value.map((chip, index) => (
						<span key={chip}>
							<Template
								label={chip}
								color="primary"
								onDelete={onDelete}
							/>
						</span>
					))}
					{/* </ListItem> */}
				</div>
			)}
		</StyledRecipients>
	);
};
