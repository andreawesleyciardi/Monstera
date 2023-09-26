import React from 'react';

import { StyledChips } from './Chips.styles';
import { TChips } from './Chips.types';

export const Chips: React.FC<TChips> = React.memo(
	({ onDelete = null, value = [] }) => {
		return (
			<StyledChips>
				{value?.map((chip, index) => (
					<div key={index}>
						<p>{chip}</p>
						{onDelete != null && (
							<button
								type="button"
								onClick={(event) => {
									onDelete(event, chip);
								}}
							>
								x
							</button>
						)}
					</div>
				))}
			</StyledChips>
		);
	}
);
