import React, { useEffect } from 'react';

import { TAlert } from './Alert.types';
import { StyledAlert } from './Alert.styles';

export const Alert = React.forwardRef((props: TAlert, ref) => {
	let {
		content: Content,
		close = 'auto',
		description,
		duration = 3000,
		hasClose = true,
		id,
		onClose,
		title,
		variant = 'success',
	} = props;

	useEffect(() => {
		if (close == 'auto') {
			const timer = setTimeout(() => onClose(id), duration);
			return () => clearTimeout(timer);
		}
	}, []);

	return (
		<StyledAlert id={id} $variant={variant} ref={ref}>
			<div>{Content != null ? <Content /> : <p>{description}</p>}</div>
			{hasClose && (
				<button
					id={`alert-close_${id}`}
					className="btn btn-link"
					onClick={() => {
						onClose(id);
					}}
				>
					x
				</button>
			)}
		</StyledAlert>
	);
});
