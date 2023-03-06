const orderReducer = (state, { type, payload }) => {
	switch (type) {
		case "GET_ORDERS":
			return { ...state, orders: [...state.orders, payload] };
		default:
			return state;
	}
};

export { orderReducer };