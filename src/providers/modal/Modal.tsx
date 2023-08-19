import React, { useContext } from 'react';

import { TModalContext, TModalOpen, TModalProvider } from './Modal.types';

// Provider

const ModalContext = React.createContext<TModalContext | null>(null);

export const ModalProvider: any = (props: TModalProvider) => {
	const handleOpen: TModalOpen = (
		content,
		contentProps,
		onResolve,
		onReject
	) => {
		// let {
		//     contentProps,
		//     modalProps
		// } = usemodalcontext(passedProps);
		// setContentComponent(contentComponent);
		// setContentProps(contentProps);
		// setModalProps(modalProps);
		// setHandleResolve(() => onResolve);
		// setHandleReject(() => onReject);
	};

	const handleClose = useCallback((successful, result, params) => {
		// if (successful === true) {
		//     if (handleResolve !== null) {
		//         handleResolve(result, params);
		//     }
		// }
		// else if (successful === false) {
		//     if (handleReject !== null) {
		//         handleReject(result, params);
		//     }
		// }
		// setShow(false);
	});

	return (
		<ModalContext.Provider
			value={{
				open: handleOpen,
				close: handleClose,
			}}
		>
			{brandedTheme && (
				<StyledThemeProvider
					theme={{
						name: brandedTheme.name,
						colors: brandedTheme.colors,
					}}
				>
					{children}
				</StyledThemeProvider>
			)}
		</ModalContext.Provider>
	);
};

// Hook

export const useModal = () => {
	let modalContext = useContext(ModalContext);
	return modalContext;
};
