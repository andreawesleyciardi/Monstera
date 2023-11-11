import React, { useCallback } from 'react';

import { TList } from './List.types';
import { StyledList } from './List.styles';

import { Action, Badge, Button } from '../..';

export const List = (props: TList) => {
	let {
		actions = [],
		counter = null,
		data = [],
		isEditable = true,
		itemActions = [],
		title,
	} = props;

	const addItem = useCallback(() => {}, []);

	const actionAdd = actions.find((action) => action.type === 'add');
	const actionDelete = actions.find((action) => action.type === 'delete');

	return (
		<StyledList className="list">
			<header className="list__header">
				<h3>{title}</h3>
				{counter != null && (
					<Badge className="list__counter" value={counter} />
				)}
				<div className="list__actions-container">
					{actions
						.filter(
							(action) =>
								action.type !== 'add' &&
								action.type !== 'delete'
						)
						.map((action) => (
							<Button
								variant="link"
								className="list__button list__button-add"
								onClick={(e) => {
									action.onClick && action.onClick(e);
								}}
							>
								<p>+ Add Action</p>
								<hr />
							</Button>
						))}
					{actionDelete != null && (
						<Action label="Delete all" {...actionDelete} />
					)}
				</div>
			</header>
			{actionAdd != null && (
				<Button
					variant="link"
					className="list__button list__button-add"
					onClick={(e) => {
						actionAdd?.onClick != null && actionAdd.onClick(e);
					}}
				>
					<p>+ Add Action</p>
					<hr />
				</Button>
			)}
			<p>Bla bla bla</p>
		</StyledList>
	);
};
