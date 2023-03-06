import { createContext, useContext, useReducer } from "react";
import { orderReducer } from "./orderReducer";

const OrderContext = createContext();

const OrderProvider = ({ children }) => {
	const [orderState, dispatchOrder] = useReducer(orderReducer, { orders: [] });

	return (
		<OrderContext.Provider value={{ orderState, dispatchOrder }}>
			{children}
		</OrderContext.Provider>
	);
};

const useOrder = () => useContext(OrderContext);

export { OrderProvider, useOrder };