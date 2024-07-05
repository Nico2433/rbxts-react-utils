import React from "@rbxts/react";

export const useGetContext = <T>(context: React.Context<T>): NonNullable<T> => {
	const getContext = React.useContext(context);

	if (!getContext) throw error("useGetContext has to be used within a context provider");

	return getContext;
};
