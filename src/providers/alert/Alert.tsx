import React, {
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react';
import moment from 'moment';

import { TVariants } from '../../utilities/Types';
import { arrayVariants } from '../../utilities/Services';
import {
	Alerts,
	AlertsRef,
	TAlertConfig,
	TAlertConfigured,
	TAlertContext,
	TAlertProvider,
} from './Alert.types';
import { StyledAlertProvider } from './Alert.styles';
import { Alert } from '../../components/atoms/alert/Alert';

// Add a prop "callback" if I want to execute a function after the alert disappears.

const alertConfigurator = (
	{ delay = 0, ...alertProps }: TAlertConfig,
	duration: number | undefined
) => {
	if (alertProps.description == null && alertProps.content == null) {
		return null;
	}

	return {
		id: moment().format('x'),
		delay,
		alertProps: Object.assign({}, { duration: duration }, alertProps),
	};
};

// Provider

const AlertContext = React.createContext<TAlertContext | null>(null);

export const AlertProvider: any = (props: TAlertProvider) => {
	const [newAlert, setNewAlert] = useState<TAlertConfigured | null>(null);
	const [removeAlert, setRemoveAlert] = useState<TAlertConfigured | null>(
		null
	);
	const [backdrop, setBackdrop] = useState<string | null>(null);
	const [alerts, setAlerts] = useState<Alerts>({});

	const alertsRef = useRef<AlertsRef>({});

	let {
		children,
		duration,
		offset = { x: '0px', y: '0px' },
		position = 'top-right',
	} = props;

	const handleAdd = (
		alertConfig: TAlertConfig | string,
		hasBackdrop: boolean,
		variant: TVariants
	) => {
		let alertConfigObj = (
			typeof alertConfig === 'string'
				? { description: alertConfig }
				: alertConfig
		) as TAlertConfig;

		let alertConfigFullObj = Object.assign({}, alertConfigObj, {
			variant: (variant ?? alertConfigObj?.variant) as TVariants,
		}) as TAlertConfig;

		let alertElement = alertConfigurator(
			alertConfigFullObj,
			duration
		) as TAlertConfigured;
		if (alertElement != null) {
			setTimeout(() => {
				setNewAlert(alertElement);
				if (hasBackdrop == true) {
					setBackdrop(alertElement.id);
				}
			}, alertElement.delay);
		}
	};

	const handleRemove = (id: string) => {
		if (alerts[id] != null) {
			setRemoveAlert(alerts[id]);
		}
	};

	useEffect(() => {
		if (newAlert != null) {
			let listAlerts = Object.assign({}, alerts, {
				[newAlert.id]: newAlert as TAlertConfigured,
			});
			setAlerts(listAlerts);
			setNewAlert(null);
		}
	}, [newAlert]);

	useEffect(() => {
		if (removeAlert != null) {
			let listAlerts = Object.assign({}, alerts);
			const id = removeAlert.id;
			if (alertsRef?.current != null && alertsRef?.current[id] != null) {
				const alert = alertsRef.current[removeAlert.id];
				alert.classList.add('fadeout');
				alert.ontransitionend = () => {
					delete listAlerts[removeAlert.id];
					setAlerts(listAlerts);
					setRemoveAlert(null);
					if (backdrop != null && backdrop == removeAlert.id) {
						setBackdrop(null);
					}
				};
			}
		}
	}, [removeAlert]);

	let variantsMethods: any = {};
	for (let i = 0; i < arrayVariants.length; i++) {
		variantsMethods[arrayVariants[i]] = (
			alertConfig: TAlertConfig,
			hasBackdrop: boolean
		) => {
			const variant = arrayVariants[i] as TVariants;
			handleAdd(alertConfig, hasBackdrop, variant);
		};
	}

	return (
		<AlertContext.Provider
			value={{
				add: handleAdd,
				remove: handleRemove,
				...variantsMethods,
			}}
		>
			{children}
			<StyledAlertProvider
				$position={position}
				$offset={offset}
				$variant={backdrop != null ? 'backdrop' : 'default'}
			>
				{Object.keys(alerts).length > 0 &&
					Object.keys(alerts).map((key: string, index) => {
						let { id, alertProps } = alerts[key];
						return (
							<Alert
								{...alertProps}
								id={id}
								key={id}
								ref={(el) =>
									(alertsRef.current[id] = el as HTMLElement)
								}
								onClose={handleRemove}
							/>
						);
					})}
			</StyledAlertProvider>
		</AlertContext.Provider>
	);
};

// Hook

export const useAlert = () => {
	let alertContext = useContext(AlertContext);
	return alertContext;
};
