import { createSelector } from 'reselect';

const selectStop = state => state.shop;

export const selectCollections = createSelector(
	[selectStop],
	shop => shop.collections
);
