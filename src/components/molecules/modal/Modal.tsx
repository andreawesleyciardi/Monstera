import Dialog from '@mui/material/Dialog';

import { TModal } from './Modal.types';
import {  } from './Modal.styles';

export const Modal = (props: TModal) => {
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

		let timer = useRef<any>(null);

		useEffect(() => {
			if (close == 'auto') {
				timer.current = setTimeout(() => onClose(id), duration);
				return () => clearTimeout(timer.current);
			}
		}, []);

		return (
			<StyledAlert id={id} $variant={variant} ref={ref}>
				<div>
					{Content != null ? <Content /> : <p>{description}</p>}
				</div>
				{hasClose && (
					<button
						id={`alert-close_${id}`}
						className="btn btn-link"
						onClick={() => {
							clearTimeout(timer.current);
							onClose(id);
						}}
					>
						x
					</button>
				)}
			</StyledAlert>
		);
	})
);
