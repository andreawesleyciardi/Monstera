import React, { useCallback, useRef, useReducer, useEffect } from 'react';

import { Chip } from '../../chip';
import { Input } from '../input';
import { isValidEmail } from '../../../../utilities';

import { StyledRecipients } from './Recipients.styles';
import { TRecipients } from './Recipients.types';

function valueReducer(
	state: string[] | null,
	action: { type: string; payload: string; index?: number | null }
): string[] | null {
	if (action.type === 'add') {
		return ([] as string[]).concat((state != null ? state : []) as [], [
			action.payload,
		]);
	} else if (action.type === 'edit' && action.index != null) {
		const editedState: string[] = ([] as string[]).concat(
			state != null ? state : []
		);
		editedState[action.index] = action.payload;
		return editedState;
	} else {
		const editedState: string[] = state?.filter(
			(item) => item !== action.payload
		) as string[];
		debugger;
		return editedState.length > 0 ? editedState : null;
	}
}

export const Recipients: React.FC<TRecipients> = ({
	autoFocus = false,
	className = null,
	id = null,
	maxItems = 3,
	name = 'recipients',
	onChange: onValueChange,
	placeholder = null,
	separator = ';',
	template: Template = Chip,
	value: defaultValue = null,
	validation = null,
}) => {
	const [value, reduceValue] = useReducer(valueReducer, defaultValue);
	const inputRef = useRef<HTMLInputElement | null>(null);
	const selectedRef = useRef<number | null>(null);

	useEffect(() => {
		if (value !== undefined && onValueChange != null) {
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
					reduceValue({
						type: selectedRef.current == null ? 'add' : 'edit',
						payload: arr[0],
						index: selectedRef.current as number | null,
					});
					if (inputRef?.current?.['value'] != null) {
						inputRef.current['value'] = '';
					}
					if (selectedRef.current != null) {
						selectedRef.current = null;
					}
				}
			}
		},
		[]
	);

	const onClick = useCallback(
		(e: React.MouseEvent, chip: string, index: number) => {
			if (inputRef?.current != null) {
				selectedRef.current = index;
				inputRef.current['value'] = chip;
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
				autoFocus={autoFocus}
				ref={inputRef}
			/>
			{value != null && value.length > 0 && (
				<div className="recipients__chips-container">
					{/* <ListItem key={data.key}> */}
					{value.map((chip, index) => {
						let isValid = true;
						if (validation != null) {
							isValid = validation(chip);
						}
						return (
							<span key={chip}>
								<Template
									label={chip}
									color={
										isValid === true ? 'secondary' : 'error'
									}
									clickable={true}
									onClick={(e) => {
										onClick(e, chip, index);
									}}
									onDelete={onDelete}
								/>
							</span>
						);
					})}
					{/* </ListItem> */}
				</div>
			)}
		</StyledRecipients>
	);
};
