import React from 'react';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';

import PreviewCollection from '../../Components/preview-collection/preview-collection.component';

const ShopPage = ({ collections }) => {
	return (
		<div className="shop-page">
			{collections.map(({ id, ...otherCollectionProps }) => (
				<PreviewCollection key={id} {...otherCollectionProps} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
