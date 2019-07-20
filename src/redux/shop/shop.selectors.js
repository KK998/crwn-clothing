import { createSelector } from 'reselect';

const selectStop = state => state.shop;

export const selectCollections = createSelector(
	[selectStop],
	shop => shop.collections
);

export const selectCollection = collectionUrlParam =>
	createSelector(
		[selectCollections],
		collections => (collections ? collections[collectionUrlParam] : null)
	);

export const selectCollectionsForPreview = createSelector(
	[selectCollections],
	collections =>
		collections ? Object.keys(collections).map(key => collections[key]) : []
);
