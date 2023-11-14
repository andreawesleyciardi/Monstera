import React, {
	useCallback,
	useRef,
	useReducer,
	useEffect,
	useState,
} from 'react';

import { Chip } from '../../chip';
import { Input } from '../input';
import { isValidEmail } from '../../../../utilities';

import { StyledRecipients } from './Recipients.styles';
import { TRecipients } from './Recipients.types';

function valueReducer(
	state: string[] | null,
	action: { type: string; payload: string; index?: number | null }
): string[] | null {
	if (
		(action.type === 'add' || action.type === 'edit') &&
		state != null &&
		state.length > 0 &&
		state.includes(action.payload) === true
	) {
		return state;
	}
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
		return editedState.length > 0 ? editedState : null;
	}
}

export const Recipients = React.forwardRef(
	(
		{
			autoFocus = false,
			className = null,
			blackList = undefined,
			id = null,
			maxItems = 3,
			name = 'recipients',
			onChange: onValueChange,
			placeholder = null,
			separator = ';',
			template: Template = Chip,
			value: defaultValue = null,
		}: TRecipients,
		ref?: React.Ref<HTMLInputElement>
	) => {
		const [value, reduceValue] = useReducer(valueReducer, defaultValue);
		const inputRef = useRef<HTMLInputElement | null>(null);
		const [selected, setSelect] = useState<number | null>(null);

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
						if (
							!(
								value != null &&
								value?.length > 0 &&
								value?.findIndex((item) => item == arr[0]) > -1
							)
						) {
							reduceValue({
								type: selected == null ? 'add' : 'edit',
								payload: arr[0],
								index: selected as number | null,
							});
						}
						if (inputRef?.current?.['value'] != null) {
							inputRef.current['value'] = '';
						}
						if (selected != null) {
							setSelect(null);
						}
					}
				}
			},
			[value, selected]
		);

		const onClickChip = useCallback(
			(
				e: string | React.MouseEvent<HTMLDivElement, MouseEvent>,
				chip: string
			) => {
				if (inputRef?.current != null) {
					if (selected == null) {
						setSelect(
							(value ?? []).findIndex((item) => item == chip)
						);
						inputRef.current['value'] = chip;
					} else {
						setSelect(null);
						inputRef.current['value'] = '';
					}
					inputRef.current.focus();
				}
			},
			[value, selected]
		);

		const onDelete = useCallback(
			(chip: string) => {
				reduceValue({ type: 'remove', payload: chip });
				if (selected != null) {
					setSelect(null);
					if (inputRef?.current != null) {
						inputRef.current['value'] = '';
					}
				}
			},
			[selected]
		);

		const setRef = useCallback((el: HTMLInputElement) => {
			inputRef.current = el;
			console.log('setRef ref');
			console.log(ref);
			console.log('typeof ref');
			console.log(typeof ref);
			if (ref != null) {
				if (typeof ref === 'function') {
					ref(el);
				} else {
					// ref.current = el;
				}
			}
		}, []);

		return (
			<StyledRecipients id={id} className={className}>
				<Input
					type="email"
					name={name}
					onChange={onChange}
					disabled={
						value != null &&
						value?.length >= maxItems &&
						selected == null
					}
					placeholder={
						placeholder ??
						`add up to ${maxItems} emails separated by "${separator}"`
					}
					autoFocus={autoFocus}
					ref={setRef}
				/>
				{value != null && value.length > 0 && (
					<div className="recipients__chips-container">
						{/* <ListItem key={data.key}> */}
						{value.map((recipient, index) => {
							let isSelected = index === selected;
							let isValid =
								blackList != null
									? !blackList.includes(recipient)
									: true;
							return (
								<span key={recipient}>
									<Template
										label={recipient}
										color={
											isSelected === true
												? isValid === true
													? 'info'
													: 'warning'
												: isValid === true
												? 'secondary'
												: 'error'
										}
										clickable={true}
										onClick={onClickChip}
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
	}
);

/*
<br />
<br />
internal value: {JSON.stringify(value, null, '\t')}
<br />
<br />
inputRef: {JSON.stringify(inputRef?.current, null, '\t')}
<br />
<br />
selected: {selected}
*/
