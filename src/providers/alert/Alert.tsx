import React, {
	useCallback,
	useContext,
	useEffect,
	useRef,
	useState,
} from 'react';
import moment from 'moment';

import { EVariants, TPositions, TVariants } from '../../utilities/Types';
import { arrayVariants } from '../../utilities/Services';
import { TAlertConfig, TAlertContext, TAlertProvider } from './Alert.types';
import { StyledAlertProvider } from './Alert.styles';
import { Alert } from '../../components/alert/Alert';

const alertConfigurator = ({ delay = 0, ...alertProps }: TAlertConfig) => {
	if (alertProps.description == null && alertProps.content == null) {
		return null;
	}

	return {
		id: moment().format('x'),
		delay,
		alertProps: alertProps,
	};
};

const AlertContext = React.createContext<TAlertContext | null>(null);

export const AlertProvider: any = (props: TAlertProvider) => {
	const [newAlert, setNewAlert] = useState(null);
	const [removeAlert, setRemoveAlert] = useState(null);
	const [alerts, setAlerts] = useState({});

	const alertsRef = useRef([]);

	let { children, position = 'top-right' } = props;

	const handleAdd = (
		alertConfig: TAlertConfig | string,
		variant: TVariants
	) => {
		let testx = (
			typeof alertConfig === 'string'
				? { description: alertConfig }
				: alertConfig
		) as TAlertConfig;

		let test = Object.assign({}, testx, {
			variant: (variant ?? testx?.variant) as TVariants,
		}) as TAlertConfig;

		let alertElement = alertConfigurator(test);
		if (alertElement != null) {
			setTimeout(() => {
				setNewAlert(alertElement);
			}, alertElement.delay);
		}
	};

	const handleRemove = useCallback((id: string) => {
		if (alerts[id] != null) {
			setRemoveAlert(alerts[id]);
		}
	});

	useEffect(() => {
		if (newAlert != null) {
			let listAlerts = Object.assign({}, alerts, {
				[newAlert.id]: newAlert,
			});
			setAlerts(listAlerts);
			setNewAlert(null);
		}
	}, [newAlert]);

	useEffect(() => {
		if (removeAlert != null) {
			let listAlerts = Object.assign({}, alerts);
			const alert = alertsRef.current[removeAlert.id];
			alert.classList.add('fadeout');
			alert.ontransitionend = () => {
				delete listAlerts[removeAlert.id];
				setAlerts(listAlerts);
				setRemoveAlert(null);
			};
		}
	}, [removeAlert]);

	let variantsMethods: any = {};
	for (let i = 0; i < arrayVariants.length; i++) {
		variantsMethods[arrayVariants[i]] = (alertConfig: TAlertConfig) => {
			const variant = arrayVariants[i] as TVariants;
			handleAdd(alertConfig, variant);
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
			<StyledAlertProvider $position={position}>
				{Object.keys(alerts).length > 0 &&
					Object.keys(alerts).map((key: string, index) => {
						let { id, alertProps } = alerts[key];
						return (
							<Alert
								{...alertProps}
								id={id}
								key={id}
								ref={(el) => (alertsRef.current[id] = el)}
								onClose={handleRemove}
							/>
						);
					})}
			</StyledAlertProvider>
		</AlertContext.Provider>
	);
};

export const useAlert = () => {
	let alertContext = useContext(AlertContext);
	return alertContext;
};

// To manage the prop "position"
